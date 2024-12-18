const {Product} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')

class ProductsController {
    async create(req, res, next){
        try{
            const {name, price, about, quantity, option, stars, brandId, typeId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({name, price, about, quantity, option, stars, img:fileName, brandId, typeId})
            // const product = await Product.create({name, price, about, quantity, option, stars, brandId, typeId})

            return res.json(product)
        }
        catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let product;
        if(!brandId && !typeId){
            product = await Product.findAndCountAll({limit, offset})

        }
        if(brandId && !typeId){
            product = await Product.findAndCountAll({where:{brandId}, limit, offset})

        }
        if(!brandId && typeId){
            product = await Product.findAndCountAll({where:{typeId}, limit, offset})

        }
        if(brandId && typeId){
            product = await Product.findAndCountAll({where:{typeId, brandId}, limit, offset})


        }
        return res.json(product)
    }
    async getOne(req, res){
        const {id} = req.params
        const product = await Product.findOne(
            {where:{id}}
        )
        return res.json(product)
    }
}

module.exports = new ProductsController()