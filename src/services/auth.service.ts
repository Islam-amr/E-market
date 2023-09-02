import { error } from 'console';
import { User } from '../entities/User.entity';
import DB from '../utils/database';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { omit } from 'lodash'
import { FindOptionsSelect } from 'typeorm';

type registerParams = {
    firstName: string
    lastName: string
    phone: string
    address: string
    email: string
    password: string
}

type loginParams = {
    email: string
    password: string
}

const UserDataSource = DB.getRepository(User)

export const register = async (params: registerParams) => {
    const { firstName, lastName, phone, address, email, password } = params

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User()
    user.firstName = firstName
    user.lastName = lastName
    user.phone = phone
    user.address = address
    user.email = email
    user.password = hashedPassword
    UserDataSource.manager.save(user).then(result => result)
}

export const login = async (params: loginParams) => {
    const { email, password } = params

    try {
        const user = await UserDataSource.findOne({ where: { email }, select: DB.getMetadata('user').columns.map((column) => column.propertyName) as FindOptionsSelect<User> })
        const passwordMatch = await bcrypt.compare(password, user?.password as string)

        if (!user || !passwordMatch) {
            throw new Error('Invalid email or password')
        }
        const token = jwt.sign({ id: user.id }, 'E_MARKET_PRIVATE_KEY', { expiresIn: 60 * 60 });

        return {
            user: omit(user, ['password']), token
        }
    } catch (error) {
        throw error
    }

}