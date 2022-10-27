import { ObjectId } from 'mongoose'

export interface IUser {
  fullname: string
  username: string
  password: string
  accessToken: string
  email?: string
  mobile?: string
  avatar?: string
}

export type FinedUser = (IUser & { _id: ObjectId }) | null
