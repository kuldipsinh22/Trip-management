import express from "express";
import{
    deleteHighlight,
    getHighlight,
    getHighlights,
    insertHighlight,
    updateHighlight
} from '../controller/Highlight.js'
import multer from "multer";

const router8=express.Router()
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

router8.get("/",getHighlights)
router8.get("/:id",Upload.single("img"),getHighlight)
router8.post("/",Upload.single("img"),insertHighlight)
router8.put("/:id",updateHighlight)
router8.delete("/:id",deleteHighlight)

export default router8
