import express from 'express'
import productCtrl from '../controllers/product.controller.js' 

const router = express.Router()

router.route('/api/products').get(productCtrl.searchByString)
router.route('/api/products').get(productCtrl.list)
router.route('/api/products/:id').get(productCtrl.read)
router.route('/api/products').post(productCtrl.create)
router.route('/api/products/:id').put(productCtrl.update)
router.route('/api/products/:id').delete(productCtrl.remove)
router.route('/api/products/').delete(productCtrl.removeAll)
router.param('id', productCtrl.productById)



 export default router

