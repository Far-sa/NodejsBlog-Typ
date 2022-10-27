import { NextFunction, Request, Response } from 'express'
import { DecoratorController, Get } from '../decorators/router.decorators'

@DecoratorController('/users')
export class HomeController {
  @Get()
  async getHomeInfo (req: Request, res: Response, next: NextFunction) {
    try {
      res.send('Hey users')
    } catch (err) {
      console.log(err)
      next(err)
    }
  }
}
