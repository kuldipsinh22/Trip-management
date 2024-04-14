import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Offers() {
  const [packages, setPackages] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  let i = 1;
  useEffect(() => {
    getPackages();
  }, []);

  const getPackages = async () => {
    const res = await axios.get("http://localhost:1100/nodejs/package");
    setPackages(res.data);
    console.log(res.data);
  };
  return (
    <>
      {/* Home */}
      <div className="home">
        <div
          className="home_background parallax-window"
          data-parallax="scroll"
          data-image-src="images/about_background.jpg"
        />
        <div className="home_content">
          <div className="home_title">our offers</div>
        </div>
      </div>
      {/* Offers */}
      <div className="offers">
        {/* Offers */}
        <div className="container">
          <div className="row">
            <div className="col-lg-1 temp_col" />
            <div className="col-lg-11"></div>
            <div className="col-lg-12">
              {/* Offers Grid */}
              <div className="offers_grid">
                {/* Offers Item */}
                {packages.map((packages) => (
                  <div className="offers_item rating_4">
                    <div className="row">
                      <div className="col-lg-1 temp_col" />
                      <div className="col-lg-3 col-1680-4">
                        <div className="offers_image_container">
                          {/* Image by https://unsplash.com/@kensuarez */}
                          <div
                            className="offers_image_background"
                            // style={{
                            //   backgroundImage: "url(images/offer_1.jpg)",
                            // }}
                          >
                            <img
                              alt=""
                              src={`http://localhost:1100/Upload/${packages.img}`}
                              style={{
                                objectFit: "cover",
                                height: "80%",
                                width: "100%",
                              }}
                            />
                          </div>
                          <div className="offer_name">
                            <a href="single_listing.html">
                              {packages.to_place}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="offers_content">
                          <div className="offers_price">
                            Rs. {packages.package_price}
                            <span>{packages.total_days}</span>
                          </div>

                          <p className="offers_text">{packages.information}</p>
                          <br />
                          <div className="dates">
                            <p>From date - {packages.from_date}</p>
                            <p>To date - {packages.to_date}</p>
                          </div>
                          <div className="button book_button">
                            <a href="#">
                              book
                              <span />
                              <span />
                              <span />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
