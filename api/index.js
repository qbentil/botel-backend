import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import usersRoute from './routes/users.js'
import authRoute from './routes/auth.js'

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

// MIDDLEWARES
APP.use(express.json());
APP.use('/api/hotels', hotelsRoute);
APP.use('/api/rooms', roomsRoute);
APP.use('/api/users', usersRoute);
APP.use('/api/auth', authRoute);






APP.listen(8800, () =>{
    DBCONNECT();
    console.log('Server is running on port 8800......');
})