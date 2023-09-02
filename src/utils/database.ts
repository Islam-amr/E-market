import { DataSource } from "typeorm";
import dotenv from 'dotenv'

dotenv.config()

export default new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: ["src/entities/**/*.ts"],
    subscribers: [],
    migrations: [],
})