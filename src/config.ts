import dotenv from 'dotenv'

dotenv.config()

export default {
    PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: +process.env.DB_PORT!,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY
}