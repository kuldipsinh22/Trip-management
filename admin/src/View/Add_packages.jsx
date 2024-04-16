import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_packages() {
  const [from_place, setfrom_place] = useState("");
  const [to_place, setto_place] = useState("");
  const [from_date, setfrom_date] = useState("");
  const [to_date, setto_date] = useState("");
  const [total_days, settotal_days] = useState("");
  const [package_price, setpackage_price] = useState("");
  const [information, setinformation] = useState("");
  const [company_id, setcompany_id] = useState("");
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

  const validate = () => {
    const errors = {};
    if (!from_place) {
      errors.from_place = "from_place is required";
    }
    if (!to_place) {
      errors.to_place = "to_place is required";
    }
    if (!from_date) {
      errors.from_date = "from_date is required";
    }
    if (!to_date) {
      errors.to_date = "to_date is required";
    }
    if (!total_days) {
      errors.total_days = "total_days is required";
    }
    if (!package_price) {
      errors.package_price = "package_price is required";
    }
    if (!information) {
      errors.information = "information is required";
    }
    if (!company_id) {
      errors.company_id = "company_id is required";
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
      from_place &&
      to_place &&
      from_date &&
      to_date &&
      total_days &&
      package_price &&
      information &&
      company_id &&
      status
    ) {
      const formdata = new FormData();

      formdata.append("from_place", from_place);
      formdata.append("to_place", to_place);
      formdata.append("from_date", from_date);
      formdata.append("to_date", to_date);
      formdata.append("total_days", total_days);
      formdata.append("package_price", package_price);
      formdata.append("information", information);
      formdata.append("company_id", company_id);
      formdata.append("img", img);
      formdata.append("status", status);
      let res = "";
      if (id) {
        res = await axios.put(
          "http://localhost:1100/nodejs/package/" + id,
          formdata
        );
      } else {
        res = await axios.post(
          "http://localhost:1100/nodejs/package",
          formdata
        );
      }
      alert(res.data);
      navigate("/Tour_packages");
    }
  };
  return (
    <main id="main" class="main">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">Tour packages</h1>
          <form class="row g-3">
            <div class="col-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="From Place"
                  defaultValue={from_place}
                  onChange={(e) => setfrom_place(e.target.value)}
                />
                <label for="floatingName">From Place</label>
                <p style={{ color: "red" }}>{formErrors.from_place}</p>
              </div>
            </div>

            <div class="col-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="To Place"
                  defaultValue={to_place}
                  onChange={(e) => setto_place(e.target.value)}
                />
                <label for="floatingPassword">To Place</label>
                <p style={{ color: "red" }}>{formErrors.to_place}</p>
              </div>
            </div>

            <div class="col-6">
              <div class="col-md-12">
                <div class="form-floating">
                  <input
                    type="date"
                    class="form-control"
                    placeholder="From date"
                    defaultValue={from_date}
                    onChange={(e) => setfrom_date(e.target.value)}
                  />
                  <label for="floatingCity">From date</label>
                  <p style={{ color: "red" }}>{formErrors.from_date}</p>
                </div>
              </div>
            </div>

            <div class="col-6">
              <div class="form-floating">
                <input
                  type="date"
                  class="form-control"
                  placeholder="to_date"
                  defaultValue={to_date}
                  onChange={(e) => setto_date(e.target.value)}
                />
                <label for="floatingZip">To date</label>
                <p style={{ color: "red" }}>{formErrors.to_date}</p>
              </div>
            </div>

            <div class="col-4">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Total days"
                  defaultValue={total_days}
                  onChange={(e) => settotal_days(e.target.value)}
                />
                <label for="floatingZip">Total days</label>
                <p style={{ color: "red" }}>{formErrors.total_days}</p>
              </div>
            </div>

            <div class="col-4">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Package price"
                  defaultValue={package_price}
                  onChange={(e) => setpackage_price(e.target.value)}
                />
                <label for="floatingZip">Package price</label>
                <p style={{ color: "red" }}>{formErrors.package_price}</p>
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
                <label for="floatingZip">Company id</label>
                <p style={{ color: "red" }}>{formErrors.company_id}</p>
              </div>
            </div>

            <div class="col-12">
              <div class="form-floating">
                <textarea
                  type="text"
                  class="form-control"
                  placeholder="Information"
                  defaultValue={information}
                  onChange={(e) => setinformation(e.target.value)}
                />
                <label for="floatingZip">Information</label>
                <p style={{ color: "red" }}>{formErrors.information}</p>
              </div>
            </div>

            <div class="col-4">
              <div class="form-floating">
                <input
                  type="file"
                  class="form-control"
                  placeholder="Company id"
                  // defaultValue={company_id}
                  onChange={(e) => setimg(e.target.files[0])}
                />
                <label for="floatingZip">Image</label>
                {/* <p style={{ color: "red" }}>{formErrors.company_id}</p> */}
              </div>
            </div>

            <div class="col-6">
              <select
                name="status"
                id="status"
                class="form-control"
                onChange={(e) => setstatus(e.target.value)}
              >
                <option>Select</option>
                <option value="1">1.active</option>
                <option value="2">2.inactive</option>
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
