import "reflect-metadata"
import express from 'express'
import DB from './utils/database'
import dotenv from 'dotenv'
import userRoute from './routes/user.route'

dotenv.config();

const app = express()
const port = process.env.PORT;

app.use(express.json());

app.use('/user', userRoute)

app.listen(port, () => {
    DB.initialize().then(() => console.log('Database connected'), (e) => {
        console.log(e)
        process.exit(1)
    })
});