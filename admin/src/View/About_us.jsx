import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function () {
  const [about_us,setabout_us] = useState([]);
  let i = 1;
  useEffect(() => {
    getabout();
  }, []);

  const getabout = async () => {
    const res = await axios.get("http://localhost:1100/nodejs/about");
    setabout_us(res.data);
    console.log(res.data);
  };

  const deleteabout = async (id) => {
    let ans = window.confirm("Are you sure??");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:1100/nodejs/about/" + id
      );
      alert(res.data);
      getabout();
    }
  };
  return (
    <>
     <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">About_us</h5>

            <button class="button-39" role="button">
              <Link to={`/Add_about/`}>Add About</Link>
            </button>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Khushi</td>
                  <td>
                    <button class="button-62" role="button">
                    <Link to={`/Add_about/` + about_us.about_id}>
                          Edit
                    </Link>
                    </button>
                    &nbsp; &nbsp; &nbsp;
                    <button class="button-63" role="button" onClick={() => deleteabout(about_us.about_id)}>
                      DELETE
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </main> 
    </>
  )
}
