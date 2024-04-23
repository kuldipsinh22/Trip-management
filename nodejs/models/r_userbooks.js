import express from "express";
import { getBookings } from "../controller/Userbooks.js";

const router16 = express.Router();

router16.post("/:id", getBookings);

export default router16;
