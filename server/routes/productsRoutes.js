const Router = require('express')
const router = new Router()
const productsController = require('../controllers/productsController')


router.post('/', productsController.create)
router.get('/', productsController.getAll)
router.get('/:id', productsController.getOne)

router.delete('/',)


module.exports = router