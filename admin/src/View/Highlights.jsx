import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Highlights() {
  const [Highlight, setHighlight] = useState([]);
  let i = 1;
  useEffect(() => {
    getHighlight();
  }, []);

  const getHighlight = async () => {
    const res = await axios.get("http://localhost:1100/nodejs/highlight");
    setHighlight(res.data);
    console.log(res.data);
  };

  const deleteHighlight = async (id) => {
    let ans = window.confirm("Are you sure??");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:1100/nodejs/highlight/" + id
      );
      alert(res.data);
      getHighlight();
    }
  };
  return (
    <div>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <div class="col-md-12">
              <h5 class="card-title col-md-10">Highlights</h5>
              <button class="button-39" role="button">
                <Link to={`/Add_highlight/`}>Add Highlight</Link>
              </button>
            </div>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Place name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Image</th>
                </tr>
              </thead>
              <tbody>
                {Highlight.map((Highlight) => (
                  <tr>
                    <th scope="row">{i++}</th>
                    <td>{Highlight.place_name}</td>
                    <td>{Highlight.description}</td>
                    <td><img src={`http://localhost:1100/upload/${Highlight.img}`} height={100} width={100} /></td>
                    <td>
                      <button class="button-39" role="button">
                        <Link to={`/Add_highlight/` + Highlight.highlight_id}>
                          Edit
                        </Link>
                      </button>
                    </td>
                    <td>
                      <button
                        class="button-40"
                        role="button"
                        onClick={() => deleteHighlight(Highlight.highlight_id)}
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
