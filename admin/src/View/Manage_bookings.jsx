import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Manage_bookings() {
  const [booking, setbooking] = useState([]);
  let i = 1;
  useEffect(() => {
    getBooking();
  }, []);

  const getBooking=async ()=>{
    const res=await axios.get("http://localhost:1100/nodejs/booking");
    setbooking(res.data)
    console.log(res.data)
  }
  return (
    <>
       <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Trip</h5>

            <button class="button-39" role="button">
              <Link to={`/Add_booking/`}>Add Booking</Link>
            </button>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">U_id</th>
                  <th scope="col">C_id</th>
                  <th scope="col">P_id</th>
                  <th scope="col">Total person</th>
                  <th scope="col">Price</th>
                  <th scope="col">Payment</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {booking.map((booking)=>{
                  <tr>
                  <th scope="row">{i++}</th>
                  <td>{booking.user_id}</td>
                  <td>{booking.package_id}</td>
                  <td>{booking.company_id}</td>
                  <td>{booking.total_person}</td>
                  <td>{booking.price}</td>
                  <td>{booking.adv_payment}</td>
                  <td>{booking.status}</td>

                  <td>
                    <button class="button-62" role="button">
                      EDIT
                    </button>
                    &nbsp; &nbsp; &nbsp;
                    <button class="button-63" role="button">
                      DELETE
                    </button>
                  </td>
                </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
    </main> 
    </>
  )
}
