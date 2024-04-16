import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_user() {
  const [user_name, setuser_name] = useState("");
  const [user_email, setuser_email] = useState("");
  const [user_contact, setuser_contact] = useState("");
  const [user_dob, setuser_dob] = useState("");
  const [user_country, setuser_country] = useState("");
  const [user_password, setuser_password] = useState("");
  const [status, setstatus] = useState("");
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
      if (id) {
        res = await axios.put(
          "http://localhost:1100/nodejs/user/" + id,
          formdata
        );
      } else {
        res = await axios.post("http://localhost:1100/nodejs/user", formdata);
      }
      alert(res.data);
      navigate("/User");
    }
  };
  return (
    <main id="main" class="main">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">User</h1>
          <form class="row g-3">
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="User name"
                  defaultValue={user_name}
                  onChange={(e) => setuser_name(e.target.value)}
                />
                <label for="floatingName">Name</label>
                <p style={{ color: "red" }}>{formErrors.user_name}</p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="textarea"
                  class="form-control"
                  placeholder="User Email"
                  defaultValue={user_email}
                  onChange={(e) => setuser_email(e.target.value)}
                />
                <label for="floatingPassword">User Email</label>
                <p style={{ color: "red" }}>{formErrors.user_email}</p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="file"
                  class="form-control"
                  onChange={(e) => setimg(e.target.files[0])}
                />
                <label for="floatingPassword">Profile Image</label>
              </div>
            </div>

            <div class="col-md-6">
              <div class="col-md-12">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Contact"
                    defaultValue={user_contact}
                    onChange={(e) => setuser_contact(e.target.value)}
                  />
                  <label for="floatingCity">Contact</label>
                  <p style={{ color: "red" }}>{formErrors.user_contact}</p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="date"
                  class="form-control"
                  placeholder="DOB"
                  defaultValue={user_dob}
                  onChange={(e) => setuser_dob(e.target.value)}
                />
                <label for="floatingZip">DOB</label>
                <p style={{ color: "red" }}>{formErrors.user_dob}</p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Country"
                  defaultValue={user_country}
                  onChange={(e) => setuser_country(e.target.value)}
                />
                <label for="floatingZip">Country</label>
                <p style={{ color: "red" }}>{formErrors.user_country}</p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="Password"
                  class="form-control"
                  placeholder="Password"
                  defaultValue={user_password}
                  onChange={(e) => setuser_password(e.target.value)}
                />
                <label for="floatingZip">Password</label>
                <p style={{ color: "red" }}>{formErrors.user_password}</p>
              </div>
            </div>
            <div class="col-6">
              <select
                name="status"
                id="status"
                class="form-control"
                onChange={(e) => setstatus(e.target.value)}
              >
                <option value="0">1.active</option>
                <option value="0">2.inactive</option>
              </select>
            </div>

            <div class="text-center">
              <button type="submit" class="btn btn-primary" onClick={submitbtn}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
