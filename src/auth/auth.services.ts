import { UserModel } from '../models/user.model'
import { HashString } from '../modules/utils'
import { RegisterDTO } from './auth.dto'
import { IUser } from '../types/user.types'

export class AuthService {
  async register (userDTO: RegisterDTO): Promise<IUser> {
    const checkUser = await UserModel.findOne({ username: userDTO.username })
    if (checkUser) throw { status: 400, message: 'Username already used' }
    const newPass = HashString(userDTO.password)
    userDTO.password = newPass

    const user: IUser = await UserModel.create(userDTO)
    return user
  }
}
