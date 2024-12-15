const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, name, email, role) => {
    return jwt.sign({id, name, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next){
        const {name, email, tel, password, role} = req.body
        if(!email || !password){
            return next(ApiError.badRequest('Bad email or password'))
        }
        const candidate = await User.findOne({where:{email}})
            if(candidate){
                return next(ApiError.badRequest('a user with this email already exists'))
            }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({name, email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.name, user.role)
        return res.json({token})
    }
    async login(req, res, next){
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
            if(!user){
                return next(ApiError.internal("user not found"))
            }
            let comparePassword = await bcrypt.compareSync(password, user.password)
            if(!comparePassword){
                return next(ApiError.internal("bad password"))
            }
            const token = generateJwt(user.id, user.email, user.name, user.role )
            const userData = {name: user.name, role:user.role}
        return res.json({token, userData})
    }
    async check(req, res, next){
        const token = generateJwt(user.id, user.email, user.name, user.role )
        return res.json({token})
    }
}

module.exports = new UserController()