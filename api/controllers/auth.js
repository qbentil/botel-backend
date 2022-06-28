import User from "../models/User.js";
import bcrypt from "bcryptjs";

// register
export const register = async (req, res, next) => {
    const { username, email, password, name } = req.body;
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    try {
        const user = new User({
            username,
            email,
            password : hash,
            name
        })
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
}