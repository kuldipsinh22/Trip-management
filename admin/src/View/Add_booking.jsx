import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_company() {
  const [user_id, setuser_id] = useState("");
  const [package_id, setpackage_id] = useState("");
  const [company_id, setcompany_id] = useState("");
  const [total_person, settotal_person] = useState("");
  const [price, setprice] = useState("");
  const [adv_payment, setadv_payment] = useState("");
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
    const url = "http://localhost:1100/nodejs/booking/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setuser_id(res.data.user_id);
    setpackage_id(res.data.package_id);
    setcompany_id(res.data.company_id);
    settotal_person(res.data.total_person);
    setprice(res.data.price);
    setadv_payment(res.data.adv_payment);
    setstatus(res.data.status)
    setentry_date(res.data.entry_date);
    setupdate_date(res.data.update_date);
    setentry_by(res.data.entry_by);
  };

  const validate = () => {
    const errors = {};
    if (!user_id) {
      errors.user_id = "user_id is required";
    }
    if (!package_id) {
      errors.package_id = "package_id is required";
    }
    if (!company_id) {
      errors.company_id = "company_id is required";
    }
    if (!total_person) {
      errors.total_person = "total_person is required";
    }
    if (!price) {
      errors.price = "price is required";
    }
    if (!adv_payment) {
      errors.adv_payment = "adv_payment is required";
    }
    if (!status) {
      errors.status = "status is required";
    }
    return errors;
  };

  const submitbtn = async (e) => {
    e.preventDefault();
    setFormErrors(validate())

    if(user_id && package_id && company_id && total_person && price && adv_payment && status){

      const formdata = new FormData();

      formdata.append("user_id",user_id);
      formdata.append("package_id",package_id);
      formdata.append("company_id",company_id);
      formdata.append("total_person",total_person);
      formdata.append("price",price);
      formdata.append("adv_payment",adv_payment);
      formdata.append("status",status);
    }

    const data = {
      user_id,
      package_id,
      company_id,
      total_person,
      price,
      adv_payment,
      status,
      entry_date,
      update_date,
      entry_by,
    };
    let res = "";
    if (id) {
      res = await axios.put(
        "http://localhost:1100/nodejs/booking/" + id,
        data
      );
    } else {
      res = await axios.post("http://localhost:1100/nodejs/booking", data);
    }
    alert(res.data);
    navigate("/Booking");
  };
  return (
    <main id="main" class="main">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">Booking</h1>
          <form class="row g-3">
            <div class="col-4">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="User id"
                  defaultValue={user_id}
                  onChange={(e) => setuser_id(e.target.value)}
                />
                <label for="floatingName">User id</label>
                <p style={{color: "red"}}>{formErrors.user_id}</p>
              </div>
            </div>

            <div class="col-4">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Company id"
                  defaultValue={company_id}
                  onChange={(e) => setcompany_id(e.target.value)}
                />
                <label for="floatingPassword">Company id</label>
                <p style={{color: "red"}}>{formErrors.company_id}</p>

              </div>
            </div>

            <div class="col-4">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Package id"
                  defaultValue={package_id}
                  onChange={(e) => setpackage_id(e.target.value)}
                />
                <label for="floatingPassword">Package id</label>
                <p style={{color: "red"}}>{formErrors.package_id}</p>
              </div>
            </div>

            <div class="col-4">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Total Person"
                  defaultValue={total_person}
                  onChange={(e) => settotal_person(e.target.value)}
                />
                <label for="floatingPassword">Total Person</label>
                <p style={{color: "red"}}>{formErrors.total_person}</p>
              </div>
            </div>

            <div class="col-4">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Price"
                  defaultValue={price}
                  onChange={(e) => setprice(e.target.value)}
                />
                <label for="floatingPassword">Price</label>
                <p style={{color: "red"}}>{formErrors.price}</p>
              </div>
            </div>

            <div class="col-4">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Advance payment"
                  defaultValue={adv_payment}
                  onChange={(e) => setadv_payment(e.target.value)}
                />
                <label for="floatingPassword">Advance payment</label>
                <p style={{color: "red"}}>{formErrors.adv_payment}</p>
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
