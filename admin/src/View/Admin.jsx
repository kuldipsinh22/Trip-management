import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Admin() {
  const [Admin, setAdmin] = useState([]);
  let i = 1;
  useEffect(() => {
    getAdmin();
  }, []);

  const getAdmin = async () => {
    const res = await axios.get("http://localhost:1100/nodejs/admin");
    setAdmin(res.data);
    console.log(res.data);
  };

  const deleteAdmin = async (id) => {
    let ans = window.confirm("Are you sure??");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:1100/nodejs/admin/" + id
      );
      alert(res.data);
      getAdmin();
    }
  };
  return (
    <>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Admin information</h5>

            <button class="button-39" role="button">
              <Link to={`/Add_Admin`}>Add admin</Link>
            </button>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Password</th>
                </tr>
              </thead>
              <tbody>
                {Admin.map(Admin=>
                  <tr>
                  <th scope="row">{i++}</th>
                  <td>{Admin.admin_name}</td>
                  <td>{Admin.admin_email}</td>
                  <td>{Admin.admin_contact}</td>
                  <td>{Admin.admin_password}</td>
                  <td>
                      <button class="button-39" role="button">
                        <Link to={`/Add_Admin/` + Admin.admin_id}>
                          Edit
                        </Link>
                      </button>
                    </td>
                    <td>
                      <button
                        class="button-40"
                        role="button"
                        onClick={() => deleteAdmin(Admin.admin_id)}
                      >
                        Delete
                      </button>
                    </td>
                </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
    </main> 
    </>
  )
}
