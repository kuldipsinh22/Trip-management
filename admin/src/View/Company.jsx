import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Company() {
  const [Company, setCompany] = useState([]);
  let i = 1;
  useEffect(() => {
    getCompany();
  }, []);

  const getCompany = async () => {
    const res = await axios.get("http://localhost:1100/nodejs/company");
    setCompany(res.data);
    console.log(res.data);
  };

  const deleteCompany = async (id) => {
    let ans = window.confirm("Are you sure??");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:1100/nodejs/company/" + id
      );
      alert(res.data);
      getCompany();
    }
  };
  return (
    <div>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <div class="col-md-12">
              <h5 class="card-title col-md-10">Company</h5>
              <button class="button-39" role="button">
                <Link to={`/Add_company/`}>Add Company</Link>
              </button>
            </div>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Company name</th>
                  <th scope="col">Owner name</th>
                  <th scope="col">Main email</th>
                  <th scope="col">Main Contact</th>
                  <th scope="col">Password</th>
                </tr>
              </thead>
              <tbody>
                {Company.map((Company) => (
                  <tr>
                    <th scope="row">{i++}</th>
                    <td>{Company.company_name}</td>
                    <td>{Company.owner_name}</td>
                    <td>{Company.company_email1}</td>
                    <td>{Company.company_contact1}</td>
                    <td>{Company.company_password}</td>
                    <td>
                      <button class="button-39" role="button">
                        <Link to={`/Add_company/` + Company.company_id}>
                          Edit
                        </Link>
                      </button>
                    </td>
                    <td>
                      <button
                        class="button-40"
                        role="button"
                        onClick={() => deleteCompany(Company.company_id)}
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
