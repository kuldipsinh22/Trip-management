import express from "express";
import { getUser } from "../controller/MainLogin.js";

const router12 = express.Router();

router12.get("/", getUser);

export default router12;
