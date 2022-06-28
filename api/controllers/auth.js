import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";

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

    const { password, isAdmin, ...userData } = user._doc;
    res.status(201).json({ ...userData });
  } catch (error) {
    next(error);
  }
};
