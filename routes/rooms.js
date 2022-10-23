import { createRoom, deleteRoom, getRoomById, getRooms, updateroom } from '../controllers/room.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

import express from 'express';

const router = express.Router();

// CREATE
router.post("/:hotelId", createRoom);

// remove verifyAdmin middleware to test
// UPDATE
router.put("/:id",  updateroom);
// DELETE
router.delete("/:id/:hotelId",  deleteRoom)

// Rooms
router.get("/", getRooms)

// Room/:ID
router.get("/:id",   getRoomById)

export default router;