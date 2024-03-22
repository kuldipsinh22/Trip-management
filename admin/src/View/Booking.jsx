import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Booking() {
  const [Booking, setBooking] = useState([]);
  let i = 1;
  useEffect(() => {
    getBooking();
  }, []);

  const getBooking = async () => {
    const res = await axios.get("http://localhost:1100/nodejs/booking");
    setBooking(res.data);
    console.log(res.data);
  };

  const deleteBooking = async (id) => {
    let ans = window.confirm("Are you sure??");
    if (ans) {
      const res = await axios.delete(
        "http://localhost:1100/nodejs/booking/" + id
      );
      alert(res.data);
      getBooking();      
    }
  };
  return (
    <div>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <div class="col-md-12">
              <h5 class="card-title col-md-10">Booking</h5>
              <button class="button-39" role="button">
                <Link to={`/Add_booking/`}>Add booking</Link>
              </button>
            </div>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Company_id</th>
                  <th scope="col">Total Person</th>
                  <th scope="col">Price</th>
                  <th scope="col">Advance Payment</th>
                </tr>
              </thead>
              <tbody>
                {Booking.map((Booking) => (
                  <tr>
                    <th scope="row">{i++}</th>
                    <td>{Booking.company_id}</td>
                    <td>{Booking.total_person}</td>
                    <td>{Booking.price}</td>
                    <td>{Booking.adv_payment}</td>
                    <td>
                      <button class="button-39" role="button">
                        <Link to={`/Add_booking/` + Booking.booking_id}>
                          Edit
                        </Link>
                      </button>
                    </td>
                    <td>
                      <button
                        class="button-40"
                        role="button"
                        onClick={() => deleteBooking(Booking.booking_id)}
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
