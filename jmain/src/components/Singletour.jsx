import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Singletour() {
  const [from_place, setfrom_place] = useState("");
  const [to_place, setto_place] = useState("");
  const [from_date, setfrom_date] = useState("");
  const [to_date, setto_date] = useState("");
  const [total_days, settotal_days] = useState("");
  const [package_price, setpackage_price] = useState("");
  const [information, setinformation] = useState("");
  const [company_id, setcompany_id] = useState("");
  const [status, setstatus] = useState("");

  const [img, setimg] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(id);
    if (id) {
      getPackage();
    }
  }, []);

  const getPackage = async () => {
    const url = "http://localhost:1100/nodejs/package/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setfrom_place(res.data.from_place);
    setto_place(res.data.to_place);
    setfrom_date(res.data.from_date);
    setto_date(res.data.to_date);
    settotal_days(res.data.total_days);
    setpackage_price(res.data.package_price);
    setinformation(res.data.information);
    setcompany_id(res.data.company_id);
    setstatus(res.data.status);
    setimg(res.data.img);
  };
  return (
    <>
      {/* Home */}
      <div className="home">
        <div
          className="home_background parallax-window"
          data-parallax="scroll"
          data-image-src="images/single_background.jpg"
        />
        <div className="home_content">
          <div className="home_title">the offers</div>
        </div>
      </div>
      {/* Offers */}
      <div className="listing">
        {/* Single Listing */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single_listing">
                {/* Hotel Info */}
                <div className="hotel_info">
                  {/* Title */}
                  <div className="hotel_title_container d-flex flex-lg-row flex-column">
                    <div className="hotel_title_content">
                      <h1 className="hotel_title">{to_place}</h1>
                      <div className="rating_r rating_r_4 hotel_rating">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                      <div className="hotel_location"></div>
                    </div>
                    <div className="hotel_title_button ml-lg-auto text-lg-right">
                      <div className="button book_button trans_200">
                        <a href="#">
                          book
                          <span />
                          <span />
                          <span />
                        </a>
                      </div>
                      <div className="hotel_map_link_container">
                        <div className="hotel_map_link">
                          See Location on Map
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Listing Image */}
                  <div className="hotel_image">
                    <img src={`http://localhost:1100/Upload/${img}`} alt="" />
                    <div className="hotel_review_container d-flex flex-column align-items-center justify-content-center">
                      <div className="hotel_review">
                        <div className="hotel_review_content">
                          <div className="hotel_review_title">very good</div>
                          <div className="hotel_review_subtitle">
                            100 reviews
                          </div>
                        </div>
                        <div className="hotel_review_rating text-center">
                          8.1
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Hotel Gallery */}
                  <div className="hotel_gallery">
                    <div className="hotel_slider_container">
                      <div className="owl-carousel owl-theme hotel_slider">
                        {/* Hotel Gallery Slider Item */}
                        <div className="owl-item">
                          <a
                            className="colorbox cboxElement"
                            href="images/listing_1.jpg"
                          >
                            <img
                              src="images/listing_thumb_1.jpg"
                              alt="https://unsplash.com/@jbriscoe"
                            />
                          </a>
                        </div>
                        {/* Hotel Gallery Slider Item */}
                        <div className="owl-item">
                          <a
                            className="colorbox cboxElement"
                            href="images/listing_2.jpg"
                          >
                            <img
                              src="images/listing_thumb_2.jpg"
                              alt="https://unsplash.com/@grovemade"
                            />
                          </a>
                        </div>
                        {/* Hotel Gallery Slider Item */}
                        <div className="owl-item">
                          <a
                            className="colorbox cboxElement"
                            href="images/listing_3.jpg"
                          >
                            <img
                              src="images/listing_thumb_3.jpg"
                              alt="https://unsplash.com/@fransaraco"
                            />
                          </a>
                        </div>
                        {/* Hotel Gallery Slider Item */}
                        <div className="owl-item">
                          <a
                            className="colorbox cboxElement"
                            href="images/listing_4.jpg"
                          >
                            <img
                              src="images/listing_thumb_4.jpg"
                              alt="https://unsplash.com/@workweek"
                            />
                          </a>
                        </div>
                        {/* Hotel Gallery Slider Item */}
                        <div className="owl-item">
                          <a
                            className="colorbox cboxElement"
                            href="images/listing_5.jpg"
                          >
                            <img
                              src="images/listing_thumb_5.jpg"
                              alt="https://unsplash.com/@workweek"
                            />
                          </a>
                        </div>
                        {/* Hotel Gallery Slider Item */}
                        <div className="owl-item">
                          <a
                            className="colorbox cboxElement"
                            href="images/listing_6.jpg"
                          >
                            <img
                              src="images/listing_thumb_6.jpg"
                              alt="https://unsplash.com/@avidenov"
                            />
                          </a>
                        </div>
                        {/* Hotel Gallery Slider Item */}
                        <div className="owl-item">
                          <a
                            className="colorbox cboxElement"
                            href="images/listing_7.jpg"
                          >
                            <img
                              src="images/listing_thumb_7.jpg"
                              alt="https://unsplash.com/@pietruszka"
                            />
                          </a>
                        </div>
                        {/* Hotel Gallery Slider Item */}
                        <div className="owl-item">
                          <a
                            className="colorbox cboxElement"
                            href="images/listing_8.jpg"
                          >
                            <img
                              src="images/listing_thumb_8.jpg"
                              alt="https://unsplash.com/@rktkn"
                            />
                          </a>
                        </div>
                        {/* Hotel Gallery Slider Item */}
                        <div className="owl-item">
                          <a
                            className="colorbox cboxElement"
                            href="images/listing_9.jpg"
                          >
                            <img
                              src="images/listing_thumb_9.jpg"
                              alt="https://unsplash.com/@mindaugas"
                            />
                          </a>
                        </div>
                      </div>
                      {/* Hotel Slider Nav - Prev */}
                      <div className="hotel_slider_nav hotel_slider_prev">
                        <svg
                          version="1.1"
                          id="Layer_6"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          width="28px"
                          height="33px"
                          viewBox="0 0 28 33"
                          enableBackground="new 0 0 28 33"
                          xmlSpace="preserve"
                        >
                          <defs>
                            <linearGradient id="hotel_grad_prev">
                              <stop offset="0%" stopColor="#fa9e1b" />
                              <stop offset="100%" stopColor="#8d4fff" />
                            </linearGradient>
                          </defs>
                          <path
                            className="nav_path"
                            fill="#F3F6F9"
                            d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
											M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
											C22.545,2,26,5.541,26,9.909V23.091z"
                          />
                          <polygon
                            className="nav_arrow"
                            fill="#F3F6F9"
                            points="15.044,22.222 16.377,20.888 12.374,16.885 16.377,12.882 15.044,11.55 9.708,16.885 11.04,18.219 
											11.042,18.219 "
                          />
                        </svg>
                      </div>
                      {/* Hotel Slider Nav - Next */}
                      <div className="hotel_slider_nav hotel_slider_next">
                        <svg
                          version="1.1"
                          id="Layer_7"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          width="28px"
                          height="33px"
                          viewBox="0 0 28 33"
                          enableBackground="new 0 0 28 33"
                          xmlSpace="preserve"
                        >
                          <defs>
                            <linearGradient id="hotel_grad_next">
                              <stop offset="0%" stopColor="#fa9e1b" />
                              <stop offset="100%" stopColor="#8d4fff" />
                            </linearGradient>
                          </defs>
                          <path
                            className="nav_path"
                            fill="#F3F6F9"
                            d="M19,0H9C4.029,0,0,4.029,0,9v15c0,4.971,4.029,9,9,9h10c4.97,0,9-4.029,9-9V9C28,4.029,23.97,0,19,0z
										M26,23.091C26,27.459,22.545,31,18.285,31H9.714C5.454,31,2,27.459,2,23.091V9.909C2,5.541,5.454,2,9.714,2h8.571
										C22.545,2,26,5.541,26,9.909V23.091z"
                          />
                          <polygon
                            className="nav_arrow"
                            fill="#F3F6F9"
                            points="13.044,11.551 11.71,12.885 15.714,16.888 11.71,20.891 13.044,22.224 18.379,16.888 17.048,15.554 
										17.046,15.554 "
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Hotel Info Text */}
                  <div className="hotel_info_text">
                    <p>{information}</p>
                  </div>
                  {/* Hotel Info Tags */}
                  <div className="hotel_info_tags">
                    <ul className="hotel_icons_list">
                      <li className="hotel_icons_item">
                        <img src="images/post.png" alt="" />
                      </li>
                      <li className="hotel_icons_item">
                        <img src="images/compass.png" alt="" />
                      </li>
                      <li className="hotel_icons_item">
                        <img src="images/bicycle.png" alt="" />
                      </li>
                      <li className="hotel_icons_item">
                        <img src="images/sailboat.png" alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
