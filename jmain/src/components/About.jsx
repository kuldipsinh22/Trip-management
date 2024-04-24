import React from "react";

export default function About() {
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
          <div className="home_title">about us</div>
        </div>
      </div>
      {/* Intro */}
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="intro_image">
                <img src="images/intro.png" alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="intro_content">
                <div className="intro_title">we have the best tours</div>
                <p className="intro_text">
                  Cheers Holidays Tour Company,Founded in 2023.Welcome To Cheers
                  Holidays. Cheers Holidays a Tourisam management company with a
                  difference! What makes us different?What makes us special? we
                  offer customized holidays and packages, the way you want!
                  right from the duration of stay to the transportation.it is
                  all specially designed to suit your needs & fulfilyour
                  desires. we are provide best Tour Packages.we make a
                  commitment of superior and back it up with an in-house team
                  that ensure your trip is smooth & well planned from arrival to
                  departure and monitor your tour round the clock to make it
                  comfortable & enjoyable. our aim is to produce such product
                  which not only liked by people but is lived by the people,
                  i.e.we want you to live every moment when you are on your
                  holidays. we want to make you feel as you are on the top of
                  the world having attained all the happiness of life. our
                  motive is to give you maximum enjoyment from your investment
                  and giving you optimum exposure of the places for destination
                  you have selected, so that we make your holidays memorable. to
                  know more,you can connect with us via any of the following
                  mediums. wish you a safe and happy journey!
                </p>
                <div className="button intro_button">
                  <div className="button_bcg">
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
        </div>
      </div>
      {/* Stats */}
      <div className="stats">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title">years statistics</div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center">
              <p className="stats_text">
                Cheers holidays tour is best tour of the year our website
                through many peoples are enjoying their holidays we provide many
                facilities and our tour agency are provide many more packages
                with pockets friendly and user demand to provide packages.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="stats_years">
                <div className="stats_years_last">2016</div>
                <div className="stats_years_new float-right">2017</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="stats_contents">
                {/* Stats Item */}
                <div className="stats_item d-flex flex-md-row flex-column clearfix">
                  <div className="stats_last order-md-1 order-3">
                    <div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
                      <img src="images/stats_1.png" alt="" />
                    </div>
                    <div className="stats_last_content">
                      <div className="stats_number">1642</div>
                      <div className="stats_type">Clients</div>
                    </div>
                  </div>
                  <div
                    className="stats_bar order-md-2 order-2"
                    data-x={1642}
                    data-y={3527}
                    data-color="#31124b"
                  >
                    <div className="stats_bar_perc">
                      <div>
                        <div className="stats_bar_value" />
                      </div>
                    </div>
                  </div>
                  <div className="stats_new order-md-3 order-1 text-right">
                    <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                      <img src="images/stats_1.png" alt="" />
                    </div>
                    <div className="stats_new_content">
                      <div className="stats_number">3527</div>
                      <div className="stats_type">Clients</div>
                    </div>
                  </div>
                </div>
                {/* Stats Item */}
                <div className="stats_item d-flex flex-md-row flex-column clearfix">
                  <div className="stats_last order-md-1 order-3">
                    <div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
                      <img src="images/stats_2.png" alt="" />
                    </div>
                    <div className="stats_last_content">
                      <div className="stats_number">768</div>
                      <div className="stats_type">Returning Clients</div>
                    </div>
                  </div>
                  <div
                    className="stats_bar order-md-2 order-2"
                    data-x={768}
                    data-y={145}
                    data-color="#a95ce4"
                  >
                    <div className="stats_bar_perc">
                      <div>
                        <div className="stats_bar_value" />
                      </div>
                    </div>
                  </div>
                  <div className="stats_new order-md-3 order-1 text-right">
                    <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                      <img src="images/stats_2.png" alt="" />
                    </div>
                    <div className="stats_new_content">
                      <div className="stats_number">145</div>
                      <div className="stats_type">Returning Clients</div>
                    </div>
                  </div>
                </div>
                {/* Stats Item */}
                <div className="stats_item d-flex flex-md-row flex-column clearfix">
                  <div className="stats_last order-md-1 order-3">
                    <div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
                      <img src="images/stats_3.png" alt="" />
                    </div>
                    <div className="stats_last_content">
                      <div className="stats_number">11546</div>
                      <div className="stats_type">Reach</div>
                    </div>
                  </div>
                  <div
                    className="stats_bar order-md-2 order-2"
                    data-x={11546}
                    data-y={9321}
                    data-color="#fa6f1b"
                  >
                    <div className="stats_bar_perc">
                      <div>
                        <div className="stats_bar_value" />
                      </div>
                    </div>
                  </div>
                  <div className="stats_new order-md-3 order-1 text-right">
                    <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                      <img src="images/stats_3.png" alt="" />
                    </div>
                    <div className="stats_new_content">
                      <div className="stats_number">9321</div>
                      <div className="stats_type">Reach</div>
                    </div>
                  </div>
                </div>
                {/* Stats Item */}
                <div className="stats_item d-flex flex-md-row flex-column clearfix">
                  <div className="stats_last order-md-1 order-3">
                    <div className="stats_last_icon d-flex flex-column align-items-center justify-content-end">
                      <img src="images/stats_4.png" alt="" />
                    </div>
                    <div className="stats_last_content">
                      <div className="stats_number">3729</div>
                      <div className="stats_type">Items</div>
                    </div>
                  </div>
                  <div
                    className="stats_bar order-md-2 order-2"
                    data-x={3729}
                    data-y={17429}
                    data-color="#fa9e1b"
                  >
                    <div className="stats_bar_perc">
                      <div>
                        <div className="stats_bar_value" />
                      </div>
                    </div>
                  </div>
                  <div className="stats_new order-md-3 order-1 text-right">
                    <div className="stats_new_icon d-flex flex-column align-items-center justify-content-end">
                      <img src="images/stats_4.png" alt="" />
                    </div>
                    <div className="stats_new_content">
                      <div className="stats_number">17429</div>
                      <div className="stats_type">More Items</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add */}

      {/* Milestones */}
      <div className="milestones">
        <div className="container">
          <div className="row">
            {/* Milestone */}
            <div className="col-lg-3 milestone_col">
              <div className="milestone text-center">
                <div className="milestone_icon">
                  <img src="images/milestone_1.png" alt="" />
                </div>
                <div className="milestone_counter" data-end-value={255}>
                  3527+
                </div>
                <div className="milestone_text">Clients</div>
              </div>
            </div>
            {/* Milestone */}
            <div className="col-lg-3 milestone_col">
              <div className="milestone text-center">
                <div className="milestone_icon">
                  <img src="images/milestone_2.png" alt="" />
                </div>
                <div className="milestone_counter" data-end-value={1176}>
                  20+
                </div>
                <div className="milestone_text">Agency</div>
              </div>
            </div>
            {/* Milestone */}
            <div className="col-lg-3 milestone_col">
              <div className="milestone text-center">
                <div className="milestone_icon">
                  <img src="images/milestone_3.png" alt="" />
                </div>
                <div className="milestone_counter" data-end-value={39}>
                  7
                </div>
                <div className="milestone_text">Countries</div>
              </div>
            </div>
            {/* Milestone */}
            <div className="col-lg-3 milestone_col">
              <div className="milestone text-center">
                <div className="milestone_icon">
                  <img src="images/milestone_4.png" alt="" />
                </div>
                <div className="milestone_counter" data-end-value={127}>
                  30+
                </div>
                <div className="milestone_text">Guides</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
