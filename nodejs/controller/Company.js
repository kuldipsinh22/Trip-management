import {db} from "../db.js";

export const getCompanys=(req,res)=>{
    const query="SELECT * FROM `company`";
    db.query(query,(err,data)=>{
        if(err){
            return res.json(err)
        }
        else{
            return res.json(data)
        }
    })
}

export const getCompany=(req,res)=>{
    const query="SELECT * FROM `company` WHERE company_id=?";
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data[0])
    })
}

export const insertCompany=(req,res)=>{
    const query="INSERT INTO `company`(`company_name`, `owner_name`, `role`, `company_email1`, `company_email2`, `contact1`, `contact2`,`password`, `image`, `status`, `entry_date`, `update_date`, `entry_by`) VALUES(?)";
    const values=[
        req.body.company_name,
        req.body.owner_name,
        req.body.role,
        req.body.company_email1,
        req.body.company_email2,
        req.body.contact1,
        req.body.contact2,
        req.body.password,
        req.body.image,
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

export const deleteCompany=(req,res)=>{
    const query="DELETE FROM `company` WHERE company_id=?";
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err);
     return res.json("Record has been deleted");
    })
}


export const updateCompany=(req,res)=>{
    const query="UPDATE `company` SET `company_name`=?,`owner_name`=?,`role`=?,`company_email1`=?,`company_email2`=?,`contact1`=?,`contact2`=?, `password` =?, `image`=?,`status`=?,`entry_date`=?,`update_date`=?,`entry_by`=? WHERE company_id=?";
    const values=[
        req.body.company_name,
        req.body.owner_name,
        req.body.role,
        req.body.company_email1,
        req.body.company_email2,
        req.body.contact1,
        req.body.contact2,
        req.bdy.password,
        req.body.image,
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