import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_company() {
  const [company_name, setcompany_name] = useState("");
  const [owner_name, setowner_name] = useState("");
  const [role, setrole] = useState("");
  const [company_email1, setcompany_email1] = useState("");
  const [company_email2, setcompany_email2] = useState("");
  const [company_contact1, setcompany_contact1] = useState("");
  const [company_contact2, setcompany_contact2] = useState("");
  const [password, setpassword]= useState("");
  const [status, setstatus] = useState("");
  const [entry_date, setentry_date] = useState("");
  const [update_date, setupdate_date] = useState("");
  const [entry_by, setentry_by] = useState("");
  const[formErrors,setFormErrors]=useState({})
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(id);
    if (id) {
      getCompany();
    }
  }, []);

  const getCompany = async () => {
    const url = "http://localhost:1100/nodejs/company/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setcompany_name(res.data.company_name);
    setowner_name(res.data.owner_name);
    setrole(res.data.role);
    setcompany_email1(res.data.company_email1);
    setcompany_email2(res.data.company_email2);
    setcompany_contact1(res.data.company_contact1);
    setcompany_contact2(res.data.company_contact2);
    setpassword(res.data.password);
    setstatus(res.data.status)
    setentry_date(res.data.entry_date);
    setupdate_date(res.data.update_date);
    setentry_by(res.data.entry_by);
  };

  const validate = () => {
    const errors = {};
    if (!company_name) {
      errors.company_name = "company_name is required";
    }
    if (!owner_name) {
      errors.owner_name = " owner_name is required";
    }
    if (!role) {
      errors.role = "role is required";
    }
    if (!company_email1) {
      errors.company_email1 = "company_email1 is required";
    }
    if (!company_email2) {
      errors.company_email2 = "company_email2 is required";
    }
    if (!company_contact1) {
      errors.company_contact1 = "company_contact1 is required";
    }
    if (!company_contact2) {
      errors.company_contact2 = "company_contact2 is required";
    }
    if(!password) {
      errors.password = "password is required";
    }
    if (!status) {
      errors.status = "status is required";
    }
    return errors;
  };


  const submitbtn = async (e) => {
    e.preventDefault();
    setFormErrors(validate())

    if(company_name && owner_name && role &&  company_email1 && company_email2 && company_contact1 && company_contact2 && password && status){

      const formdata = new FormData();

      formdata.append("company_name",company_name);
      formdata.append("owner_name",owner_name);
      formdata.append("role",role);
      formdata.append("company_email1",company_email1);
      formdata.append("company_email2",company_email2);
      formdata.append("company_contact1",company_contact1);
      formdata.append("company_contact2",company_contact2);
      formdata.append("password",password);
      formdata.append("status",status);
    }

    const data = {
      company_name,
      owner_name,
      role,
      company_email1,
      company_email2,
      company_contact1,
      company_contact2,
      password,
      status,
      entry_date,
      update_date,
      entry_by,
    };
    let res = "";
    if (id) {
      res = await axios.put(
        "http://localhost:1100/nodejs/company/" + id,
        data
      );
    } else {
      res = await axios.post("http://localhost:1100/nodejs/company", data);
    }
    alert(res.data);
    navigate("/Company");
  };
  return (
    <main id="main" class="main">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">Company</h1>
          <form class="row g-3">
            <div class="col-4">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Company Name"
                  defaultValue={company_name}
                  onChange={(e) => setcompany_name(e.target.value)}
                />
                <label for="floatingName">Company Name</label>
                <p style={{color: "red"}}>{formErrors.company_name}</p>

              </div>
            </div>

            <div class="col-4">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Owner name"
                  defaultValue={owner_name}
                  onChange={(e) => setowner_name(e.target.value)}
                />
                <label for="floatingPassword">Owner name</label>
                <p style={{color: "red"}}>{formErrors.owner_name}</p>

              </div>
            </div>

            <div class="col-8">
          <select name="role" id="role" class="form-control" onChange={(e)=>setrole(e.target.value)} >
              <option value="0">1.admin</option>
              <option value="0">2.company</option>          
          </select>
        </div>

            <div class="col-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Company email 1"
                  defaultValue={company_email1}
                  onChange={(e) => setcompany_email1(e.target.value)}
                />
                <label for="floatingPassword">Company email 1</label>
                <p style={{color: "red"}}>{formErrors.company_email1}</p>

              </div>
            </div>

            <div class="col-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Company email 2"
                  defaultValue={company_email2}
                  onChange={(e) => setcompany_email2(e.target.value)}
                />
                <label for="floatingPassword">Company email 2</label>
                <p style={{color: "red"}}>{formErrors.company_email2}</p>

              </div>
            </div>

            <div class="col-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Company contact 1"
                  defaultValue={company_contact1}
                  onChange={(e) => setcompany_contact1(e.target.value)}
                />
                <label for="floatingPassword">Company contact 1</label>
                <p style={{color: "red"}}>{formErrors.company_contact1}</p>

              </div>
            </div>

            <div class="col-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Company contact 2"
                  defaultValue={company_contact2}
                  onChange={(e) => setcompany_contact2(e.target.value)}
                />
                <label for="floatingPassword">Company contact 2</label>
                <p style={{color: "red"}}>{formErrors.company_contact2}</p>

              </div>
            </div>

            <div class="col-6">
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  defaultValue={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <label for="floatingPassword">Passwoed</label>
                <p style={{color: "red"}}>{formErrors.password}</p>
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
