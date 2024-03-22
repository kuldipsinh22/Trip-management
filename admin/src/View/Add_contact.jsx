import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


export default function Add_Contact() {
  const[email1,setemail1]= useState("");
  const[email2,setemail2]= useState("");
  const[phone_no1,setphone_no1]= useState("");
  const[phone_no2,setphone_no2]= useState("");
  const[address,setaddress]=useState("");
  const[status,setstatus]=useState("");
  const[entry_date,setentry_date]=useState("");
  const[update_date,setupdate_date]=useState("");
  const[entry_by,setentry_by]=useState("");
  const[formErrors,setFormErrors]=useState({})



  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(id);
    if (id) {
      getcontact();
    }
  }, []);
  const getcontact = async () => {
    const url = "http://localhost:1100/nodejs/contact/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setemail1(res.data.email1);
    setemail2(res.data.email2);
    setphone_no1(res.data.phone_no1);
    setphone_no2(res.data.phone_no2);
    setstatus(res.data.status)
    setentry_date(res.data.entry_date);
    setupdate_date(res.data.update_date);
    setentry_by(res.data.entry_by);
  };


  const validate = () => {
    const errors = {};
    if (!email1) {
      errors.email1 = "email1 is required";
    }
    if (!email2) {
      errors.email2 = "email2 is required";
    }
    if (!phone_no1) {
      errors.phone_no1 = "phone_no1 is required";
    }
    if (!phone_no2) {
      errors.phone_no2 = "phone_no2 is required";
    }
    if (!status) {
      errors.status = "status is required";
    }
    return errors;
  }

  const btnSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate());

    if(email1 && email2 && phone_no1 && phone_no2 && status){

      const formdata = new FormData();

      formdata.append("email1",email1);
      formdata.append("email2",email2);
      formdata.append("phone_no1",phone_no1);
      formdata.append("phone_no2",phone_no2);
      formdata.append("status",status);
    }

    const data = {
      email1,
      email2,
      phone_no1,
      phone_no2,
      status,
      entry_date,
      update_date,
      entry_by,
    };
    let res = "";
    if (id) {
      res = await axios.put(
        "http://localhost:1100/nodejs/contact/" + id,
        data
      );
    } 
    alert(res.data);
  };

  return (
    <>
        <main id="main" class="main">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">Contact_us</h1>
          <form class="row g-3">
            <div class="col-8">
              <div class="form-floating">
              <label for="inputNanme4" class="form-label">Email id1</label>
                <input
                  type="text"
                  class="form-control"
                  id="floatingemail"
                  placeholder="Email id"
                  defaultValue={email1}
                  onChange={(e) => setemail1(e.target.value)}
                />
                <label for="floatingName">Email id</label>
                <p style={{color: "red"}}>{formErrors.email1}</p>

              </div>
            </div>
            <div class="col-8">
            <label for="inputNanme4" class="form-label">Email id2</label>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingemail"
                  placeholder="Email id 2"
                  defaultValue={email2}
                  onChange={(e) => setemail2(e.target.value)}
                />
                <label for="floatingName">Email id</label>
                <p style={{color: "red"}}>{formErrors.email2}</p>
              </div>
            </div>
            <div class="col-8">
            <label for="inputNanme4" class="form-label">Contact no1</label>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingcontact"
                  placeholder="Contact_no"
                  defaultValue={phone_no1}
                  onChange={(e) => setphone_no1(e.target.value)}
                />
                <label for="floatingphone2">Contact</label>
                <p style={{color: "red"}}>{formErrors.phone_no1}</p>

              </div>
            </div>
            <div class="col-8">
            <label for="inputNanme4" class="form-label">contact no2</label>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingcontact"
                  placeholder="Contact_no"
                  defaultValue={phone_no2}
                  onChange={(e) => setphone_no2(e.target.value)}
                />
                <label for="floatingphone2">Contact 2</label>
                <p style={{color: "red"}}>{formErrors.phone_no2}</p>

              </div>
            </div>
            <div class="col-8">
            <label for="inputNanme4" class="form-label">Address</label>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingcontact"
                  placeholder="Contact_no"
                  defaultValue={address}
                  onChange={(e) => setaddress(e.target.value)}
                />
                <label for="floatingphone2">Address</label>
                <p style={{color: "red"}}>{formErrors.address}</p>

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
              <button type="submit" class="btn btn-primary" onClick={btnSubmit}>
                Submit
              </button>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <button type="reset" class="btn btn-secondary">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
    </>
  )
}