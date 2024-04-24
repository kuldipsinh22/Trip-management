import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const [user_name, setuser_name] = useState("");
  const [user_email, setuser_email] = useState("");
  const [subject, setsubject] = useState("");
  const [question, setquestion] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [id, setAuth] = useState(sessionStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    console.log(id);
    if (id) {
      getUser();
    }
  }, []);

  const getUser = async () => {
    const url = "http://localhost:1100/nodejs/user/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setuser_name(res.data.user_name);
    setuser_email(res.data.user_email);
  };

  const validate = () => {
    const errors = {};
    if (!question) {
      errors.question = "question is required";
    }
    if (!subject) {
      errors.subject = "subject is required";
    }
    return errors;
  };

  const submitbtn = async (e) => {
    e.preventDefault();
    setFormErrors(validate());

    if (question && subject) {
      const data = {
        user_id: id,
        subject,
        question,
      };
      let res = "";

      res = await axios.post("http://localhost:1100/nodejs/inquirie", data);

      alert(res.data);
      window.location.reload();
    }
  };

  return (
    <>
      {/* Home */}
      <div className="home">
        {/* Home Slider */}
        <div className="home_slider_container">
          <div className="owl-carousel owl-theme home_slider">
            {/* Slider Item */}
            <div className="owl-item home_slider_item">
              {/* Image by https://unsplash.com/@anikindimitry */}
              <div
                className="home_slider_background"
                style={{ backgroundImage: "url(images/home_slider.jpg)" }}
              />
              <div className="home_slider_content text-center">
                <div
                  className="home_slider_content_inner"
                  data-animation-in="flipInX"
                  data-animation-out="animate-out fadeOut"
                >
                  <h1>discover</h1>
                  <h1>the world</h1>
                  <div className="button home_slider_button">
                    <div className="button_bcg" />
                    <Link to="/packages">
                      explore now
                      <span />
                      <span />
                      <span />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Slider Item */}
            <div className="owl-item home_slider_item">
              <div
                className="home_slider_background"
                style={{ backgroundImage: "url(images/home_slider.jpg)" }}
              />
              <div className="home_slider_content text-center">
                <div
                  className="home_slider_content_inner"
                  data-animation-in="flipInX"
                  data-animation-out="animate-out fadeOut"
                >
                  <h1>discover</h1>
                  <h1>the world</h1>
                  <div className="button home_slider_button">
                    <div className="button_bcg" />
                    <a href="#">
                      explore now
                      <span />
                      <span />
                      <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Slider Item */}
            <div className="owl-item home_slider_item">
              <div
                className="home_slider_background"
                style={{ backgroundImage: "url(images/home_slider.jpg)" }}
              />
              <div className="home_slider_content text-center">
                <div
                  className="home_slider_content_inner"
                  data-animation-in="flipInX"
                  data-animation-out="animate-out fadeOut"
                >
                  <h1>discover</h1>
                  <h1>the world</h1>
                  <div className="button home_slider_button">
                    <div className="button_bcg" />
                    <a href="#">
                      explore now
                      <span />
                      <span />
                      <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Home Slider Nav - Prev */}
          <div className="home_slider_nav home_slider_prev">
            <svg
              version="1.1"
              id="Layer_2"
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
                <linearGradient id="home_grad_prev">
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
          {/* Home Slider Nav - Next */}
          <div className="home_slider_nav home_slider_next">
            <svg
              version="1.1"
              id="Layer_3"
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
                <linearGradient id="home_grad_next">
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
          {/* Home Slider Dots */}
          <div className="home_slider_dots">
            <ul
              id="home_slider_custom_dots"
              className="home_slider_custom_dots"
            >
              <li className="home_slider_custom_dot active">
                <div />
                01.
              </li>
              <li className="home_slider_custom_dot">
                <div />
                02.
              </li>
              <li className="home_slider_custom_dot">
                <div />
                03.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="intro" style={{ marginTop: "100px" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="intro_title text-center">
                We have the best tours
              </h2>
            </div>
          </div>
          x``{" "}
        </div>
      </div>
      {/* CTA */}
      <div className="cta">
        {/* Image by https://unsplash.com/@thanni */}
        <div
          className="cta_background"
          style={{ backgroundImage: "url(images/cta.jpg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col">
              {/* CTA Slider */}
              <div className="cta_slider_container">
                <div className="owl-carousel owl-theme cta_slider">
                  {/* CTA Slider Item */}
                  <div className="owl-item cta_item text-center">
                    <div className="cta_title">maldives deluxe package</div>
                    <div className="rating_r rating_r_4">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <p className="cta_text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam eu convallis tortor. Suspendisse potenti. In
                      faucibus massa arcu, vitae cursus mi hendrerit nec. Proin
                      bibendum, augue faucibus tincidunt ultrices, tortor augue
                      gravida lectus, et efficitur enim justo vel ligula.
                    </p>
                    <div className="button cta_button">
                      <div className="button_bcg" />
                      <a href="#">
                        book now
                        <span />
                        <span />
                        <span />
                      </a>
                    </div>
                  </div>
                  {/* CTA Slider Item */}
                  <div className="owl-item cta_item text-center">
                    <div className="cta_title">maldives deluxe package</div>
                    <div className="rating_r rating_r_4">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <p className="cta_text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam eu convallis tortor. Suspendisse potenti. In
                      faucibus massa arcu, vitae cursus mi hendrerit nec. Proin
                      bibendum, augue faucibus tincidunt ultrices, tortor augue
                      gravida lectus, et efficitur enim justo vel ligula.
                    </p>
                    <div className="button cta_button">
                      <div className="button_bcg" />
                      <a href="#">
                        book now
                        <span />
                        <span />
                        <span />
                      </a>
                    </div>
                  </div>
                  {/* CTA Slider Item */}
                  <div className="owl-item cta_item text-center">
                    <div className="cta_title">maldives deluxe package</div>
                    <div className="rating_r rating_r_4">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <p className="cta_text">
                      Maldives is the best package for couple package, mostly
                      couple select the package for thair honeymoon. maldives
                      are most atractive place..
                    </p>
                  </div>
                </div>
                {/* CTA Slider Nav - Prev */}
                <div className="cta_slider_nav cta_slider_prev">
                  <svg
                    version="1.1"
                    id="Layer_4"
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
                      <linearGradient id="cta_grad_prev">
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
                {/* CTA Slider Nav - Next */}
                <div className="cta_slider_nav cta_slider_next">
                  <svg
                    version="1.1"
                    id="Layer_5"
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
                      <linearGradient id="cta_grad_next">
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
          </div>
        </div>
      </div>
      {/* Offers */}
      <div className="offers">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="section_title">the best offers with rooms</h2>
            </div>
          </div>
          <div className="row offers_items">
            {/* Offers Item */}
            <div className="col-lg-6 offers_col">
              <div className="offers_item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="offers_image_container">
                      {/* Image by https://unsplash.com/@kensuarez */}
                      <div
                        className="offers_image_background"
                        style={{ backgroundImage: "url(images/offer_1.jpg)" }}
                      />
                      <div className="offer_name">
                        <a href="#">hotel krishna</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="offers_content">
                      <div className="offers_price">
                        rs.2000<span>per night</span>
                      </div>
                      <div className="rating_r rating_r_4 offers_rating">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                      <p className="offers_text">
                        Suspendisse potenti. In faucibus massa. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Nullam eu
                        convallis tortor.
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
                      <div className="offers_link">
                        <a href="offers.html">read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Offers Item */}
            <div className="col-lg-6 offers_col">
              <div className="offers_item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="offers_image_container">
                      {/* Image by Egzon Bytyqi */}
                      <div
                        className="offers_image_background"
                        style={{ backgroundImage: "url(images/offer_2.jpg)" }}
                      />
                      <div className="offer_name">
                        <a href="#">drive hills</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="offers_content">
                      <div className="offers_price">
                        rs.1500<span>per night</span>
                      </div>
                      <div className="rating_r rating_r_4 offers_rating">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                      <p className="offers_text">
                        Suspendisse potenti. In faucibus massa. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Nullam eu
                        convallis tortor.
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
                      <div className="offers_link">
                        <a href="offers.html">read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Offers Item */}
            <div className="col-lg-6 offers_col">
              <div className="offers_item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="offers_image_container">
                      {/* Image by https://unsplash.com/@nevenkrcmarek */}
                      <div
                        className="offers_image_background"
                        style={{ backgroundImage: "url(images/offer_3.jpg)" }}
                      />
                      <div className="offer_name">
                        <a href="#">dream villa</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="offers_content">
                      <div className="offers_price">
                        Rs.900<span>per night</span>
                      </div>
                      <div className="rating_r rating_r_4 offers_rating">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                      <p className="offers_text">
                        Suspendisse potenti. In faucibus massa. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Nullam eu
                        convallis tortor.
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
                      <div className="offers_link">
                        <a href="offers.html">read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Offers Item */}
            <div className="col-lg-6 offers_col">
              <div className="offers_item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="offers_image_container">
                      {/* Image by https://unsplash.com/@mantashesthaven */}
                      <div
                        className="offers_image_background"
                        style={{ backgroundImage: "url(images/offer_4.jpg)" }}
                      />
                      <div className="offer_name">
                        <a href="#">travel light</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="offers_content">
                      <div className="offers_price">
                        rs.3000<span>per night</span>
                      </div>
                      <div className="rating_r rating_r_4 offers_rating">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                      <p className="offers_text">
                        Suspendisse potenti. In faucibus massa. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Nullam eu
                        convallis tortor.
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
                      <div className="offers_link">
                        <a href="offers.html">read more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}

      <div className="contact">
        <div
          className="contact_background"
          style={{ backgroundImage: "url(images/contact.png)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="contact_image"></div>
            </div>
            <div className="col-lg-7">
              <div className="contact_form_container">
                <div className="contact_title">get in touch</div>
                <form action="#" id="contact_form" className="contact_form">
                  <input
                    type="text"
                    id="contact_form_name"
                    className="contact_form_name input_field"
                    placeholder="Name"
                    value={user_name}
                  />
                  <input
                    type="text"
                    id="contact_form_email"
                    className="contact_form_email input_field"
                    placeholder="E-mail"
                    required="required"
                    value={user_email}
                  />
                  <input
                    type="text"
                    id="contact_form_subject"
                    className="contact_form_subject input_field"
                    placeholder="Subject"
                    onChange={(e) => setsubject(e.target.value)}
                  />
                  <p style={{ color: "red" }}>{formErrors.subject}</p>
                  <textarea
                    id="contact_form_message"
                    className="text_field contact_form_message"
                    name="message"
                    rows={4}
                    placeholder="Message"
                    onChange={(e) => setquestion(e.target.value)}
                  />
                  <p style={{ color: "red" }}>{formErrors.question}</p>
                  <button
                    type="submit"
                    id="form_submit_button"
                    className="form_submit_button button"
                    onClick={submitbtn}
                  >
                    send message
                    <span />
                    <span />
                    <span />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
