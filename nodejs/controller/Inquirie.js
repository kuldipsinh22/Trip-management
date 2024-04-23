import { db } from "../db.js";

export const getInquiries = (req, res) => {
  const query = "SELECT * FROM `inquiries`";
  db.query(query, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getInquirie = (req, res) => {
  const query = "SELECT * FROM `inquiries` WHERE inquiries_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const insertInquirie = (req, res) => {
  const query =
    "INSERT INTO `inquiries`(`question`, `user_id`, `subject`) VALUES(?)";
  const values = [req.body.question, req.body.user_id, req.body.subject];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Your message has been sent");
  });
};

export const deleteInquirie = (req, res) => {
  const query = "DELETE FROM `inquiries` WHERE inquiries_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Record has been deleted");
  });
};
