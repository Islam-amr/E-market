import express, { Request, Response, NextFunction } from 'express'
import { createUser, deleteUser, editUser, getUser, getUsers } from '../controllers/user.controller'

const router = express.Router()

router.get('/get-users', getUsers)
router.get('/get-user/:userId', getUser)
router.post('/create-user', createUser)
router.put('/edit-user/:userId', editUser)
router.delete('/delete-user/:userId', deleteUser)


export default router