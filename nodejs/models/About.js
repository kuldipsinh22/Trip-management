import express from 'express';
import{
    deleteAbout,
    getAbout,
    getAbouts,
    insertAbout,
    updateAbout
} from '../controller/About.js'

const router4=express.Router()

router4.get("/",getAbouts)
router4.get("/:id",getAbout)
router4.post("/",insertAbout)
router4.put("/:id",updateAbout)
router4.delete("/:id",deleteAbout)

export default router4