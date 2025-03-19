import React, { useEffect } from "react";
import Footer from "../Footer";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Full_stack() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="home_area home_page_img">
        <div className="about_home">
          <h1 className="about_us" data-aos="zoom-in" data-aos-duration="500">
            Graduation in Multimedia Skills
          </h1>
        </div>
      </div>
      <section className="course_section">
        <div className="container">
          <div className="about_row">
            <div
              className="about_img"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <img
                src="./img/GIMS SECOND IMAGE.webp"
                alt=""
                style={{ height: "420px", width: "420px" }}
              />
            </div>
            <div
              className="about_details"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <h2>Graduation in Multimedia Skills</h2>
              <p style={{ textAlign: "justify" }}>
                At GIMS, our multimedia graduation marks the beginning of a
                creative journey—where passion meets digital expertise.
              </p>
              <div className="course_button">
                <button>
                  Course Duration <span>14 Months</span>
                </button>
                <button>
                  Daily Time <span>2 Hours</span>
                </button>
              </div>
              <div className="include_course">
                <h5>Included In This Course:</h5>
                <ul>
                  <li>
                    <FaCheck />
                    Job Support
                  </li>
                  <li>
                    <FaCheck />
                    Rich Learning Content
                  </li>
                  <li>
                    <FaCheck />
                    Taught by Experienced Prof.
                  </li>
                  <li>
                    <FaCheck />
                    Industry Oriented Projects
                  </li>
                </ul>
              </div>
              <Link to="https://wa.me/9104790039" target="_blank">
                <button className="button">Inquiry Now</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="courses_icon">
        <div className="container">
          <ul className="courses_icon_img">
            <li data-aos="fade-up" data-aos-duration="3000">
              <img src="./img/photoshop.png" alt="" />
              <p>Photoshop</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="3000">
              <img src="./img/illustrator.png" alt="" />
              <p>Illustrator</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="3000">
              <img src="./img/coreldraw.jpeg" alt="" />
              <p>Coreldraw</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="3000">
              <img src="./img/figma.jpg" alt="" />
              <p>Figma</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="3000">
              <img src="./img/after-effects.png" alt="" />
              <p>After Effect</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="3000">
              <img src="./img/premiere-pro.png" alt="" />
              <p>Premiere Pro</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="3000">
              <img src="./img/DR.png" alt="" />
              <p>Davinci Resolve</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="3000">
              <img src="./img/AU.png" alt="" />
              <p>Adobe Audition</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="3000">
              <img src="./img/Html.png" alt="" />
              <p>HTML5</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="3000">
              <img src="./img/css.jpg" alt="" />
              <p>CSS3</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="3000">
              <img src="./img/bootstrap.png" alt="" />
              <p>Bootstrap</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="3000">
              <img src="./img/instagram.png" alt="" />
              <p>Instagram</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="3000">
              <img src="./img/facebook.png" alt="" />
              <p>Facebook</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="3000">
              <img src="./img/google.png" alt="" />
              <p>Google</p>
            </li>
            <li data-aos="fade-up" data-aos-duration="3000">
              <img src="./img/linkedin Img.png" alt="" />
              <p>Linkedin</p>
            </li>
          </ul>
        </div>
      </section>
      <section
        className="subject_section"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="offer_title course_module_title">
            <h2>Course Modules</h2>
          </div>
          <div class="accordion" id="accordionExample">
            {/* GIMS */}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  GIMS
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    {" "}
                    <FaRegCircleCheck /> Learn Basic Digital Marketing
                  </p>
                  <p>
                    <FaRegCircleCheck /> Learn Basic Graphics & UI-UX Design
                  </p>
                  <p>
                    {" "}
                    <FaRegCircleCheck /> Learn Basic Video Editing{" "}
                  </p>
                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    Learn Basic Full Stack Development{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* Examination */}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Examination
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    Theoretical Examination
                  </p>
                  <p>
                    <FaRegCircleCheck /> Practical Skills Assessment
                  </p>
                </div>
              </div>
            </div>
         
            {/* Master in Digital Marketing */}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsethree"
                  aria-expanded="false"
                  aria-controls="collapsethree"
                >
                  Master in Advance Digital Marketing
                </button>
              </h2>
              <div
                id="collapsethree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    Introduction To Digital Marketing{" "}
                  </p>

                  <p>
                    <FaRegCircleCheck /> Benefits Of Digital Marketing{" "}
                  </p>
                  <p>
                    <FaRegCircleCheck />
                    Comparing Digital And Traditional Marketing
                  </p>

                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    Digital MarketingProcess in Details{" "}
                  </p>

                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    Types of visibility{" "}
                  </p>

                  <p>
                    <FaRegCircleCheck />
                    Increasing Visibility{" "}
                  </p>
                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    Visitors Engagement {" "}
                  </p><p>
                    {" "}
                    <FaRegCircleCheck />
                    Bringing Targeted Traffic {" "}
                  </p><p>
                    {" "}
                    <FaRegCircleCheck />
                    Converting Traffic into Leads {" "}
                  </p><p>
                    {" "}
                    <FaRegCircleCheck />
                    Conversion Types{" "}
                  </p><p>
                    {" "}
                    <FaRegCircleCheck />
                     ConversionProcess{" "}
                  </p>
                  
                </div>
              </div>
            </div>


            {/* Master in Graphics & UI-UX Design */}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefour"
                  aria-expanded="false"
                  aria-controls="collapsefour"
                >
                  Master in Graphics & UI-UX Design
                </button>
              </h2>
              <div
                id="collapsefour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    Photoshop{" "}
                  </p>

                  <p>
                    <FaRegCircleCheck /> Illustrator{" "}
                  </p>
                  <p>
                    <FaRegCircleCheck />
                    Figma
                  </p>

                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    Coraldraw{" "}
                  </p>

                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    After Effect{" "}
                  </p>

                  <p>
                    <FaRegCircleCheck />
                    Indesign{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* Master in Video Editing */}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsefive"
                  aria-expanded="false"
                  aria-controls="collapsefive"
                >
                  Master in Video Editing
                </button>
              </h2>
              <div
                id="collapsefive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    Introduction to Video Editing{" "}
                  </p>

                  <p>
                    <FaRegCircleCheck /> Software Fundamentals{" "}
                  </p>
                  <p>
                    <FaRegCircleCheck />
                    Editing Techniques & Workflow
                  </p>

                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    Transitions & Effects{" "}
                  </p>

                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    Color Correction & Grading{" "}
                  </p>

                  <p>
                    <FaRegCircleCheck />
                    Audio Editing & Sound Design{" "}
                  </p>

                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    Titles & Graphics Integration{" "}
                  </p>

                  <p>
                    {" "}
                    <FaRegCircleCheck /> Advanced Editing Techniques{" "}
                  </p>

                  <p>
                    <FaRegCircleCheck /> Project Management & Exporting
                  </p>

                  <p>
                    <FaRegCircleCheck /> Capstone Project{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* Master in Full Stack Development Course */}
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsesix"
                  aria-expanded="false"
                  aria-controls="collapsesix"
                >
                  Master in Full Stack Development Course
                </button>
              </h2>
              <div
                id="collapsesix"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    HTML{" "}
                  </p>

                  <p>
                    <FaRegCircleCheck /> CSS{" "}
                  </p>
                  <p>
                    <FaRegCircleCheck />
                    Bootstrap
                  </p>

                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    Javascript{" "}
                  </p>

                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    React JS{" "}
                  </p>

                  <p>
                    <FaRegCircleCheck />
                    Node JS{" "}
                  </p>

                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    MongoDB{" "}
                  </p>

                  <p>
                    {" "}
                    <FaRegCircleCheck />
                    Express{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Full_stack;
