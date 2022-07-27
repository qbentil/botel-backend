import USER from "../models/User.js";

export const createUser = async (req, res, next) => {
  const newUser = new USER(req.body);
  try {
    const User = await newUser.save();
    res.status(200).json(User);
  } catch (error) {
    next(error);
  }
};

// Update User
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await USER.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// delete User
export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await USER.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
  } catch (error) {
    next(error);
  }
};

// get all Users
export const getUsers = async (req, res, next) => {
  try {
    const Users = await USER.find();
    res.status(200).json(Users);
  } catch (error) {
    next(error);
  }
};

// get User by id
export const getUserById = async (req, res, next) => {
  try {
    const User = await USER.findById(req.params.id);
    res.status(200).json(User);
  } catch (error) {
    next(error);
  }
};
