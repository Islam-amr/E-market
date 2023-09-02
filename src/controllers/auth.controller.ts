import { Request, Response, NextFunction } from "express";
import * as authService from '../services/auth.service'

export const register = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, phone, address, email, password } = req.body
    try {
        await authService.register({ firstName, lastName, phone, address, email, password })
        return res.status(201).send({ messge: "User created successfully" })
    } catch (error) {
        return res.status(500)
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body
    try {
        const response = await authService.login({ email, password })
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500)
    }
} 