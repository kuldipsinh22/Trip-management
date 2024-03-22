import express from "express";
import{
    deleteCompany,
    getCompany,
    getCompanys,
    insertCompany,
    updateCompany
} from '../controller/Company.js'

const router2=express.Router()

router2.get("/",getCompanys)
router2.get("/:id",getCompany)
router2.post("/",insertCompany)
router2.put("/:id",updateCompany)
router2.delete("/:id",deleteCompany)

export default router2