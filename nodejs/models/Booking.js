import express from "express";
import{
    deleteBooking,
    getBooking,
    getBookings,
    insertBooking,
    updateBooking
}from '../controller/Booking.js'

const router6=express.Router()

router6.get("/",getBookings)
router6.get("/:id",getBooking)
router6.post("/",insertBooking)
router6.put("/:id",updateBooking)
router6.delete("/:id",deleteBooking)

export default router6