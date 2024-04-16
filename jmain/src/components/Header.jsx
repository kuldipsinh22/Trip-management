import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [img, setimg] = useState("");
  const [auth, setAuth] = useState(sessionStorage.getItem("user"));

  const getUser = async () => {
    const url = "http://localhost:1100/nodejs/user/" + auth;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setimg(res.data.img);
  };

  useEffect(() => {
    console.log(auth);
    if (auth) {
      getUser();
    }
  }, []);
  return (
    <>
      <header className="header">
        {/* Top Bar */}
        <div className="top_bar">
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-row">
                <div className="phone">+45 345 3324 56789</div>
                <div className="social">
                  <ul className="social_list">
                    <li className="social_list_item">
                      <a href="#">
                        <i className="fa fa-pinterest" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="#">
                        <i className="fa fa-dribbble" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="#">
                        <i className="fa fa-behance" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="social_list_item">
                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="user_box ml-auto">
                  <div className="user_box_login user_box_link">
                    <a href="#">login</a>
                  </div>
                  <div className="user_box_register user_box_link">
                    <a href="#">register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Navigation */}
        <nav className="main_nav">
          <div className="container">
            <div className="row">
              <div className="col main_nav_col d-flex flex-row align-items-center justify-content-start">
                <div className="logo_container">
                  <div className="logo">
                    <a href="#">
                      <img src="images/logo.png" alt="" />
                      travelix
                    </a>
                  </div>
                </div>
                <div
                  className="main_nav_container"
                  style={{ marginLeft: "200px" }}
                >
                  <ul className="main_nav_list">
                    <li className="main_nav_item">
                      <Link to="/Home">Home</Link>
                    </li>
                    <li className="main_nav_item">
                      <Link to="/About">About us</Link>
                    </li>
                    <li className="main_nav_item">
                      <Link to="/Offers">offers</Link>
                    </li>
                    <li className="main_nav_item">
                      <Link to="/Blogs">news</Link>
                    </li>
                    <li className="main_nav_item">
                      <Link to="/Contact">contact</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link to={`/Profile/` + auth}>
                    <img
                      src={`http://localhost:1100/upload/${img}`}
                      alt=""
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        // backgroundColor: "blue",
                      }}
                    />
                  </Link>
                </div>

                <div className="hamburger">
                  <i className="fa fa-bars trans_200" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div class="menu trans_500">
        <div class="menu_content d-flex flex-column align-items-center justify-content-center text-center">
          <div class="menu_close_container">
            <div class="menu_close"></div>
          </div>
          <div class="logo menu_logo">
            <a href="#">
              <img src="images/logo.png" alt="" />
            </a>
          </div>
          <ul>
            <li class="menu_item">
              <Link to="/Home">Home</Link>
            </li>
            <li class="menu_item">
              <Link to="/About">About us</Link>
            </li>
            <li class="menu_item">
              <Link to="/Offers">offers</Link>
            </li>
            <li class="menu_item">
              <Link to="/Blogs">news</Link>
            </li>
            <li class="menu_item">
              <Link to="/Contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
