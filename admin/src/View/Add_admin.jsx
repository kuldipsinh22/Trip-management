import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_admin() {
  const [admin_name, setadmin_name] = useState("");
  const [role, setrole] = useState("");
  const [admin_email, setadmin_email] = useState("");
  const [admin_contact, setadmin_contact] = useState("");
  const [status, setstatus] = useState("");
  const [entry_date, setentry_date] = useState("");
  const [update_date, setupdate_date] = useState("");
  const [entry_by, setentry_by] = useState("");
  const [password, setpassword]= useState("");
  const[formErrors,setFormErrors]=useState({})

  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(id);
    if (id) {
      getAdmin();
    }
  }, []);

  const getAdmin = async () => {
    const url = "http://localhost:1100/nodejs/admin/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setadmin_name(res.data.admin_name);
    setrole(res.data.role);
    setadmin_email(res.data.admin_email);
    setadmin_contact(res.data.admin_contact);
    setstatus(res.data.status)
    setentry_date(res.data.entry_date);
    setupdate_date(res.data.update_date);
    setentry_by(res.data.entry_by);
    setpassword(res.data.password);
  };

  const validate = () => {
    const errors = {};
    if (!admin_name) {
      errors.admin_name = "admin_name is required";
    }
    if (!role) {
      errors.role = "role is required";
    }
    if (!admin_email) {
      errors.admin_email = "admin_email is required";
    }
    if (!admin_contact) {
      errors.admin_contact = "admin_contact is required";
    }
    if (!status) {
      errors.status = "status is required";
    }
    if (!password) {
      errors.password = "password is required";
    }
    return errors;
  };

  const submitbtn = async (e) => {
    e.preventDefault();
    setFormErrors(validate())

    if(admin_name && role && admin_email && admin_contact && status){

      const formdata = new FormData();

      formdata.append("admin_name",admin_name);
      formdata.append("role",role);
      formdata.append("admin_email",admin_email);
      formdata.append("admin_contact",admin_contact);
      formdata.append("status",status);
    }

    const data = {
      admin_name,
      role,
      admin_email,
      admin_contact,
      status,
      entry_date,
      update_date,
      entry_by,
      password
    };
    let res = "";
    if (id) {
      res = await axios.put(
        "http://localhost:1100/nodejs/admin/" + id,
        data
      );
    } else {
      res = await axios.post("http://localhost:1100/nodejs/admin", data);
    }
    alert(res.data);
    navigate("/Admin");
  };
  return (
    <main id="main" class="main">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">Add admin</h1>
          <form class="row g-3">
            <div class="col-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Admin name"
                  defaultValue={admin_name}
                  onChange={(e) => setadmin_name(e.target.value)}
                />
                <label for="floatingName">Admin name</label>
                <p style={{color: "red"}}>{formErrors.admin_name}</p>

              </div>
            </div>

            <div class="col-6">
          <select name="role" id="role" class="form-control" onChange={(e) => setrole(e.target.value)} >
              <option value="1">1.admin</option>
              <option value="2">2.company</option>          
          </select>
        </div>
            <div class="col-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Admin Email"
                  defaultValue={admin_email}
                  onChange={(e) => setadmin_email(e.target.value)}
                />
                <label for="floatingPassword">Admin email</label>
                <p style={{color: "red"}}>{formErrors.admin_email}</p>

              </div>
            </div>

            <div class="col-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Admin Contact"
                  defaultValue={admin_contact}
                  onChange={(e) => setadmin_contact(e.target.value)}
                />
                <label for="floatingPassword">Admin Contact</label>
                <p style={{color: "red"}}>{formErrors.admin_contact}</p>
              </div>
            </div>

            <div class="col-6">
          <select name="cars" id="cars" class="form-control" onChange={(e)=>setstatus(e.target.value)} >
              <option value="0">1.active</option>
              <option value="0">2.inactive</option>          
          </select>
        </div>                 

            <div class="col-6">
              <div class="form-floating">
                <input
                  type="date"
                  class="form-control"
                  placeholder="Entry Date"
                  defaultValue={entry_date}
                  onChange={(e) => setentry_date(e.target.value)}
                />
                <label for="floatingZip">Entry Date</label>
              </div>
            </div>

            <div class="col-6">
              <div class="form-floating">
                <input
                  type="date"
                  class="form-control"
                  placeholder="Update date"
                  defaultValue={update_date}
                  onChange={(e) => setupdate_date(e.target.value)}
                />
                <label for="floatingZip">Update date</label>
              </div>
            </div>

            <div class="col-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Entry by"
                  defaultValue={entry_by}
                  onChange={(e) => setentry_by(e.target.value)}
                />
                <label for="floatingZip">Entry by</label>
              </div>
            </div>
            <div class="col-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Entry by"
                  defaultValue={entry_by}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <label for="floatingZip">Password</label>
              </div>
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
