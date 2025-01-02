const {Brand, Type} = require('../models/models')
const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");

class BrandController {
    async create(req, res, next){
        const {name} = req.body
        let candidate;
        candidate = await Brand.findOne({where: {name}})
        if (candidate) {
            return next(ApiError.badRequest('a brand with this name already exists'))
        }
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const brand = await Brand.create({name, img:fileName})
        return res.json(brand)
    }
    async getAll(req, res){
        const brands = await Brand.findAll()
        return res.json(brands)
    }
    async delete(req, res, next){
        const {id} = req.params
        const brand = await Brand.findOne({where:{id}})
        // return res.json(brand)
        await brand.destroy()
        return res.json({message: `${id} deleted`})

    }

}

module.exports = new BrandController()