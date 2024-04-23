import express from "express";
import { getPackage } from "../controller/personaltour.js";

const router17 = express.Router();

router17.get("/:id", getPackage);

export default router17;
