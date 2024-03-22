import {db} from "../db.js";

export const getUsers=(req,res)=>{
    const query="SELECT * FROM `user`";
    db.query(query,(err,data)=>{
        if(err){
            return res.json(err)
        }
        else{
            return res.json(data)
        }
    })
}

export const getUser=(req,res)=>{
    const query="SELECT * FROM `user` WHERE user_id=?";
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data[0])
    })
}

export const insertUser=(req,res)=>{
    const query= "INSERT INTO `user`(`user_name`, `user_email`, `user_contact`, `user_dob`, `user_country`, `user_password`, `status`, `entry_date`, `update_date`, `entry_by`) VALUES(?)";
    const values=[
        req.body.user_name,
        req.body.user_email,
        req.body.user_contact,
        req.body.user_dob,
        req.body.user_country,
        req.body.user_password,        
        req.body.status,
        req.body.entry_date,
        req.body.update_date,
        req.body.entry_by,
    ];
    console.log(query);
  console.log(values);
  db.query(query,[values],(err,data)=>{
    if(err) return res.json(err)
    return res.json("New record has been inserted")
    })
}

export const updatetUser=(req,res)=>{
    const query="UPDATE `user` SET `user_name`=?,`user_email`=?,`user_contact`=?,`user_dob`=?,`user_country`=?,`user_password`=?,`status`=?,`entry_date`=?,`update_date`=?,`entry_by`=? WHERE user_id=?";
    const values=[
        req.body.user_name,
        req.body.user_email,
        req.body.user_contact,
        req.body.user_dob,
        req.body.user_country,
        req.body.user_password,
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

export const deleteUser=(req,res)=>{
    const query="DELETE FROM `user` WHERE user_id=?";
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err);
     return res.json("Record has been deleted");
    })
}