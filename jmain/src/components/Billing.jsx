import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Billing() {
  const [from_place, setfrom_place] = useState("");
  const [to_place, setto_place] = useState("");
  const [from_date, setfrom_date] = useState("");
  const [to_date, setto_date] = useState("");
  const [total_days, settotal_days] = useState("");
  const [package_price, setpackage_price] = useState("");
  const [information, setinformation] = useState("");
  const [company_id, setcompany_id] = useState("");
  const [status, setstatus] = useState("");
  const [company_name, setcompany_name] = useState("");
  const [owner_name, setowner_name] = useState("");
  const [company_email1, setcompany_email1] = useState("");
  const [company_email2, setcompany_email2] = useState("");
  const [contact1, setcontact1] = useState("");
  const [contact2, setcontact2] = useState("");

  const [img, setimg] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(id);
    if (id) {
      getPackage();
    }
  }, []);

  const getPackage = async () => {
    const url = "http://localhost:1100/nodejs/package/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setfrom_place(res.data.from_place);
    setto_place(res.data.to_place);
    setfrom_date(res.data.from_date);
    setto_date(res.data.to_date);
    settotal_days(res.data.total_days);
    setpackage_price(res.data.package_price);
    setinformation(res.data.information);
    setcompany_id(res.data.company_id);
    setstatus(res.data.status);
    setimg(res.data.img);
    setcompany_name(res.data.company_name);
    setowner_name(res.data.owner_name);
    setcompany_email1(res.data.company_email1);
    setcompany_email2(res.data.company_email2);
    setcontact1(res.data.contact1);
    setcontact2(res.data.contact2);
  };

  return (
    <>
      <div className="home">
        <div
          className="home_background parallax-window"
          data-parallax="scroll"
          data-image-src="images/single_background.jpg"
        />
        <div className="home_content">
          <div className="home_title">Billing</div>
        </div>
      </div>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          margin: "20px",
          color: "#333",
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#333" }}>Billing Page</h1>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "45%", marginRight: "20px" }}>
            <h2>Company Information</h2>
            <p>
              <strong>Company Name:</strong> {company_name}
              <br />
              <strong>Company Contact:</strong> {contact1}
              <br />
              <strong>Company Contact:</strong> {contact2}
              <br />
              <strong>Email:</strong> {company_email1}
              <br />
              <strong>Email:</strong> {company_email2}
            </p>
          </div>

          <div style={{ width: "45%" }}>
            <h2>Tour Information</h2>
            <p>
              <strong>Tour Name:</strong> {to_place} Trip
              <br />
              <strong>Start Date:</strong> {from_date}
              <br />
              <strong>End Date:</strong> {to_date}
              <br />
              <strong>Place:</strong> {to_place}
              <br />
              <strong>Days:</strong> {total_days}
              <br />
              <strong>Nights:</strong> {total_days - 1}
            </p>
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <h2>Additional Details</h2>
          <p>
            <strong>Number of Participants:</strong> 10
            <br />
            <strong>Accommodation:</strong> 4-star Hotel
            <br />
            <strong>Meals:</strong> Included
            <br />
            <strong>Additional Services:</strong> None
          </p>
        </div>

        <div style={{ marginTop: "40px" }}>
          <h2>Total Amount</h2>
          <p>
            <strong>Subtotal:</strong> $1000
            <br />
            <strong>Tax:</strong> $200
            <br />
            <strong>Total:</strong> $1200
          </p>
        </div>
      </div>
    </>
  );
}
