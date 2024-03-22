import express from "express";
import{
    deleteContact,
    getContact,
    getContacts,
    insertContact,
    updateContact
}from '../controller/Contact.js'

const router5=express.Router()

router5.get("/",getContacts)
router5.get("/:id",getContact)
router5.post("/",insertContact)
router5.put("/:id",updateContact)
router5.delete("/:id",deleteContact)

export default router5