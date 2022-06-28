import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

// register
export const register = async (req, res, next) => {
  const { username, email, password, name } = req.body;
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);
  try {
    const user = new User({
      username,
      email,
      password: hash,
      name,
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

// Login
export const login = async (req, res, next) => {
  const { username } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return next(createError("User not found", 404));
    if (!bcrypt.compareSync(req.body.password, user.password))
      return next(createError("Invalid username or password", 401));

    //   Create a token
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET
    );

    const { password, isAdmin, ...userData } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...userData });
  } catch (error) {
    next(error);
  }
};
