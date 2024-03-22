import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_inquiries() {
  const [question, setquestion] = useState("");
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
      getInquiries();
    }
  }, []);

  const getInquiries = async () => {
    const url = "http://localhost:1100/nodejs/inquirie/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setquestion(res.data.question);
    setstatus(res.data.status)
    setentry_date(res.data.entry_date);
    setupdate_date(res.data.update_date);
    setentry_by(res.data.entry_by);
  };

  const validate = () => {
    const errors = {};
    if (!question) {
      errors.question = "question is required";
    }
    if (!status) {
      errors.status = "status is required";
    }
    return errors;
  }

  const submitbtn = async (e) => {
    e.preventDefault();
    setFormErrors(validate())

    if (question && status) {
      
      const formdata = new FormData();

      formdata.append("question",question);
      formdata.append("status",status);
    }

    const data = {
      question,
      status,
      entry_date,
      update_date,
      entry_by,
    };
    let res = "";
    if (id) {
      res = await axios.put(
        "http://localhost:1100/nodejs/inquirie/" + id,
        data
      );
    } else {
      res = await axios.post("http://localhost:1100/nodejs/inquirie", data);
    }
    alert(res.data);
    navigate("/Inquiries");
  };
  return (
    <main id="main" class="main">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">Tour packages</h1>
          <form class="row g-3">
            <div class="col-12">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="From Place"
                  defaultValue={question}
                  onChange={(e) => setquestion(e.target.value)}
                />
                <label for="floatingName">Question</label>
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

            <div class="col-6 ">
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
