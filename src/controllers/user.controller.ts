import { Request, Response, NextFunction } from "express";
import * as userService from '../services/user.service'
import { User } from "../entities/User.entity";


export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userService.getUsers()
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500)
    }
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).send(req.user)
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await userService.deleteUser(req.user?.id as string)
        return res.status(204).send({ message: 'User deleted successfully' })
    } catch (error) {
        return res.status(500)
    }
}

export const editUser = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, phone, address } = req.body

    try {
        await userService.editUser(req.user as User, { firstName, lastName, email, phone, address })
        return res.status(200).send({ message: 'User updated successfully' })
    } catch (error) {
        return res.status(500)
    }
}
