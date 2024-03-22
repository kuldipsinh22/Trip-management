import express from "express";
import{
    deleteUser,
    getUser,
    getUsers,
    insertUser,
    updatetUser
} from '../controller/User.js'

const router3=express.Router()

router3.get("/",getUsers)
router3.get("/:id",getUser)
router3.post("/",insertUser)
router3.put("/:id",updatetUser)
router3.delete("/:id",deleteUser)

export default router3
