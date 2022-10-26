import { Router } from 'express'
import decoratorRouter from '../decorators/router.decorators'

const router: Router = Router()

router.use(decoratorRouter)

export default router
