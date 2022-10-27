import { NextFunction, Request, Response } from 'express'

import { DecoratorController, Post } from '../decorators/router.decorators'
import { UserModel } from '../models/user.model'
import { HashString } from '../modules/utils'

@DecoratorController('/auth')
export class AuthController {
  @Post('/auth/register')
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
}
