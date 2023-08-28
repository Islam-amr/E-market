import { Request, Response, NextFunction } from "express";
import { User } from "../entities/User.entity";
import DB from '../utils/database'

const UserDataSource = DB.getRepository(User)

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    await UserDataSource.find().then((users) => {
        res.send(users)
    })
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    await UserDataSource.findOneBy({ id: parseInt(req.params.userId) })
        .then(user => res.send(user))
        .catch(e => console.log(e))
}

export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    await UserDataSource.delete(parseInt(req.params.userId))
        .then(() => res.send({ message: 'User deleted successfully' }))
        .catch(e => console.log(e))
}

export const editUser = async (req: Request, res: Response, next: NextFunction) => {
    const selectedUser = await UserDataSource.findOneBy({ id: parseInt(req.params.userId) })

    await UserDataSource.merge(selectedUser as User, req.body)
    await UserDataSource.save(selectedUser as User)
        .then(results => res.send(results))
        .catch(e => console.log(e))
}

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, phone, address } = req.body
    const user = new User()
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.phone = phone
    user.address = address
    await UserDataSource.manager.save(user).then(
        () => {
            res.status(201)
            res.send({ message: 'User created successfully' })
        },
        (e) => console.log(e)
    )
}