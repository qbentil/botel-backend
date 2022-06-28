import { createHotel, deleteHotel, getHotelById, getHotels, updateHotel } from "../controllers/hotel.js";

import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin,  updateHotel);
// DELETE
router.delete("/:id",verifyAdmin,  deleteHotel)

// HOTELS
router.get("/", getHotels)

// HOTELS/:ID
router.get("/:id", getHotelById)

export default router;
