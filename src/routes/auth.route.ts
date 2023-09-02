import express from "express";

type createUserParams = {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
}

const router = express.Router()

router.get('/register', (req, res, next) => {
    return res.send('som3a said no')
})

router.get('/login', (req, res, next) => {
    const { email, password } = req.body
    
    return
})

export default router