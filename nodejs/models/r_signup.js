import express from "express";
import { insertUser } from "../controller/Signup.js";

const router15 = express.Router();

router15.post("/", insertUser);

export default router15;
