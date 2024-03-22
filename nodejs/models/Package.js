import express from "express";
import{
    deletePackage,
    getPackage,
    getPackages,
    insertPackage,
    updatePackage
} from '../controller/Package.js'
import multer from "multer";

const router10=express.Router()

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./Upload")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const Upload=multer({
    storage:storage
})

router10.get("/",getPackages)
router10.get("/:id",Upload.single("img"),getPackage)
router10.post("/",Upload.single("img"),insertPackage)
router10.put("/:id",updatePackage)
router10.delete("/:id",deletePackage)

export default router10