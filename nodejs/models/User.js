import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  insertUser,
  updatetUser,
} from "../controller/User.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now());
  },
});

const upload = multer({ storage: storage });

const router3 = express.Router();

router3.get("/", getUsers);
router3.get("/:id", getUser);
router3.post("/", upload.single("img"), insertUser);
router3.put("/:id", upload.single("img"), updatetUser);
router3.delete("/:id", deleteUser);

export default router3;
