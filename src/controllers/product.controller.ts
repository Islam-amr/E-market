import { Request, Response } from 'express'
import { User } from '../entities/User.entity'
import * as productService from '../services/product.service'


export const addProduct = async (req: Request, res: Response) => {
    try {
        const { title, description, price, quantity, image } = req.body
        const seller = req.user as User
        await productService.addProduct({ title, description, price, quantity, image, seller })
        return res.status(201).send({ message: "Product created successfully" })
    } catch (error) {
        console.log(error)
        return res.status(500)
    }
}

export const getProducts = async (req: Request, res: Response) => {
    try {
        const allProducts = await productService.getProducts()
        return res.status(200).send(allProducts)
    } catch (error) {
        console.log(error)
        return res.status(500)
    }
}

export const getProduct = async (req: Request, res: Response) => {
    const productId = req.params.productId
    try {
        const product = await productService.getProduct(productId)
        return res.status(200).send(product)
    } catch (error) {
        console.log(error)
        return res.status(500)
    }
}

export const editProduct = async (req: Request, res: Response) => {
    const productId = req.params.productId
    const updatedProduct = { ...req.body, productId }
    try {
        await productService.editProduct(updatedProduct)
        return res.status(201).send({ message: "Product updated successfully" })
    } catch (error) {
        console.log(error)
        return res.status(500)
    }
}