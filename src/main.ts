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

//* Lunch Server
const PORT = process.env.PORT
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
