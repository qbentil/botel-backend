import DBCONNECT from './database/index.js'
import authRoute from './routes/auth.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import usersRoute from './routes/users.js'

dotenv.config();
const PORT = process.env.PORT || 3000;
const APP = express();
APP.use(cors({credentials: true, origin:true}));
// set access-control-allow-origin header
const headers = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
};


// MIDDLEWARES
APP.use(express.json());
APP.use(cookieParser());
APP.use('/hotels', headers, hotelsRoute);
APP.use('/rooms', headers, roomsRoute);
APP.use('/users', headers, usersRoute);
APP.use('/auth', headers, authRoute);

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