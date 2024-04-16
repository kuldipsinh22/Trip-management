import { db } from "../db.js";

export const getPackages = (req, res) => {
  const query =
    "SELECT a.*, b.* FROM tour_packages a, company b WHERE a.company_id = b.company_id";
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getPackage = (req, res) => {
  const query =
    "SELECT a.*, b.* FROM tour_packages a, company b WHERE package_id=? and a.company_id = b.company_id";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const insertPackage = (req, res) => {
  const query =
    "INSERT INTO `tour_packages`(`from_place`, `to_place`, `from_date`, `to_date`, `total_days`, `package_price`, `information`, `company_id`, `status`,`img`) VALUES(?)";
  const values = [
    req.body.from_place,
    req.body.to_place,
    req.body.from_date,
    req.body.to_date,
    req.body.total_days,
    req.body.package_price,
    req.body.information,
    req.body.company_id,
    req.body.status,
    // req.body.role,

    req.file?.filename,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New record has been inserted");
  });
};

export const updatePackage = (req, res) => {
  const query =
    "UPDATE `tour_packages` SET `from_place`=?,`to_place`=?,`from_date`=?,`to_date`=?,`total_days`=?,`package_price`=?,`information`=?,`company_id`=?, `status`=?,`img`=? WHERE package_id=?";
  const values = [
    req.body.from_place,
    req.body.to_place,
    req.body.from_date,
    req.body.to_date,
    req.body.total_days,
    req.body.package_price,
    req.body.information,
    req.body.company_id,
    req.body.status,
    // req.body.role,

    req.file?.filename || req.body.img,
  ];
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("New record has been updated");
  });
};

export const deletePackage = (req, res) => {
  const query = "DELETE FROM `tour_packages` WHERE package_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Record has been deleted");
  });
};
