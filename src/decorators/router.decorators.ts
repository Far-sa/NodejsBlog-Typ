import { Router } from 'express'

const decoratorRouter: Router = Router()

export function Get (path?: string | undefined) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const route = path
      ? path[0] == '/'
        ? path
        : '/' + path
      : '/' + propertyKey
    decoratorRouter.get(`${route}`, target[propertyKey])
  }
}
export function Post (path: string | undefined) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const route = path
      ? path[0] == '/'
        ? path
        : '/' + path
      : '/' + propertyKey
    decoratorRouter.post('/', target[propertyKey])
  }
}
export function Put (path: string | undefined) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const route = path
      ? path[0] == '/'
        ? path
        : '/' + path
      : '/' + propertyKey
    decoratorRouter.put('/', target[propertyKey])
  }
}
export function Patch (path: string | undefined) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const route = path
      ? path[0] == '/'
        ? path
        : '/' + path
      : '/' + propertyKey
    decoratorRouter.patch('/', target[propertyKey])
  }
}
export function Delete (path: string | undefined) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const route = path
      ? path[0] == '/'
        ? path
        : '/' + path
      : '/' + propertyKey
    decoratorRouter.delete('/', target[propertyKey])
  }
}

export function DecoratorController (controllerPath?: string | undefined) {
  return function (target: any) {
    if (controllerPath?.[0] == '/') controllerPath = '/' + controllerPath
    const path = controllerPath ? controllerPath : '/'
    decoratorRouter.use(path, decoratorRouter)
  }
}

export default decoratorRouter
