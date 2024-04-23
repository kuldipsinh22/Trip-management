import { db } from "../db.js";

export const getPackage = (req, res) => {
  const query = "SELECT * FROM tour_packages WHERE company_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
