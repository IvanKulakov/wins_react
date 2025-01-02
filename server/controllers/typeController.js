const {Type, User, Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res, next){
        const {name} = req.body
        let candidate;
        candidate = await Type.findOne({where: {name}})
        if (candidate) {
            return next(ApiError.badRequest('a type with this name already exists'))
        }
        const type = await Type.create({name})
        return res.json(type)
    }
    async getAll(req, res){
        const types = await Type.findAll()
        return res.json(types)
    }
    async delete(req, res, next){
        const {id} = req.params
        const type = await Type.findOne({where:{id}})
        await type.destroy()
        return res.json({message: `${id} deleted`})

    }
}

module.exports = new TypeController()