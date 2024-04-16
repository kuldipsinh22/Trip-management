import express from "express";
import { getBookings } from "../controller/Booking.js";

const router14 = express.Router();

router14.get("/:id", getBookings);

export default router14;
