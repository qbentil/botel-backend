import { createRoom, deleteRoom, getRoomById, getRooms, updateroom } from '../controllers/room.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

import express from 'express';

const router = express.Router();

// CREATE
router.post("/:hotelId", createRoom);

// UPDATE
router.put("/:id", verifyAdmin, updateroom);
// DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom)

// Rooms
router.get("/", getRooms)

// Room/:ID
router.get("/:id",   getRoomById)

export default router;