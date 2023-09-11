import express from "express";
import { addProduct, getProducts, getProduct, editProduct } from "../controllers/product.controller";

const router = express.Router()

router.post('/add-product', addProduct)
router.get('/get-products', getProducts)
router.get('/get-product/:productId', getProduct)
router.put('/edit-product/:productId', editProduct)

export default router