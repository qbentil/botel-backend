import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

import express from "express";

const router = express.Router();

// router.get("/checkauth", verifyToken, (req, res, next) => {
//     res.send( "You are authenticated" );
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send( "Hello user, you are logged in" );
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send( "Hello user, you are an Admin" );
// });


// CREATE
router.post("/", createUser);

// UPDATE
router.put("/:id", verifyUser, updateUser);
// DELETE
router.delete("/:id", verifyUser, deleteUser)

// Users
router.get("/", verifyAdmin, getUsers)

// User/:ID
router.get("/:id", verifyUser,  getUserById)

export default router;
