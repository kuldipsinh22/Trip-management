import { db } from "../db.js";

export const insertUser = (req, res) => {
  const query =
    "INSERT INTO `user`(`user_name`, `user_email`, `user_contact`, `user_password`,`entry_date`) VALUES(?)";
  const date = new Date();
  const values = [
    req.body.user_name,
    req.body.user_email,
    req.body.user_contact,
    req.body.user_password,
    date,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("You are successfully registered");
  });
};
