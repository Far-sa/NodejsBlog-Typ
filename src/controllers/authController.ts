import { NextFunction, Request, Response } from 'express'

import { DecoratorController, Post } from '../decorators/router.decorators'

@DecoratorController('/auth')
export class AuthController {
  @Post('/auth/register')
  async register (req: Request, res: Response, next: NextFunction) {
    try {
      const { username, password, fullname } = req.body
      res.json(req.body)
    } catch (err) {
      next(err)
    }
  }
}
