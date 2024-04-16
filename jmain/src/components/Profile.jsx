import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function Profile() {
  const [user_name, setuser_name] = useState("");
  const [user_email, setuser_email] = useState("");
  const [user_contact, setuser_contact] = useState("");
  const [user_dob, setuser_dob] = useState("");
  const [user_country, setuser_country] = useState("");
  const [user_password, setuser_password] = useState("");
  const [status, setstatus] = useState("");
  const [img, setimg] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [auth, setAuth] = useState(sessionStorage.getItem("user"));

  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(id);
    if (id) {
      getUser();
    }
  }, []);

  const getUser = async () => {
    const url = "http://localhost:1100/nodejs/user/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setuser_name(res.data.user_name);
    setuser_email(res.data.user_email);
    setuser_contact(res.data.user_contact);
    setuser_dob(res.data.user_dob);
    setuser_country(res.data.user_country);
    setuser_password(res.data.user_password);
    setstatus(res.data.status);
    setimg(res.data.img);
  };

  const validate = () => {
    const errors = {};
    if (!user_name) {
      errors.user_name = "user_name is required";
    }
    if (!user_email) {
      errors.user_email = "user_email is required";
    }
    if (!user_contact) {
      errors.user_contact = "user_contact is required";
    }
    if (!user_dob) {
      errors.user_dob = "user_dob is required";
    }
    if (!user_country) {
      errors.user_country = "user_country is required";
    }
    if (!user_password) {
      errors.user_password = "user_password is required";
    }
    if (!status) {
      errors.status = "status is required";
    }
    return errors;
  };

  const submitbtn = async (e) => {
    e.preventDefault();
    setFormErrors(validate());

    if (
      user_name &&
      user_email &&
      user_contact &&
      user_dob &&
      user_country &&
      user_password &&
      status
    ) {
      const formdata = new FormData();

      formdata.append("user_name", user_name);
      formdata.append("user_email", user_email);
      formdata.append("user_contact", user_contact);
      formdata.append("user_dob", user_dob);
      formdata.append("user_country", user_country);
      formdata.append("user_password", user_password);
      formdata.append("status", status);
      formdata.append("img", img);

      let res = "";

      res = await axios.put(
        "http://localhost:1100/nodejs/user/" + id,
        formdata
      );

      alert(res.data);
      navigate("/Home");
    }
  };
  const [booking, setbooking] = useState([]);
  let i = 1;
  useEffect(() => {
    getBooking();
  }, []);

  const getBooking = async () => {
    const res = await axios.get(
      "http://localhost:1100/nodejs/personalbooks" + auth
    );
    setbooking(res.data);
    console.log(res.data);
  };
  return (
    <div>
      <div className="home">
        <div
          className="home_background parallax-window"
          data-parallax="scroll"
          data-image-src="images/about_background.jpg"
        />
        <div className="home_content">
          <div className="home_title">Profile</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "black",
        }}
      >
        {/* Part 1: User Information */}
        <div
          style={{
            display: "flex",
            alignItems: "center",

            marginTop: "20px",
          }}
        >
          <img
            src={`http://localhost:1100/upload/${img}`}
            alt="User Image"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "80px",
            }}
          />
          <div
            style={{
              marginLeft: "20px",
              fontFamily:
                "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            }}
          >
            <h2
              style={{
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              }}
            >
              {user_name}
            </h2>
            <p>Email: {user_email}</p>
            <p>Contact: {user_contact}</p>
          </div>
        </div>
        <hr style={{ width: "80%", margin: "20px 0" }} />
        <div style={{ color: "black", display: "flex" }}>
          {/* Part 2: update profile */}
          <div style={{ marginRight: "200px" }}>
            <div>
              <h2
                style={{
                  fontFamily:
                    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                }}
              >
                Update Profile
              </h2>
              <form>
                <div
                  style={{
                    marginBottom: 5,
                    color: "black",
                    marginTop: 10,
                  }}
                >
                  Your Name
                </div>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 5,
                    border: "1px solid purple",
                    color: "#31124B",
                  }}
                  defaultValue={user_name}
                  onChange={(e) => setuser_name(e.target.value)}
                />

                <div
                  style={{
                    marginBottom: 5,
                    color: "black",
                    marginTop: 10,
                  }}
                >
                  Email
                </div>
                <input
                  type="email"
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 5,
                    border: "1px solid purple",
                    color: "#31124B",
                  }}
                  defaultValue={user_email}
                  onChange={(e) => setuser_email(e.target.value)}
                />

                <div
                  style={{
                    marginBottom: 5,
                    color: "black",
                    marginTop: 10,
                  }}
                >
                  Contact
                </div>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 5,
                    border: "1px solid purple",
                    color: "#31124B",
                  }}
                  defaultValue={user_contact}
                  onChange={(e) => setuser_contact(e.target.value)}
                />

                <div
                  style={{
                    marginBottom: 5,
                    color: "black",
                    marginTop: 10,
                  }}
                >
                  DOB
                </div>
                <input
                  type="date"
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 5,
                    border: "1px solid purple",
                    color: "#31124B",
                  }}
                  defaultValue={user_dob}
                  onChange={(e) => setuser_dob(e.target.value)}
                />

                <div
                  style={{
                    marginBottom: 5,
                    color: "black",
                    marginTop: 10,
                  }}
                >
                  Your country
                </div>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 5,
                    border: "1px solid purple",
                    color: "#31124B",
                  }}
                  defaultValue={user_country}
                  onChange={(e) => setuser_country(e.target.value)}
                />

                <div
                  style={{
                    marginBottom: 5,
                    color: "black",
                    marginTop: 10,
                  }}
                >
                  password
                </div>
                <input
                  type="password"
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 5,
                    border: "1px solid purple",
                    color: "#31124B",
                  }}
                  defaultValue={user_password}
                  onChange={(e) => setuser_password(e.target.value)}
                />

                <div
                  style={{
                    marginBottom: 5,
                    color: "black",
                    marginTop: 10,
                  }}
                >
                  Profile image
                </div>
                <input
                  type="file"
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 5,
                    border: "1px solid purple",
                    color: "#31124B",
                  }}
                  onChange={(e) => setimg(e.target.files[0])}
                />
              </form>
              <button
                class="button-48"
                role="button"
                style={{ marginTop: 20, marginLeft: 50, marginBottom: 20 }}
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
                  Update...
                </span>
              </button>
            </div>
          </div>
          {/* Part 3: my tours */}
          <div>
            <h2
              style={{
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
              }}
            >
              My Tours
            </h2>
            {booking.map((booking) => {
              <div className="col-lg-4">
                <h4>Booked Tour:</h4>
                <p>Tour Name: Tour A</p>
                <p>Date: January 1, 2022</p>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
