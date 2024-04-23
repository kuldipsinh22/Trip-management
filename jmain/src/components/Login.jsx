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
            marginLeft: 150,
            marginRight: 150,
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
              marginLeft: "41%",
              fontSize: 45,
              color: "black",
              marginBottom: 5,
            }}
          >
            Login
          </div>
          <div style={{ marginLeft: 170, marginBottom: 75 }}>
            <p>Enter your contact and password for login</p>
          </div>
          {/* User contact field */}
          <div style={{ marginBottom: 15 }}>
            <div style={{ marginBottom: 5, color: "black" }}>Contact</div>
            <input
              type="text"
              placeholder="User Contact"
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 5,
                border: "1px solid gray",
              }}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          {/* Password field */}
          <div style={{ marginBottom: 15 }}>
            <div style={{ marginBottom: 5, color: "black", marginTop: 20 }}>
              Password
            </div>
            <input
              type="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 5,
                border: "1px solid grey",
              }}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          {/* Login button */}
          <div>
            <button
              className="button-84"
              style={{
                width: "100%",
                marginTop: 20,
              }}
              onClick={submitHandle}
            >
              Login
            </button>
          </div>
        </div>
        {/* Right side: Image */}
        <div style={{ width: "50%", borderRadius: 10, marginLeft: 10 }}>
          <img
            src="https://wallpaperaccess.com/full/1350982.jpg"
            alt="Image"
            style={{
              width: "100%",
              height: "700px",
              borderRadius: 30,
              objectFit: "cover",
              padding: 20,
              borderColor: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
}
