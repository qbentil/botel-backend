import express from 'express'

const APP = express();

APP.listen(8800, () =>{
    console.log('Server is running on port 8800');
})