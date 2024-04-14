import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Tour_packages() {
  const [packages, setPackages] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  let i = 1;
  useEffect(() => {
    getPackages();
  }, []);

  const getPackages = async () => {
    const res = await axios.get("http://localhost:1100/nodejs/package");
    setPackages(res.data);
    console.log(res.data);
  };

  const deletePackages = async (id) => {
    let ans = window.confirm("Are you sure??");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:1100/nodejs/package/" + id
      );
      alert(res.data);
      getPackages();
    }
  };
  return (
    <div>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <div class="col-md-12">
              <h5 class="card-title col-md-10">Tour_packages</h5>
              <button class="button-39" role="button">
                <Link to={`/Add_packages/`}>Add package</Link>
              </button>
            </div>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Place</th>
                  <th scope="col">Date</th>
                  <th scope="col">Total days</th>
                  <th scope="col">Price</th>
                  <th scope="col">Image</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((packages) => (
                  <tr>
                    <th scope="row">{i++}</th>
                    <td>{packages.to_place}</td>
                    <td>{packages.from_date}</td>
                    <td>{packages.total_days}</td>
                    <td>{packages.package_price}</td>
                    <td>
                      <img
                        src={`http://localhost:1100/upload/${packages.img}`}
                        height={100}
                        width={100}
                        style={{ objectFit: "cover" }}
                      />
                    </td>

                    <td>
                      <button class="button-39" role="button">
                        <Link to={`/Add_packages/` + packages.package_id}>
                          Edit
                        </Link>
                      </button>
                    </td>
                    <td>
                      <button
                        class="button-40"
                        role="button"
                        onClick={() => deletePackages(packages.package_id)}
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
