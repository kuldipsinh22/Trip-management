import { db } from "../db.js";

export const getBookings = (req, res) => {
  const query =
    "SELECT a.*, b.*, c.* from manage_bookings a, user b, tour_packages c where a.user_id = b.user_id and a.package_id = c.package_id and user_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
