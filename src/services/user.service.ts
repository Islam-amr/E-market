import { User } from '../entities/User.entity';
import DB from '../utils/database';

type createUserParams = {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
}

type editUserParams = {
    userId: number
} & createUserParams

const UserDataSource = DB.getRepository(User)

const getUser = async (userId: number) => {
    const user = await UserDataSource.findOneBy({ id: userId })
    return user
}

const getUsers = async () => {
    const users = await UserDataSource.find()
    return users
}

const createUser = async (params: createUserParams) => {
    const { firstName, lastName, email, phone, address } = params
    
    const user = new User()
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.phone = phone
    user.address = address
    UserDataSource.manager.save(user).then(result => result)
}

const editUser = async (params: editUserParams) => {
    const { userId, firstName, lastName, email, phone, address } = params

    const selectedUser = await UserDataSource.findOneBy({ id: userId })
    await UserDataSource.merge(selectedUser as User, { firstName, lastName, email, phone, address })
    await UserDataSource.save(selectedUser as User).then(results => results)
}

const deleteUser = async (userId: number) => {
    UserDataSource.delete(userId).then(result => result)
}



export { getUser, getUsers, createUser, editUser, deleteUser }