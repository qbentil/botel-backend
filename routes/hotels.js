import { coutHotelsByCity, createHotel, deleteHotel, getHotelById, getHotels, getHotelsByCity, updateHotel } from "../controllers/hotel.js";

import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Remove verifyAdmin middleware to test
// CREATE
router.post("/",  createHotel);

// UPDATE
router.put("/:id",   updateHotel);
// DELETE
router.delete("/:id",  deleteHotel)

// HOTELS
router.get("/", getHotels)

// HOTELS/:ID
router.get("/find/:id", getHotelById)

// HOTELS by city
router.get("/findbycity", getHotelsByCity)

// Count hotels by cities
router.get("/countbycity", coutHotelsByCity)

export default router;
