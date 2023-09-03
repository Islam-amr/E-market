import express, { Request, Response, NextFunction } from 'express'
import { deleteUser, editUser, getUser, getUsers } from '../controllers/user.controller'
import verifyToken from '../middlewares/verifyToken'

const router = express.Router()

router.get('/get-users', getUsers)
router.get('/get-user', getUser)
router.put('/edit-user', editUser)
router.delete('/delete-user', deleteUser)


export default router