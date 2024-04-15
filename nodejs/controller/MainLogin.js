import { db } from "../db.js";

export const getUser = (req, res) => {
  const user_contact = req.query.user_contact;
  const user_password = req.query.user_password;

  const query =
    "SELECT user_id FROM `user` WHERE user_contact='" +
    user_contact +
    "' AND user_password='" +
    user_password +
    "'";

  console.log(query);
  try {
    db.query(query, (err, data) => {
      console.log(data.length);

      if (err) return res.json(err);
      else {
        if (data.length == 0) return res.json(0);
        else return res.json(data[0].user_id);
      }
    });
  } catch (error) {
    return res.json(0);
  }
};
