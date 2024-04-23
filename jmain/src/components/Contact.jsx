import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Contact() {
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
                      value={user_name}
                    />
                    <input
                      type="text"
                      id="contact_form_email"
                      className="contact_form_email input_field"
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
                      className="form_submit_button button trans_200"
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
