import {db} from "../db.js";

export const getAdmins=(req,res)=>{
    const query="SELECT * FROM `admin`";
    db.query(query,(err,data)=>{
        if(err){
            return res.json(err)
        }
        else{
            return res.json(data)
        }
    })
}

export const getAdmin=(req,res)=>{
    const query="SELECT * FROM `admin` WHERE admin_id=?";
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err);
     return res.json(data[0]);
    })
}


export const insertAdmin=(req,res)=>{
    const query="INSERT INTO admin( `admin_name`, `role`, `admin_email`, `contact1`, `status`, `entry_date`, `update_date`, `entry_by`,`image`,`password`) VALUES(?)";
    const values=[
        req.body.admin_name,
        req.body.role,
        req.body.admin_email,
        req.body.contact1,
        req.body.status,
        req.body.entry_date,
        req.body.update_date,
        req.body.entry_by,
        req.body.image,
        req.body.password
    ];
    console.log(query);
  console.log(values);
    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err);
     return res.json("New admin has been added");
    })
}

export const deleteAdmin=(req,res)=>{
    const query="DELETE FROM `admin` WHERE admin_id=?";
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err);
     return res.json("Record has been deleted");
    })
}



export const updateAdmin=(req,res)=>{
    const query="UPDATE admin SET `admin_name`=?,`role`=?,`admin_email`=?,`contact1`=?,`status`=?,`entry_date`=?,`update_date`=?,`entry_by`=?,`image`=?, `password`=?  WHERE admin_id=?";
    const values=[
        req.body.admin_name,
        req.body.role,
        req.body.admin_email,
        req.body.contact1,    
        req.body.status,
        req.body.entry_date,
        req.body.update_date,
        req.body.entry_by,
        req.body.image,
        req.body.password
    ];
  db.query(query, [...values, req.params.id], (err, data) => {
        if(err) return res.json(err);
     return res.json("Record has been updated");
    })
}