import express from 'express'
import { Application, Request, Response, NextFunction } from 'express'
import http, { Server } from 'http'
import dotenv from 'dotenv'

import { ResponseMessage } from './types/public.types'
import ApplicationRouter from './routes/index.routes'
import './app.module'

//* Basic CF
const app: Application = express()
const server: Server = http.createServer(app)
dotenv.config()
import './modules/mongoDBConfig'

//* Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//* Routes
app.use(ApplicationRouter)

//* 404
app.use((req: Request, res: Response, next: NextFunction) => {
  const response: ResponseMessage = {
    statusCode: 404,
    message: 'Page not Found'
  }
  return res.status(404).json(response)
})
//* Any Error
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode: number = +error?.status || 500
  const message: string = error?.message || 'Internal Server Error'

  const response: ResponseMessage = {
    statusCode,
    data: {
      message
    }
  }
  return res.status(statusCode).json(response)
})

//* Lunch Server
const PORT = process.env.PORT
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
