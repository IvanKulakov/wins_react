const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, name, lastname, phone, email, role) => {
    return jwt.sign({id, name, lastname, phone, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {name, lastname, phone, email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Bad email or password'))
        }
        let candidate;
        candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('a user with this email already exists'))
        }
        candidate = await User.findOne({where: {phone}})
        if (candidate) {
            return next(ApiError.badRequest('a user with this phone already exists'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({name, lastname, phone, email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.name, user.lastname, user.phone, user.email, user.role)
        const user_res = {name: user.name, lastname: user.lastname, phone: user.phone, email: user.email, role: user.role}
        return res.json({token, user_res})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal("user not found"))
        }
        let comparePassword = await bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal("bad password"))
        }
        const token = generateJwt(user.id, user.name, user.lastname, user.phone, user.email, user.role)
        const userData = {
            id: user.id, name: user.name, lastname: user.lastname, phone: user.phone, email: user.email, role: user.role}
        return res.json({token, userData})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.name, req.user.lastname,  req.user.phone, req.user.email, req.user.role)
        const userData = {id: req.user.id, name: req.user.name, lastname: req.user.lastname, phone: req.user.phone, role: req.user.role}

        return res.json({token, userData})
    }
}

module.exports = new UserController()