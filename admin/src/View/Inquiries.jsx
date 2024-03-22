import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Inquiries() {
  const [inquirie, setInquiries] = useState([]);
  let i = 1;
  useEffect(() => {
    getInquiries();
  }, []);

  const getInquiries = async () => {
    const res = await axios.get("http://localhost:1100/nodejs/inquirie");
    setInquiries(res.data);
    console.log(res.data);
  };

  const deleteInquiries = async (id) => {
    let ans = window.confirm("Are you sure??");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:1100/nodejs/inquirie/" + id
      );
      alert(res.data);
      getInquiries();
    }
  };
  return (
    <div>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <div class="col-md-12">
              <h5 class="card-title col-md-10">Inquiries</h5>
              <button class="button-39" role="button">
                <Link to={`/Add_inquiries/`}>Add inquirie</Link>
              </button>
            </div>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Questions</th>
                </tr>
              </thead>
              <tbody>
                {inquirie.map((inquirie) => (
                  <tr>
                    <th scope="row">{i++}</th>
                    <td>{inquirie.question}</td>
                    <td>
                      <button class="button-39" role="button">
                        <Link to={`/Add_inquiries/` + inquirie.inquiries_id}>
                          Edit
                        </Link>
                      </button>
                    </td>
                    <td>
                      <button
                        class="button-40"
                        role="button"
                        onClick={() => deleteInquiries(inquirie.inquiries_id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
