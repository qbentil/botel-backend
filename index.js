import authRoute from './routes/auth.js'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import express from 'express'
import hotelsRoute from './routes/hotels.js'
import mongoose from 'mongoose'
import roomsRoute from './routes/rooms.js'
import usersRoute from './routes/users.js'

dotenv.config();
const PORT = process.env.PORT || 3000;
const APP = express();


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
APP.use(cookieParser());
APP.use('/api/hotels', hotelsRoute);
APP.use('/api/rooms', roomsRoute);
APP.use('/api/users', usersRoute);
APP.use('/api/auth', authRoute);

// error handling MIDDLEWARE
APP.use((err, req, res, next) => {
    console.log("Middleware Error Hadnling");
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: err.stack
    })
})






APP.listen(PORT, () =>{
    DBCONNECT();
    console.log(`Server is running on port ${PORT} 🚀...`);
})