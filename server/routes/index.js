const Router = require('express')
const router = new Router()
const userRouter = require('./userRoutes')
const brandRouter = require('./brandRoutes')
const typeRouter = require('./typeRoutes')
const productsRouter = require('./productsRoutes')


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/products', productsRouter)



module.exports = router