import express from "express";
import { insertBill, updateBill } from "../controller/Billing.js";

const router13 = express.Router();

router13.post("/", insertBill);
router13.put("/:id", updateBill);

export default router13;
