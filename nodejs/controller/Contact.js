import {db} from "../db.js";

export const getContacts=(req,res)=>{
    const query="SELECT * FROM `contact_us`";
    db.query(query,(err,data)=>{
        if(err){
            return res.json(err)
        }
        else{
            return res.json(data)
        }
    })
}

export const getContact=(req,res)=>{
    const query="SELECT * FROM `contact_us` WHERE 	contact_id=?";
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data[0])
    })
}

export const insertContact=(req,res)=>{
    const query="INSERT INTO `contact_us`(`email1`, `email2`, `phone_no1`, `phone_no2`, `status`, `entry_date`, `update_date`, `entry_by`) VALUES(?)";
    const values=[
        req.body.email1,
        req.body.email2,
        req.body.phone_no1,
        req.body.phone_no2,
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

export const updateContact=(req,res)=>{
    const query="UPDATE `contact_us` SET `email1`=?,`email2`=?,`phone_no1`=?,`phone_no2`=?,`status`=?,`entry_date`=?,`update_date`=?,`entry_by`=? WHERE contact_id=?";
    const values=[
        req.body.email1,
        req.body.email2,
        req.body.phone_no1,
        req.body.phone_no2,
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

export const deleteContact=(req,res)=>{
    const query="DELETE FROM `contact_us` WHERE contact_id=?";
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err);
     return res.json("Record has been deleted");
    })
}