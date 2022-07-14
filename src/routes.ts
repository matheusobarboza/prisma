import { Router } from 'express'
import { CreateCategoryController } from './controllers/CreateCategoryController'
import { CreateProductCategoryController } from './controllers/CreateProductCategoryController'
import { CreateProductController } from './controllers/CreateProductController'

const router = Router()

const createProduct = new CreateProductController()
const createCategory = new CreateCategoryController()
const createProductCategoryController = new CreateProductCategoryController()

router.post('/product', createProduct.handle)
router.post('/category', createCategory.handle)
router.post('/productCategory', createProductCategoryController.handle)

export { router }
