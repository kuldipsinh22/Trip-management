import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Singletour() {
  const [from_place, setfrom_place] = useState("");
  const [to_place, setto_place] = useState("");
  const [from_date, setfrom_date] = useState("");
  const [to_date, setto_date] = useState("");
  const [total_days, settotal_days] = useState("");
  const [package_price, setpackage_price] = useState("");
  const [information, setinformation] = useState("");
  const [company_id, setcompany_id] = useState("");
  const [status, setstatus] = useState("");
  const [total_person, settotal_person] = useState("");
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
  };

  const submitbtn = async (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("total_person", total_person);

    const data = {
      total_person,
    };
    let res = "";

    res = await axios.post("http://localhost:1100/nodejs/bill", data);

    alert(res.data);
    navigate("/Billing/" + id);
  };
  return (
    <>
      {/* Home */}
      <div className="home">
        <div
          className="home_background parallax-window"
          data-parallax="scroll"
          data-image-src="images/single_background.jpg"
        />
        <div className="home_content">
          <div className="home_title">the offers</div>
        </div>
      </div>
      {/* Offers */}
      <div
        className="listing"
        style={{
          fontFamily:
            "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        }}
      >
        {/* Single Listing */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single_listing">
                {/* Hotel Info */}
                <div className="hotel_info">
                  {/* Title */}
                  <div className="hotel_title_container d-flex flex-lg-row flex-column">
                    <div className="hotel_title_content">
                      <h1
                        className=""
                        style={{
                          color: "black",
                          fontSize: 80,
                          fontFamily:
                            "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                        }}
                      >
                        {to_place} Tour
                      </h1>
                      <h3
                        style={{
                          fontFamily:
                            "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                          color: "#606060",
                        }}
                      >
                        Price - {package_price}/Person
                      </h3>
                    </div>
                  </div>
                  {/* Listing Image */}
                  <div className="hotel_image">
                    <img src={`http://localhost:1100/Upload/${img}`} alt="" />
                    <div className="hotel_review_container d-flex flex-column align-items-center justify-content-center">
                      <div className="hotel_review">
                        <div className="hotel_review_content">
                          <div className="hotel_review_title">very good</div>
                          <div className="hotel_review_subtitle">
                            100 reviews
                          </div>
                        </div>
                        <div className="hotel_review_rating text-center">
                          8.1
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "50px",
                      marginTop: 10,
                      color: "black",
                      fontFamily:
                        "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                    }}
                  >
                    About
                  </div>
                  <div
                    style={{ color: "black", paddingTop: 10, fontSize: "25px" }}
                  >
                    Tour starting date: {from_date} <br />
                    Tour ending date: {to_date}
                  </div>
                  {/* Hotel Info Text */}
                  <div className="hotel_info_text">
                    <h1
                      style={{
                        color: "black",
                        fontFamily:
                          "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                      }}
                    >
                      Information
                    </h1>
                    <p>{information}</p>
                  </div>
                  {/* For book trips */}
                  <div
                    className=""
                    style={{ paddingLeft: 350, paddingRight: 350 }}
                  >
                    <div
                      style={{
                        color: "black",
                        marginTop: 20,
                        fontWeight: "bold",
                        fontSize: "40px",
                        textAlign: "center",
                        fontFamily:
                          "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                      }}
                    >
                      Book trip your here
                    </div>
                    <div style={{ marginBottom: 15, fontSize: "20px" }}>
                      <div
                        style={{
                          marginBottom: 5,
                          color: "black",
                          marginTop: 10,
                        }}
                      >
                        Total members
                      </div>
                      <select
                        id="total"
                        style={{
                          width: "100%",
                          padding: 8,
                          borderRadius: 5,
                          border: "1px solid purple",
                          color: "#31124B",
                          id: "total",
                        }}
                        onChange={(e) => settotal_person(e.target.value)}
                      >
                        <option>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                      </select>

                      {/* <Link
                        to={"/Billing/" + id}
                        class="button-48"
                        role="button"
                        style={{ marginTop: 20 }}
                      > */}
                      <button
                        to={"/Billing/" + id}
                        class="button-48"
                        role="button"
                        style={{ marginTop: 20 }}
                        onClick={submitbtn}
                      >
                        <span
                          class="text"
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            fontFamily:
                              "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                          }}
                        >
                          Check out
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
