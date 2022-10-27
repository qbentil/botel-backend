import DBCONNECT from './database/index.js'
import authRoute from './routes/auth.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import usersRoute from './routes/users.js'

const corsOptions ={
    origin: true,
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
dotenv.config();
const PORT = process.env.PORT || 3000;
const APP = express();
APP.use(cors(corsOptions));


// MIDDLEWARES
APP.use(express.json());
APP.use(cookieParser());
APP.use('/hotels', hotelsRoute);
APP.use('/rooms', roomsRoute);
APP.use('/users', usersRoute);
APP.use('/auth', authRoute);

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