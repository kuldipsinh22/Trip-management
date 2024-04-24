import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* Footer Column */}
            <div className="col-lg-3 footer_column">
              <div className="footer_col">
                <div className="footer_content footer_about">
                  <div className="logo_container footer_logo">
                    <div className="logo">
                      <a href="#">
                        <img src="images/logo.png" alt="" />
                        Cheers Holidays
                      </a>
                    </div>
                  </div>
                  <p className="footer_about_text">
                    we provide tour packages like your budget and share with
                    family tour, friends group tour, solo trip, couple packages
                    etc... so how can i help you??? we make your holidays to
                    memorable so join us and enjoying your holidays and create
                    lots of memories...
                  </p>
                  <ul className="footer_social_list">
                    <li className="footer_social_item">
                      <a href="#">
                        <i className="fa fa-pinterest" />
                      </a>
                    </li>
                    <li className="footer_social_item">
                      <a href="#">
                        <i className="fa fa-facebook-f" />
                      </a>
                    </li>
                    <li className="footer_social_item">
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li className="footer_social_item">
                      <a href="#">
                        <i className="fa fa-youtube" />
                      </a>
                    </li>
                    <li className="footer_social_item">
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Footer Column */}
            <div className="col-lg-3 footer_column">
              <div className="footer_col">
                <div className="footer_title">blog posts</div>
                <div className="footer_content footer_blog">
                  {/* Footer blog item */}
                  <div className="footer_blog_item clearfix">
                    <div className="footer_blog_image">
                      <img
                        src="images/footer_blog_1.jpg"
                        alt="https://unsplash.com/@avidenov"
                      />
                    </div>
                    <div className="footer_blog_content">
                      <div className="footer_blog_title">
                        <a href="blog.html">Travel with us this year</a>
                      </div>
                      <div className="footer_blog_date">May 11, 2024</div>
                    </div>
                  </div>
                  {/* Footer blog item */}
                  <div className="footer_blog_item clearfix">
                    <div className="footer_blog_image">
                      <img
                        src="images/footer_blog_2.jpg"
                        alt="https://unsplash.com/@deannaritchie"
                      />
                    </div>
                    <div className="footer_blog_content">
                      <div className="footer_blog_title">
                        <a href="blog.html">New destinations for you</a>
                      </div>
                      <div className="footer_blog_date">May 11, 2024</div>
                    </div>
                  </div>
                  {/* Footer blog item */}
                  <div className="footer_blog_item clearfix">
                    <div className="footer_blog_image">
                      <img
                        src="images/footer_blog_3.jpg"
                        alt="https://unsplash.com/@bergeryap87"
                      />
                    </div>
                    <div className="footer_blog_content">
                      <div className="footer_blog_title">
                        <a href="blog.html">Travel with us this year</a>
                      </div>
                      <div className="footer_blog_date">May 11, 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Column */}
            <div className="col-lg-3 footer_column">
              <div className="footer_col">
                <div className="footer_title">tags</div>
                <div className="footer_content footer_tags">
                  <ul className="tags_list clearfix">
                    <li className="tag_item">
                      <a href="#">mountain</a>
                    </li>
                    <li className="tag_item">
                      <a href="#">rivers</a>
                    </li>
                    <li className="tag_item">
                      <a href="#">music</a>
                    </li>
                    <li className="tag_item">
                      <a href="#">video</a>
                    </li>
                    <li className="tag_item">
                      <a href="#">party</a>
                    </li>
                    <li className="tag_item">
                      <a href="#">photography</a>
                    </li>
                    <li className="tag_item">
                      <a href="#">adventure</a>
                    </li>
                    <li className="tag_item">
                      <a href="#">travel</a>
                    </li>
                    <li className="tag_item">
                      <a href="#">nature</a>
                    </li>
                    <li className="tag_item">
                      <a href="#">fun</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Footer Column */}
            <div className="col-lg-3 footer_column">
              <div className="footer_col">
                <div className="footer_title">contact info</div>
                <div className="footer_content footer_contact">
                  <ul className="contact_info_list">
                    <li className="contact_info_item d-flex flex-row">
                      <div>
                        <div className="contact_info_icon">
                          <img src="images/placeholder.svg" alt="" />
                        </div>
                      </div>
                      <div className="contact_info_text">
                        4127 Sardarnagar, Bhavnagar - 364001
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
                          cheersholidays@gmail.com
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
                        <a href="https://colorlib.com">
                          www.cheersholidays.com
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Copyright */}
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-lg-1 order-2  ">
              <div className="copyright_content d-flex flex-row align-items-center">
                <div>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved by Khushi's | This template is
                  <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Cheersholidays
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </div>
              </div>
            </div>
            <div className="col-lg-9 order-lg-2 order-1">
              <div className="footer_nav_container d-flex flex-row align-items-center justify-content-lg-end">
                <div className="footer_nav">
                  <ul className="footer_nav_list">
                    <li className="footer_nav_item">
                      <a href="#">home</a>
                    </li>
                    <li className="footer_nav_item">
                      <a href="about.html">about us</a>
                    </li>
                    <li className="footer_nav_item">
                      <a href="offers.html">packages</a>
                    </li>
                    <li className="footer_nav_item">
                      <a href="blog.html">blog</a>
                    </li>
                    <li className="footer_nav_item">
                      <a href="contact.html">contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
