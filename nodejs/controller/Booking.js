import { db } from "../db.js";

export const getBookings = (req, res) => {
  // const query="SELECT a.*,b.user_name FROM manage_bookings a, user b WHERE a.user_id=b.user_id";
  const query = `SELECT * from manage_bookings`;
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getBooking = (req, res) => {
  const query = "SELECT * FROM manage_bookings WHERE booking_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const insertBooking = (req, res) => {
  const query =
    "INSERT INTO `manage_bookings`(`user_id`, `package_id`, `company_id`, `total_person`, `price`, `adv_payment`, `status`, `entary_date`, `update_date`, `entry_by`) VALUES(?)";
  const values = [
    req.body.user_id,
    req.body.company_id,
    req.body.package_id,
    req.body.total_person,
    req.body.price,
    req.body.adv_payment,
    req.body.status,
    req.body.entry_date,
    req.body.update_date,
    req.body.entry_by,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New record has been inserted");
  });
};

export const updateBooking = (req, res) => {
  const query =
    "UPDATE `manage_bookings` SET `user_id`=?,`package_id`=?,`company_id`=?,`total_person`=?,`price`=?,`adv_payment`=?,`status`=?,`entary_date`=?,`update_date`=?,`entry_by`=? WHERE booking_id=?";
  const values = [
    req.body.user_id,
    req.body.package_id,
    req.body.company_id,
    req.body.total_person,
    req.body.price,
    req.body.adv_payment,
    req.body.status,
    req.body.entry_date,
    req.body.update_date,
    req.body.entry_by,
  ];
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("New record has been updated");
  });
};

export const deleteBooking = (req, res) => {
  const query = "DELETE FROM `manage_bookings` WHERE booking_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Record has been deleted");
  });
};
