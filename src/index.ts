import "reflect-metadata"
import express from 'express'
import DB from './utils/database'
import userRoute from './routes/user.route'
import authRoute from './routes/auth.route'
import config from './config'
import verifyToken from "./middlewares/verifyToken"

const app = express()
const port = config.PORT;

app.use(express.json());

app.use('/user', [verifyToken], userRoute)
app.use('/auth', authRoute)


app.listen(port, () => {
    DB.initialize().then(() => console.log('Database connected'), (e) => {
        console.log(e)
        process.exit(1)
    })
});