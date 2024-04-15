import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [user_contact, setContact] = useState("");
  const [user_password, setpassword] = useState("");
  const [error, setError] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();
    //alert(role_id);
    try {
      const res = await axios.get("http://localhost:1100/nodejs/mainlogin", {
        params: {
          user_contact: user_contact,
          user_password: user_password,
        },
      });

      if (res.data > 0) {
        setError("");
        sessionStorage.setItem("user", res.data);

        window.location.reload();
      } else {
        setError("Invalid UserId or Password");
      }
    } catch (error) {}
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {/* Left side: Login form */}
        <div
          style={{
            width: "50%",
            padding: 20,
            marginRight: 20,

            marginLeft: 20,
            height: "100%",
          }}
        >
          {/* Login title */}
          <div
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 20,
              marginTop: "10%",
              marginLeft: "40%",
              fontSize: 50,
              color: "black",
              marginBottom: 25,
            }}
          >
            Login
          </div>
          {/* User contact field */}
          <div style={{ marginBottom: 15 }}>
            <input
              type="text"
              placeholder="User Contact"
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 5,
                border: "1px solid gray",
                fontWeight: "bold",
              }}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          {/* Password field */}
          <div style={{ marginBottom: 15 }}>
            <input
              type="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 5,
                border: "1px solid gray",
                fontWeight: "bold",
              }}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          {/* Login button */}
          <div>
            <button
              style={{
                width: "100%",
                padding: 10,
                borderRadius: 5,
                border: "1px solid gray",
                backgroundColor: "lightgray",
                fontWeight: "bold",
              }}
              onClick={submitHandle}
            >
              Login
            </button>
          </div>
        </div>
        {/* Right side: Image */}
        <div
          style={{ width: "50%", border: "1px solid gray", borderRadius: 10 }}
        >
          <img
            src="http://wonderfulengineering.com/wp-content/uploads/2016/01/black-wallpaper-5.jpg"
            alt="Image"
            style={{
              width: "100%",
              height: "700px",
              borderRadius: 10,
              objectFit: "cover",
              marginTop: "10%",
              marginBottom: "30%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
