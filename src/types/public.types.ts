import { ObjectId } from 'mongoose'
import { IUser } from './user.types'

export type ResponseMessage = {
  statusCode: number
  message?: string | undefined
  data?: object | undefined
}

export interface jwtGenPayloadDTO {
  id: ObjectId
  username: IUser['username']
}
