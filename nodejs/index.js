import express from "express";
import cors from "cors";

import router1 from "./models/Admin.js";
import router2 from "./models/Company.js";
import router3 from "./models/User.js";
import router4 from "./models/About.js";
import router5 from "./models/Contact.js";
import router6 from "./models/Booking.js";
import router7 from "./models/Feedback.js";
import router8 from "./models/Highlight.js";
import router9 from "./models/Inquirie.js";
import router10 from "./models/Package.js";
import router11 from "./models/r_login.js";
import router12 from "./models/MainLoginRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/upload", express.static("Upload"));

app.use("/nodejs/admin", router1);
app.use("/nodejs/company", router2);
app.use("/nodejs/user", router3);
app.use("/nodejs/about", router4);
app.use("/nodejs/contact", router5);
app.use("/nodejs/booking", router6);
app.use("/nodejs/feedback", router7);
app.use("/nodejs/highlight", router8);
app.use("/nodejs/inquirie", router9);
app.use("/nodejs/package", router10);
app.use("/nodejs/login", router11);
app.use("/nodejs/mainlogin", router12);

app.listen(1100, () => {
  console.log("Server is running on 1100 port");
});
