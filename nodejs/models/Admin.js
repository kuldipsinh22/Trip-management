import express from "express";
import{
    deleteAdmin,
    getAdmin,
    getAdmins,
    insertAdmin,
    updateAdmin
}from '../controller/Admin.js'

const router1=express.Router()

router1.get("/",getAdmins)
router1.get("/:id",getAdmin)
router1.post("/",insertAdmin)
router1.put("/:id",updateAdmin)
router1.delete("/:id",deleteAdmin)

export default router1