import { Request, Response, NextFunction } from "express";
import * as userService from '../services/user.service'


export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userService.getUsers()
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500)
    }
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userService.getUser(parseInt(req.params.userId))
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500)
    }

}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await userService.deleteUser(parseInt(req.params.userId))
        return res.status(204).send({ message: 'User deleted successfully' })
    } catch (error) {
        return res.status(500)
    }
}

export const editUser = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, phone, address } = req.body
    try {
        await userService.editUser({ userId: parseInt(req.params.userId), firstName, lastName, email, phone, address })
        return res.status(200).send({ message: 'User updated successfully' })
    } catch (error) {
        return res.status(500)
    }
}

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, phone, address } = req.body
    try {
        await userService.createUser({ firstName, lastName, email, phone, address })
        return res.status(201).send({ message: 'User created successfully' })
    } catch (error) {
        return res.status(500)
    }
}