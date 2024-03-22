import {db} from "../db.js";

export const getHighlights=(req,res)=>{
    const query="SELECT * FROM `highlights`";
    db.query(query,(err,data)=>{
        if(err){
            return res.json(err)
        }
        else{
            return res.json(data)
        }
    })
}

export const getHighlight=(req,res)=>{
    const query="SELECT * FROM `highlights` WHERE highlight_id=?";
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data[0])
    })
}

export const insertHighlight=(req,res)=>{
    const query="INSERT INTO `highlights`(`place_name`, `description`, `status`, `entry_date`, `update_date`, `entry_by`,`img`) VALUES(?)";
    const values=[
        req.body.place_name,
        req.body.description,
        req.body.status,
        req.body.entry_date,
        req.body.update_date,
        req.body.entry_by,
        req.file?.filename
    ];
    console.log(query);
  console.log(values);
  db.query(query,[values],(err,data)=>{
    if(err) return res.json(err)
    return res.json("New record has been inserted")
    })
}

export const updateHighlight=(req,res)=>{
    const query="UPDATE `highlights` SET `place_name`=?,`description`=?,`status`=?,`entry_date`=?,`update_date`=?,`entry_by`=?,`img`=? WHERE highlight_id=?";
    const values=[
        req.body.place_name,
        req.body.description,
        req.body.status,
        req.body.entry_date,
        req.body.update_date,
        req.body.entry_by,
        req.file?.filename || req.body.img
    ];
    db.query(query, [...values, req.params.id], (err, data) => {
        if(err) return res.json(err)
        return res.json("New record has been updated")
    })
}

export const deleteHighlight=(req,res)=>{
    const query="DELETE FROM `highlights` WHERE highlight_id=?"
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err);
     return res.json("Record has been deleted")
    })
}