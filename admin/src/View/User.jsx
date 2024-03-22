import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function User() {
  const [User, setUser] = useState([]);
  let i = 1;
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await axios.get("http://localhost:1100/nodejs/user");
    setUser(res.data);
    console.log(res.data);
  };

  const deleteUser = async (id) => {
    let ans = window.confirm("Are you sure??");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:1100/nodejs/user/" + id
      );
      alert(res.data);
      getUser();
    }
  };
  return (
    <div>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <div class="col-md-12">
              <h5 class="card-title col-md-10">Users</h5>
              <button class="button-39" role="button">
                <Link to={`/Add_user/`}>Add Users</Link>
              </button>
            </div>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                  <th scope="col">country</th>
                </tr>
              </thead>
              <tbody>
                {User.map((Users) => (
                  <tr>
                    <th scope="row">{i++}</th>
                    <td>{Users.user_name}</td>
                    <td>{Users.user_email}</td>
                    <td>{Users.user_contact}</td>
                    <td>{Users.user_country}</td>
                    <td>
                      <button class="button-39" role="button">
                        <Link to={`/Add_user/` + Users.user_id}>
                          Edit
                        </Link>
                      </button>
                    </td>
                    <td>
                      <button
                        class="button-40"
                        role="button"
                        onClick={() => deleteUser(Users.user_id)}
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
