import { db } from "../db.js";

export const insertBill = (req, res) => {
  const query =
    "INSERT INTO `manage_bookings`(`total_person`, `entry_date`) VALUES(?)";
  const date = new Date();
  const values = [req.body.total_person, date];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Now you are redirect to Billing page");
  });
};

export const updateBill = (req, res) => {
  const query =
    "UPDATE `manage_bookings` SET `user_id`=?,`package_id`=?,`company_id`=?,`total_person`=?,`price`=?,`adv_payment`=?,`update_date`=? WHERE booking_id=?";
  const values = [
    req.body.user_id,
    req.body.package_id,
    req.body.company_id,
    req.body.price,
    req.body.adv_payment,
    new Date(),
  ];
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("New record has been updated");
  });
};
