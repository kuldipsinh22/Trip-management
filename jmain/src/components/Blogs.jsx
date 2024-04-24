import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Blogs() {
  const [Highlight, setHighlight] = useState([]);
  let i = 1;
  useEffect(() => {
    getHighlight();
  }, []);

  const getHighlight = async () => {
    const res = await axios.get("http://localhost:1100/nodejs/highlight");
    i++;
    setHighlight(res.data);
    console.log(res.data);
  };

  return (
    <>
      {/* Home */}
      <div className="home">
        <div
          className="home_background parallax-window"
          data-parallax="scroll"
          // data-image-src="images/blog_background.jpg"
          style={{ backgroundImage: "url(images/blog_background.jpg)" }}
        />
        <div className="home_content">
          <div className="home_title">the blog</div>
        </div>
      </div>
      {/* Blog */}
      <div className="blog">
        <div className="container">
          <div className="row">
            {/* Blog Content */}
            <div className="col-lg-12">
              <div className="blog_post_container">
                {/* Blog Post */}
                {Highlight.map((Highlight) => (
                  <div className="blog_post">
                    <div className="blog_post_image">
                      <img
                        src={`http://localhost:1100/upload/${Highlight.img}`}
                        alt="https://unsplash.com/@tschax"
                        height={300}
                        width={300}
                        style={{ objectFit: "cover" }}
                      />
                      <div className="blog_post_date d-flex flex-column align-items-center justify-content-center">
                        <div className="blog_post_day">{i++}</div>
                      </div>
                    </div>
                    <div className="blog_post_meta"></div>
                    <div className="blog_post_title">
                      <a href="#">{Highlight.place_name}</a>
                    </div>
                    <div className="blog_post_text">
                      <p>{Highlight.description}</p>
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
