import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function () {
  const [contact_us, setcontact_us] = useState([]);
  let i = 1;
  useEffect(() => {
    getContact();
  }, []);

  const getContact = async () => {
    const res = await axios.get("http://localhost:1100/nodejs/contact");
    setcontact_us(res.data);
    console.log(res.data);
  };

  const deletecontact = async (id) => {
    let ans = window.confirm("Are you sure??");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:1100/nodejs/contact/" + id
      );
      alert(res.data);
      getContact();
    }
  };
  return (
    <>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Contact_us</h5>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Email1</th>
                  <th scope="col">Email2</th>
                  <th scope="col">Contact1</th>
                  <th scope="col">Contact2</th>
                </tr>
              </thead>
              <tbody>
                {contact_us.map((contact_us) => (
                  <tr>
                    <th scope="row">{i++}</th>
                    <td>{contact_us.email1}</td>
                    <td>{contact_us.email2}</td>
                    <td>{contact_us.phone_no1}</td>
                    <td>{contact_us.phone_no2}</td>

                    <td>
                      <button class="button-39" role="button">
                        <Link to={`/Add_contact/` + contact_us.contact_id}>
                          Edit
                        </Link>
                      </button>
                      &nbsp; &nbsp; &nbsp;
                      <button
                        class="button-40"
                        role="button"
                        onClick={() => deletecontact(contact_us.contact_id)}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
