import express from "express";
import {
  deleteInquirie,
  getInquirie,
  getInquiries,
  insertInquirie,
} from "../controller/Inquirie.js";

const router9 = express.Router();

router9.get("/", getInquiries);
router9.get("/:id", getInquirie);
router9.post("/", insertInquirie);
router9.delete("/:id", deleteInquirie);

export default router9;
