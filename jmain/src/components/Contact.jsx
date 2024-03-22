import React from "react";

export default function Contact() {
  return (
    <div>
      <>
        {/* Home */}
        <div className="home">
          <div
            className="home_background parallax-window"
            data-parallax="scroll"
            data-image-src="images/contact_background.jpg"
          />
          <div className="home_content">
            <div className="home_title">contact</div>
          </div>
        </div>
        {/* Contact */}
        <div className="contact_form_section">
          <div className="container">
            <div className="row">
              <div className="col">
                {/* Contact Form */}
                <div className="contact_form_container">
                  <div className="contact_title text-center">get in touch</div>
                  <form
                    action="#"
                    id="contact_form"
                    className="contact_form text-center"
                  >
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Name"
                      required="required"
                      data-error="Name is required."
                    />
                    <input
                      type="text"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="E-mail"
                      required="required"
                      data-error="Email is required."
                    />
                    <input
                      type="text"
                      id="contact_form_subject"
                      className="contact_form_subject input_field"
                      placeholder="Subject"
                      required="required"
                      data-error="Subject is required."
                    />
                    <textarea
                      id="contact_form_message"
                      className="text_field contact_form_message"
                      name="message"
                      rows={4}
                      placeholder="Message"
                      required="required"
                      data-error="Please, write us a message."
                      defaultValue={""}
                    />
                    <button
                      type="submit"
                      id="form_submit_button"
                      className="form_submit_button button trans_200"
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
        <div className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                {/* About - Image */}
                <div className="about_image">
                  <img src="images/man.png" alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                {/* About - Content */}
                <div className="about_content">
                  <div className="logo_container about_logo">
                    <div className="logo">
                      <a href="#">
                        <img src="images/logo.png" alt="" />
                        travelix
                      </a>
                    </div>
                  </div>
                  <p className="about_text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc
                    et suscipit urna. Integer eleme ntum orci eu vehicula
                    iaculis consequat nisl. Nunc et suscipit urna pretium.
                  </p>
                  <ul className="about_social_list">
                    <li className="about_social_item">
                      <a href="#">
                        <i className="fa fa-pinterest" />
                      </a>
                    </li>
                    <li className="about_social_item">
                      <a href="#">
                        <i className="fa fa-facebook-f" />
                      </a>
                    </li>
                    <li className="about_social_item">
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="about_social_item">
                      <a href="#">
                        <i className="fa fa-dribbble" />
                      </a>
                    </li>
                    <li className="about_social_item">
                      <a href="#">
                        <i className="fa fa-behance" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                {/* About Info */}
                <div className="about_info">
                  <ul className="contact_info_list">
                    <li className="contact_info_item d-flex flex-row">
                      <div>
                        <div className="contact_info_icon">
                          <img src="images/placeholder.svg" alt="" />
                        </div>
                      </div>
                      <div className="contact_info_text">
                        4127 Raoul Wallenber 45b-c Gibraltar
                      </div>
                    </li>
                    <li className="contact_info_item d-flex flex-row">
                      <div>
                        <div className="contact_info_icon">
                          <img src="images/phone-call.svg" alt="" />
                        </div>
                      </div>
                      <div className="contact_info_text">2556-808-8613</div>
                    </li>
                    <li className="contact_info_item d-flex flex-row">
                      <div>
                        <div className="contact_info_icon">
                          <img src="images/message.svg" alt="" />
                        </div>
                      </div>
                      <div className="contact_info_text">
                        <a
                          href="mailto:contactme@gmail.com?Subject=Hello"
                          target="_top"
                        >
                          contactme@gmail.com
                        </a>
                      </div>
                    </li>
                    <li className="contact_info_item d-flex flex-row">
                      <div>
                        <div className="contact_info_icon">
                          <img src="images/planet-earth.svg" alt="" />
                        </div>
                      </div>
                      <div className="contact_info_text">
                        <a href="https://colorlib.com">www.colorlib.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
