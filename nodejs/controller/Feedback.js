import {db} from "../db.js";

export const getFeedbacks=(req,res)=>{
    const query="SELECT * FROM `feedbacks`";
    db.query(query,(err,data)=>{
        if(err){
            return res.json(err)
        }
        else{
            return res.json(data)
        }
    })
}

export const getFeedback=(req,res)=>{
    const query="SELECT * FROM `feedbacks` WHERE feedback_id=?";
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data[0])
    })
}

export const insertFeedback=(req,res)=>{
    const query="INSERT INTO `feedbacks`(`rating`, `comment`, `status`, `entry_date`, `update_date`, `entry_by`) VALUES(?)";
    const values=[
        req.body.rating,
        req.body.comment,
        req.body.status,
        req.body.entry_date,
        req.body.update_date,
        req.body.entry_by
    ];
    console.log(query);
  console.log(values);
  db.query(query,[values],(err,data)=>{
    if(err) return res.json(err)
    return res.json("New record has been inserted")
    })
}

export const updateFeedback=(req,res)=>{
    const query="UPDATE `feedbacks` SET `rating`=?,`comment`=?,`status`=?,`entry_date`=?,`update_date`=?,`entry_by`=? WHERE feedback_id=?";
    const values=[
        req.body.rating,
        req.body.comment,
        req.body.status,
        req.body.entry_date,
        req.body.update_date,
        req.body.entry_by
    ];
    db.query(query, [...values, req.params.id], (err, data) => {
        if(err) return res.json(err)
        return res.json("New record has been updated")
    })
}

export const deleteFeedback=(req,res)=>{
    const query="DELETE FROM feedbacks WHERE feedback_id=?";
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err);
     return res.json("Record has been deleted")
    })
}