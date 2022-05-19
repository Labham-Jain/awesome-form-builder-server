// module imports
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import FormRouter from './routes/form';
import deliverMiddleware from './middlewares/deliver';
// file imports


// initializations

// # environment variables
dotenv.config()

// # express
const app = express();

// # mongodb
const mongoURI = process.env.MongoURI || '';

mongoose.connect(mongoURI).then(() => {
  console.log('mongodb connected!')
}).catch((error) => {
  console.log(error.message)
});

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(deliverMiddleware)
app.use(cors())

// routes

app.use('/form', FormRouter)


// start server

app.listen(5000, () => {
  console.log(`server started on http://localhost:5000/`)
})