import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Feedbacks() {
  const [Feedbacks, setFeedbacks] = useState([]);
  let i = 1;
  useEffect(() => {
    getFeedbacks();
  }, []);

  const getFeedbacks = async () => {
    const res = await axios.get("http://localhost:1100/nodejs/feedback");
    setFeedbacks(res.data);
    console.log(res.data);
  };

  const deleteFeedbacks = async (id) => {
    let ans = window.confirm("Are you sure??");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:1100/nodejs/feedback/" + id
      );
      alert(res.data);
      getFeedbacks();
    }
  };
  return (
    <div>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <div class="col-md-12">
              <h5 class="card-title col-md-10">Feedbacks</h5>
              <button class="button-39" role="button">
                <Link to={`/Add_feedback/`}>Add feedback</Link>
              </button>
            </div>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Ratings</th>
                  <th scope="col">Comments</th>
                </tr>
              </thead>
              <tbody>
                {Feedbacks.map((Feedbacks) => (
                  <tr>
                    <th scope="row">{i++}</th>
                    <td>{Feedbacks.rating}</td>
                    <td>{Feedbacks.comment}</td>
                    <td>
                      <button class="button-39" role="button">
                        <Link to={`/Add_feedback/` + Feedbacks.feedback_id}>
                          Edit
                        </Link>
                      </button>
                    </td>
                    <td>
                      <button
                        class="button-40"
                        role="button"
                        onClick={() => deleteFeedbacks(Feedbacks.feedback_id)}
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
