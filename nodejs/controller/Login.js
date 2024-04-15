import { db } from "../db.js";

export const getAdmin = (req, res) => {
  const contact1 = req.query.contact1;
  const password = req.query.password;
  const role_id = req.query.role_id;
  console.log("role_id", role_id);

  if (role_id == 1) {
    const query =
      "SELECT admin_id FROM `admin` WHERE contact1='" +
      contact1 +
      "' AND password='" +
      password +
      "'";

    console.log(query);
    try {
      db.query(query, (err, data) => {
        console.log(data.length);

        if (err) return res.json(err);
        else {
          if (data.length == 0) return res.json(0);
          else return res.json(data[0].admin_id);
        }

        //   if(err) return res.json(err)
        //   return res.json(data[0].admin_id)
      });
    } catch (error) {
      return res.json(0);
    }
  } else {
    const query =
      "SELECT company_id FROM `company` WHERE contact1='" +
      contact1 +
      "' AND password='" +
      password +
      "'";

    console.log(query);
    try {
      db.query(query, (err, data) => {
        console.log(data.length);

        if (err) return res.json(err);
        else {
          if (data.length == 0) return res.json(0);
          else return res.json(data[0].company_id);
        }

        //   if(err) return res.json(err)
        //   return res.json(data[0].admin_id)
      });
    } catch (error) {
      return res.json(0);
    }
  }
};
