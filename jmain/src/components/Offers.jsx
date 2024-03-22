import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Offers() {
  const [packages, setPackages] = useState([]);
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
                          <div className="offers_image_background">
                            <img
                              src={`http://localhost:1100/upload/${packages.img}`}
                            />
                          </div>
                          <div className="offer_name">
                            <a href="single_listing.html">
                              {packages.from_place}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="offers_content">
                          <div className="offers_price">
                            $70<span>per night</span>
                          </div>
                          <div
                            className="rating_r rating_r_4 offers_rating"
                            data-rating={4}
                          >
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                          </div>
                          <p className="offers_text">
                            Suspendisse potenti. In faucibus massa. Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit. Nullam
                            eu convallis tortor. Lorem ipsum dolor sit amet.
                          </p>
                          <div className="offers_icons">
                            <ul className="offers_icons_list">
                              <li className="offers_icons_item">
                                <img src="images/post.png" alt="" />
                              </li>
                              <li className="offers_icons_item">
                                <img src="images/compass.png" alt="" />
                              </li>
                              <li className="offers_icons_item">
                                <img src="images/bicycle.png" alt="" />
                              </li>
                              <li className="offers_icons_item">
                                <img src="images/sailboat.png" alt="" />
                              </li>
                            </ul>
                          </div>
                          <div className="button book_button">
                            <a href="#">
                              book
                              <span />
                              <span />
                              <span />
                            </a>
                          </div>
                          <div className="offer_reviews">
                            <div className="offer_reviews_content">
                              <div className="offer_reviews_title">
                                very good
                              </div>
                              <div className="offer_reviews_subtitle">
                                100 reviews
                              </div>
                            </div>
                            <div className="offer_reviews_rating text-center">
                              8.1
                            </div>
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
