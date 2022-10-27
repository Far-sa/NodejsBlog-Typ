import mongoose from 'mongoose'

//const path = process.env.MONGODB_URI

mongoose
  .connect('mongodb://localhost:27017/node-ts')
  .then(() => console.log('Connected to Database'))
  .catch(err => console.log(err.message))
