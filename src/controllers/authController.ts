import { NextFunction, Request, Response } from 'express'

import { DecoratorController, Post } from '../decorators/router.decorators'
import { UserModel } from '../models/user.model'
import { compareHashedString, HashString, jwtGenerator } from '../modules/utils'
import { FinedUser, IUser } from '../types/user.types'
import { sign } from 'jsonwebtoken'

@DecoratorController('/auth')
export class AuthController {
  @Post()
  async register (req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password, fullname } = req.body
      const newPass = HashString(password)

      const checkUser = await UserModel.findOne({ username })
      if (checkUser) throw { status: 400, message: 'Username already used' }
      const user = await UserModel.create({
        username,
        fullname,
        password: newPass
      })
      res.status(201).json(user)
    } catch (err) {
      next(err)
    }
  }
  @Post()
  async login (req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password } = req.body
      const existUser: FinedUser = await UserModel.findOne({ username })
      if (!existUser)
        throw { status: 401, message: 'the username or password is incorrect' }
      const realUser = compareHashedString(password, existUser.password)
      if (!realUser)
        throw { status: 401, message: 'the username or password is incorrect' }

      await jwtGenerator({ username, id: existUser._id })
      const user = await UserModel.findById(existUser._id, {
        __v: 0,
        password: 0
      })
      return res.json({
        statusCode: 200,
        data: {
          user
        }
      })
    } catch (error) {
      next(error)
    }
  }
}

//  const user = await UserModel.findOne({ id: existedUser._id })
//       const token = sign({ id: user?._id }, 'puppet', {
//         algorithm: 'HS512'
//       })
