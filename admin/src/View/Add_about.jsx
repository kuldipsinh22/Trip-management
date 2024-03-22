import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_about() {
  const[description,setdescription]= useState("");
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
    const url = "http://localhost:1100/nodejs/about/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setdescription(res.data.description);
    setstatus(res.data.status)
    setentry_date(res.data.entry_date);
    setupdate_date(res.data.update_date);
    setentry_by(res.data.entry_by);
  };

  const validate = () => {
    const errors = {};
    if (!description) {
      errors.description = "description is required";
    }
    if (!status) {
      errors.status = "status is required";
    }
    return errors;
  };

  const btnSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate())

    if(description && status){

      const formdata = new FormData();

      formdata.append("description",description);
      formdata.append("status",status);
    }


    const data = {
      description,
      status,
      entry_date,
      update_date,
      entry_by,
    };
    let res = "";
    if (id) {
      res = await axios.put(
        "http://localhost:1100/nodejs/about/" + id,
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
          <h1 class="card-title">About_us</h1>
          <form class="row g-3">
            <div class="col-8">
            <label for="inputNanme4" class="form-label">Description</label>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingdescription"
                  placeholder="description"
                  defaultValue={description}
                  onChange={(e) => setdescription(e.target.value)}
                />
                <label for="floatingName">Description</label>
                <p style={{color: "red"}}>{formErrors.description}</p>
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
