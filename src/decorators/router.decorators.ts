import { Router } from 'express'

const decoratorRouter: Router = Router()

export function Get (path?: string | undefined) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    decoratorRouter.get('/', descriptor.value)
  }
}

export function DecoratorController (controllerPath?: string | undefined) {
  return function (target: any) {
    //console.log(target)
    //console.log(new target())
    if (controllerPath?.[0] == '/') controllerPath = '/' + controllerPath
    const path = controllerPath ? controllerPath : '/'
    decoratorRouter.use(path, decoratorRouter)
    return class extends target {}
  }
}

export default decoratorRouter
