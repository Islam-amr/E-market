import DB from '../utils/database'
import { Product } from '../entities/Product.entity'
import { User } from '../entities/User.entity'

const productRepo = DB.getRepository(Product)

export const addProduct = async (productParams: Omit<Product, 'id'>) => {
    const { title, description, price, quantity, image, seller } = productParams
    try {
        const product = new Product()
        product.title = title
        product.description = description
        product.price = price
        product.quantity = quantity
        product.image = image
        product.seller = seller
        await productRepo.manager.save(product).then(result => result)
    } catch (error) {
        return error
    }
}


export const getProducts = async () => {
    try {
        const products = await productRepo.find()
        return products
    } catch (error) {
        return error
    }
}

export const getProduct = async (id: Product['id']) => {
    try {
        const product = await productRepo.findOneBy({ id })
        return product
    } catch (error) {
        return error
    }
}

export const editProduct = async (updatedProduct: Product) => {
    try {
        const product = await productRepo.findOneBy({ id: updatedProduct.id })
        await productRepo.merge(product as Product, updatedProduct)
        await productRepo.save(product as Product).then(results => results)
        return product
    } catch (error) {
        return error
    }
}