import { createError } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return next(createError("No token", 401));
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(createError("Invalid token", 403));
        req.user = user;
        next();
    })
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            next(createError("You are not authorized!", 403 ));
        }
    })
}
export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin){
            next();
        }else{
            next(createError("Unauthorized administrator access", 403 ));
        }
    })
}