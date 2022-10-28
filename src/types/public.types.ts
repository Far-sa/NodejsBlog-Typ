import { ObjectId } from 'mongoose'
import { IUser } from './user.types'

export type ResponseMessage = {
  statusCode: number
  message?: string | undefined
  data?: object | undefined
  errors?: object | undefined
}

export interface jwtGenPayloadDTO {
  id: ObjectId
  username: IUser['username']
}
export type FineDoc<T> = T | null | undefined
