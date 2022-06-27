import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

const APP = express();
dotenv.config();


const DBCONNECT  = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        // console.log('DB Connected');
      } catch (error) {
        console.log(error);
      }
}

mongoose.connection.on('connected', () => {
    console.log('MongoDB Connected');
})
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB Disconnected');
})

APP.get('/', (req, res) => {
    res.send('Hello World');
})

APP.listen(8800, () =>{
    DBCONNECT();
    console.log('Server is running on port 8800......');
})