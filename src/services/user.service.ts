import { User } from '../entities/User.entity';
import DB from '../utils/database';

type editedUserParams = {
    firstName: string, lastName: string, email: string, phone: string, address: string
}

export const UserDataSource = DB.getRepository(User)

const getUsers = async () => {
    const users = await UserDataSource.find()
    return users
}

const editUser = async (user: User, editedUser: editedUserParams) => {
    // const selectedUser = await UserDataSource.findOneBy({ id })
    await UserDataSource.merge(user as User, editedUser)
    await UserDataSource.save(user as User).then(results => results)
}

const deleteUser = async (userId: string) => {
    UserDataSource.delete(userId).then(result => result)
}



export { getUsers, editUser, deleteUser }