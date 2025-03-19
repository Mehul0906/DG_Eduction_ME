import React, { useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Course() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="home_area home_page_img course_page_img">
        <div className="about_home">
          <h1 className="about_us" data-aos="zoom-in" data-aos-duration="500">
            Courses
          </h1>
        </div>
      </div>

      <section className="services_section">
        <div className="container">
          <div className="services_title offer_title"></div>
          <div className="services_card">
            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="/advance_digital">
                <div className="services_img7">
                  <img src="./img/Digital-Marketing.png" alt="" />
                </div>
                <div className="card_details">
                  <h5>Advance Digital Marketing</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link Link to="/artificial_intelligence">
                <div className="services_img9">
                  <img
                    src="./img/artificial-intelligence.png"
                    alt=""
                    
                  />
                </div>
                <div className="card_details">
                  <h5>Artificial Intelligence</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link Link to="/graphics">
                <div className="services_img2">
                  <img
                    src="./img/graphic-design.png"
                    alt=""
                    className="img_graphic-design"
                  />
                </div>
                <div className="card_details">
                  <h5>Graphics Design</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link Link to="/full_stack">
                <div className="services_img">
                  <img src="./img/web-development.png" alt="" />
                </div>
                <div className="card_details">
                  <h5>Web Development</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link Link to="/social_media">
              <div className="services_img8">
                  <img src="./img/influencer.png" alt="" />
                </div>
                <div className="card_details">
                  <h5>Social Media Influencer</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link Link to="/flutter">
                <div className="services_img4">
                  <img
                    src="./img/App-Development.png"
                    alt=""
                    className="img_App-Development"
                  />
                </div>
                <div className="card_details">
                  <h5>Flutter</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Course;
