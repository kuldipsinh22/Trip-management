import express from "express";
import { getAdmin } from "../controller/Login.js";

const router11 = express.Router();

router11.get("/", getAdmin);

export default router11;
