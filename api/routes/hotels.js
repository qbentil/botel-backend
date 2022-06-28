import { createHotel, deleteHotel, getHotelById, getHotels, updateHotel } from "../controllers/hotel.js";

import express from "express";

const router = express.Router();

// CREATE
router.post("/", createHotel);

// UPDATE
router.put("/:id", updateHotel);
// DELETE
router.delete("/:id", deleteHotel)

// HOTELS
router.get("/", getHotels)

// HOTELS/:ID
router.get("/:id", getHotelById)

export default router;
