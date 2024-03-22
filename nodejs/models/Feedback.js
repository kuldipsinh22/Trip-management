import express from "express";
import{
    deleteFeedback,
    getFeedback,
    getFeedbacks,
    insertFeedback,
    updateFeedback
} from '../controller/Feedback.js'

const router7=express.Router()

router7.get("/",getFeedbacks)
router7.get("/:id",getFeedback)
router7.post("/",insertFeedback)
router7.put("/:id",updateFeedback)
router7.delete("/:id",deleteFeedback)

export default router7