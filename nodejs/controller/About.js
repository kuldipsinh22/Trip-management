import {db} from "../db.js";

export const getAbouts=(req,res)=>{
    const query="SELECT * FROM `about_us`";
    db.query(query,(err,data)=>{
        if(err){
            return res.json(err)
        }
        else{
            return res.json(data)
        }
    })
}

export const getAbout=(req,res)=>{
    const query="SELECT * FROM `about_us` WHERE about_id=?";
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data[0])
    })
}

export const insertAbout=(req,res)=>{
    const query="INSERT INTO `about_us`(`description`, `status`, `entry_date`, `update_date`, `entry_by`) VALUES(?)";
    const values=[
        req.body.description,
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

export const updateAbout=(req,res)=>{
    const query="UPDATE `about_us` SET `description`=?,`status`=?,`entry_date`=?,`update_date`=?,`entry_by`=? WHERE about_id=?";
    const values=[
        req.body.description,
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

export const deleteAbout=(req,res)=>{
    const query="DELETE FROM `about_us` WHERE about_id=?"
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err);
     return res.json("Record has been deleted");
    })
}