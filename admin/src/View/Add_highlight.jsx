import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_highlight() {
  const [place_name, setplace_name] = useState("");
  const [description, setdescription] = useState("");
  const [status, setstatus] = useState("");
  const [entry_date, setentry_date] = useState("");
  const [update_date, setupdate_date] = useState("");
  const [entry_by, setentry_by] = useState("");
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
      getHighlight();
    }
  }, []);

  const getHighlight = async () => {
    const url = "http://localhost:1100/nodejs/highlight/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setplace_name(res.data.place_name);
    setdescription(res.data.description);
    setstatus(res.data.status);
    setentry_date(res.data.entry_date);
    setupdate_date(res.data.update_date);
    setentry_by(res.data.entry_by);
    setimg(res.data.img);
  };

  const validate = () => {
    const errors = {};
    if (!place_name) {
      errors.place_name = "place_name is required";
    }
    if (!description) {
      errors.description = "description is required";
    }
    if (!status) {
      errors.status = "status is required";
    }
    if (!img) {
      errors.img = "img is required";
    }
    return errors;
  };

  const submitbtn = async (e) => {
    e.preventDefault();
    
    const formdata = new FormData();
    
      formdata.append("place_name", place_name);
      formdata.append("description", description);
      formdata.append("status", status);
      formdata.append("entry_date", entry_date);
      formdata.append("update_date", update_date);
      formdata.append("entry_by", entry_by);
      formdata.append("img", img);

      let res = "";
      if (id) {
        res = await axios.put(
          "http://localhost:1100/nodejs/highlight/" + id,
          formdata
        );
      } else {
        res = await axios.post(
          "http://localhost:1100/nodejs/highlight",
          formdata
        );
      }
      alert(res.data);
      navigate("/Highlights");
    
  };
  return (
    <main id="main" class="main">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">Highlights</h1>
          <form class="row g-3">
            <div class="col-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="From Place"
                  defaultValue={place_name}
                  onChange={(e) => setplace_name(e.target.value)}
                />
                <label for="floatingName">Place</label>
                <p style={{ color: "red" }}>{formErrors.place_name}</p>
              </div>
            </div>

            <div class="col-6">
              <select
                name="cars"
                id="cars"
                class="form-control"
                onChange={(e) => setstatus(e.target.value)}
              >
                <option value="0">1.active</option>
                <option value="0">2.inactive</option>
              </select>
            </div>
            <div class="col-12">
              <div class="form-floating">
                <input
                  type="file"
                  class="form-control"
                  placeholder="To Place"
                  onChange={(e) => setimg(e.target.files[0])}
                />
                <label for="floatingPassword">Image</label>
              </div>
            </div>
            <div class="col-12">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="To Place"
                  defaultValue={description}
                  onChange={(e) => setdescription(e.target.value)}
                />
                <label for="floatingPassword">Description</label>
                <p style={{ color: "red" }}>{formErrors.description}</p>
              </div>
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
