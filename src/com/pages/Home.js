// #132f54
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { FaUsers } from "react-icons/fa";
import { PiBank, PiDesktopTowerBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { GiPencilBrush } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import Trending_Courses from "./Trending_Courses";
import { Link } from "react-router-dom";
import Company_partner from "./Company_partner";
import { FaLongArrowAltRight } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
import $ from "jquery";
import "magnific-popup/dist/magnific-popup.css";
import "magnific-popup";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
import { FaUserGraduate } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaLaptop } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const options = {
    items: 1,
    loop: true,
    margin: 20,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 4000,
    // autoplaySpeed: 3000,
    autoplayHoverPause: false,
    // animateOut:'slideOutUp',
    nav: false,
    dots: true,
    margin: 0,
    responsive: {
      1100: {
        items: 1,
      },
      724: {
        items: 1,
      },
      500: {
        items: 1,
      },
      370: {
        items: 1,
        // innerWidth: "100%",
        // outerWidth: "100%",
      },
      220: {
        items: 1,
      },
    },
  };

  const options1 = {
    items: 1,
    loop: true,
    margin: 20,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 4000,
    // autoplaySpeed: 3000,
    autoplayHoverPause: false,
    // animateOut:'slideOutUp',
    nav: true,
    dots: false,
    margin: 0,
    responsive: {
      1100: {
        items: 1,
      },
      724: {
        items: 1,
      },
      500: {
        items: 1,
      },
      370: {
        items: 1,
        // innerWidth: "100%",
        // outerWidth: "100%",
      },
      220: {
        items: 1,
      },
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    $(".popup-link").magnificPopup({
      type: "image",
      gallery: { enabled: true },
    });
  }, []);
  const images = [
    "./img/user1.jpeg",
    "./img/user2.jpeg",
    "./img/user3.jpeg",
    "./img/user4.jpeg",
  ];

  const reviews = [
    { id: 1, text: "Great product!", author: "John Doe" },
    { id: 2, text: "Loved the service!", author: "Jane Smith" },
    { id: 3, text: "Highly recommend!", author: "Mike Johnson" },
    { id: 4, text: "Amazing experience!", author: "Sarah Lee" },
    { id: 5, text: "Fantastic quality!", author: "Emily Clark" },
    { id: 6, text: "Will buy again!", author: "Robert Brown" },
  ];

  return (
    <>
      {/*------------------Hero-Section-Slider----------------*/}
      <section className="herosection">
        <div
          className="container-fluid w-100 p-0 h-100 herosection_slider" 
          
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
            style={{ width: "100%" }}
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="./img/GIMS-Hero-Section.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="./img/Full Stack Developer-Banner-Hero-Section.jpg "
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="./img/Graphic Design-Hero-Section.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="./img/Video Editing Hero-Section.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="./img/Advanced Digital Marketing Hero-Section.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* ------------------Our Courses---------------- */}
      <section className="services_section">
        <div className="container">
          <div
            className="services_title offer_title"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h2>Our Courses For Your Bright Future</h2>
          </div>
          <div className="services_card">
            <div
              className="services_card_details"
              id="services_card_Main"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="/">
                <div className="services_img9">
                  <img
                    src="./img/video-editing.png"
                    alt=""
                    style={{ marginTop: "5px" }}
                  />
                </div>
                <div className="card_details">
                  <h5>Video Editing</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="backend">
                <div className="services_img3">
                  <img
                    src="./img/web-development.png"
                    alt=""
                    className="img_web-development"
                  />
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
              <Link to="fronted">
                <div className="services_img">
                  <img src="./img/web-design.png" alt="Img Not Suppotted" />
                </div>
                <div className="card_details">
                  <h5>Web Design</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="graphics">
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
              <Link to="ui_ux">
                <div className="services_img6">
                  <img src="./img/Ui-Ux design.png" alt="" className="img_App-Development"/>
                </div>
                <div className="card_details">
                  <h5>Ui-Ux Design</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="flutter">
                <div className="services_img4">
                  <img
                    src="./img/App-Development.png"
                    alt=""
                    className="img_App-Development"
                  />
                </div>
                <div className="card_details">
                  <h5>App Development</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              id="Web-design"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="advance_digital">
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
              <Link to="2d_animation">
                <div className="services_img8">
                  <img src="./img/2D-Animation.png" alt="" />
                </div>
                <div className="card_details">
                  <h5>2d Animation</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="3d_animation">
                <div className="services_img10">
                  <img
                    src="./img/3d-movie.png"
                    alt=""
                    style={{ marginTop: "10px" }}
                  />
                </div>
                <div className="card_details">
                  <h5>3D Animation</h5>
                </div>
              </Link>
            </div>

            <div
              className="services_card_details"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Link to="/">
                <div className="services_img9">
                  <img
                    src="./img/tally accounting .png"
                    alt=""
                    style={{ marginTop: "5px" }}
                  />
                </div>
                <div className="card_details">
                  <h5>Tally Accounting </h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------About-Section---------------- */}
      <section className="About-Section mt-5">
        <div className="container">
          <div className="about_row">
            <div
              className="about_img"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <img src="./img/About-Image.png" alt="" className="img-about" />
            </div>
            <div className="about_details">
              <h2>About DG Multimedia Education Institute</h2>
              <p style={{ textAlign: "justify" }}>
                DG Multimedia is a cutting-edge digital education institute
                built for today’s online, technology-driven world. We offer
                government-approved, skill-based courses that empower students
                with deep, practical knowledge, ensuring they stay ahead in the
                fast-evolving digital landscape. Our innovative curriculum is
                designed to bridge the digital divide, providing every learner
                with the expertise needed to thrive in their careers and
                transform their lives.
              </p>
              <p style={{ textAlign: "justify" }}>
                Join us at DG Multimedia, where education meets digital
                excellence and every student is prepared for a future of endless
                possibilities.
              </p>
              <Link to="about">
                {" "}
                <button className="button">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------2 Side Images-Section---------------- */}
      <section
        class="container mt-5"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {/* <!-- Entrepreneurship Training --> */}
        <div
          class="row align-items-center mb-5 bg-white p-4 shadow rounded"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div class="col-md-6">
            <h3 class="fw-bold" style={{ marginLeft: "4%", color: "#132f54" }}>
              ENTREPRENEURSHIP <span class="highlight">TRAINING</span>
            </h3>
            <hr class="divider"></hr>
            <ul class="list-unstyled Two-Side-Point">
              <li class="custom-bullet">Field-Oriented Training</li>
              <li class="custom-bullet">Industry-Relevant Skills</li>
              <li class="custom-bullet">Project-Based Training</li>
              <li class="custom-bullet">Expert Training & Sessions</li>
              <li class="custom-bullet">Global Career Opportunities</li>
              <li class="custom-bullet">Real-World Experience</li>
              <li class="custom-bullet">Industry-Relevant Skills</li>
              <li class="custom-bullet">Mastery Certification</li>
            </ul>
          </div>
          <div class="col-md-6 text-center Look-Img">
            <img
              src="./img/Entrepreneurship-2side.png"
              alt="Entrepreneurship Training"
              class="img-fluid rounded shadow first-image"
            />
          </div>
        </div>

        {/* <!-- Our Education Methodology --> */}
        <div
          class="row align-items-center flex-md-row-reverse bg-white p-4 shadow rounded"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div class="col-md-6">
            <h3 class="fw-bold" style={{ marginLeft: "4%", color: "#132f54" }}>
              OUR EDUCATION <span class="highlight">METHODOLOGY</span>
            </h3>
            <hr class="divider"></hr>
            <ul class="list-unstyled Two-Side-Point">
              <li class="custom-bullet">Flexible Learning</li>
              <li class="custom-bullet">Personality Development Training</li>
              <li class="custom-bullet">Expert Session</li>
              <li class="custom-bullet">100% Practical Education</li>
              <li class="custom-bullet">Educational Activities</li>
              <li class="custom-bullet">Freelancing Platform Training</li>
              <li class="custom-bullet">Promoting a Growth Mindset</li>
              <li class="custom-bullet">100% Practical Education</li>
            </ul>
          </div>
          <div class="col-md-6 text-center">
            <img
              src="./img/Eduction-Medology.png"
              alt="Education Methodology"
              class="img-fluid rounded shadow first-image1"
            />
          </div>
        </div>
      </section>

      {/* ------------------Trending-Courses-Section---------------- */}
      <Trending_Courses />

      {/* ------------------Offer-Section---------------- */}
      <section className="offer_section mt-5">
        <div className="container">
          <div className="offer_row">
            <div
              className="offer_title"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h2>What We Offer</h2>
            </div>
            <div className="offer_card_details">
              <div
                className="offer_card_col"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <div className="offer_card">
                  <GiPencilBrush />
                  <h6>Soft Skill Traning By Experts</h6>
                </div>
                <div className="offer_card">
                  <FaHandsHoldingChild />
                  <h6>Placement Assistance</h6>
                </div>
                <div className="offer_card">
                  <BsMicrosoftTeams />
                  <h6>Traning In Team Enviroment</h6>
                </div>

                <div className="offer_card">
                  <FaUserGraduate />
                  <h6>Industry Oriented Syllabus</h6>
                </div>
                <div className="offer_card">
                  <FaUsers />
                  <h6>Personality Development Training</h6>
                </div>
              </div>
              <div
                className="offer_card_col"
                data-aos="flip-left"
                data-aos-duration="3000"
              >
                <img
                  src="./img/What-We-Offer-Vector.png"
                  alt=""
                  style={{ width: "80%", height: "650px", marginLeft: "50px" }}
                />
              </div>
              <div
                className="offer_card_col"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <div className="offer_card">
                  <FaListCheck /> <h6>Day-To-Day Progress Tracking</h6>
                </div>
                <div className="offer_card">
                  <GiTeacher /> <h6>Experienced Faculties From IT Company</h6>
                </div>
                <div className="offer_card">
                  <PiDesktopTowerBold />
                  <h6> Traching Methodology as It Industry</h6>
                </div>
                <div className="offer_card">
                  <GiArtificialIntelligence />
                  <h6>Ai & Human Based Assessment System</h6>
                </div>
                <div className="offer_card">
                  <FaLaptop />
                  <h6>Freelancing Platforms Training</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ InFrastructure-Section ---------------- */}
      <section
        className="infrastructure-section  mt-5"
        style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div class="container mt-4" data-aos="fade-up" data-aos-duration="3000">
          <h2 class="Infrastructure-h2">State-of-the-Art Infrastructure for Global Career Advancemen</h2>
          <p class="Infrastructure-p">
          At DG Multimedia, we offer world-class facilities that empower students to build international careers. As one of Surat’s most trusted and certified computer training institutes, we deliver in-demand IT courses packed with practical experience and recognized certification.
          </p>
          {/* <hr> </hr> */}

          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4">
              <div class="Infrastructure-img">
                <img
                  src="./img/MD-Office-Area.jpg"
                  alt="Machine Learning with Python"
                />
                <img class="mt-4" src="./img/Lab-Area.webp" alt="" />
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="Infrastructure-img">
                <img
                  className="Infrastructure-img-Second"
                  src="./img/Office-Area.jpg"
                  alt="Angular"
                />
                <img
                  class="Infrastructure-img-Four mt-4"
                  src="./img/Confrence-Area.jpg"
                  alt="Node JS"
                />
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="Infrastructure-img">
                <img src="./img/out-door are.jpg" alt="React JS" />
                <img class="mt-5" src="./img/MG-road-Bhive-8.jpg" alt="Flutter" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ Student-Reviews-Section ---------------- */}
      <section
        className="student_reviews_section mt-5"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <section
          className="container"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div
            className="slider-container"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="student_reviews_title">
              <h2>Student Reviews</h2>
            </div>
          </div>
          <div
            className="swiper-wrapper"
            style={{ width: "90%", margin: "0 auto" }}
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                420: { slidesPerView: 1 },
                1150: { slidesPerView: 3 },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
            >
              <SwiperSlide>
                <div class="testimonial-card">
                  <img src="./img/Poonam Review.png" alt="User" />
                  <h5>Patel Poonam</h5>
                  <span>UI/UX Design</span>
                  <div class="stars">⭐⭐⭐⭐⭐</div>
                  <p>
                    "Completing the UI & UX course at DG Multimedia has been an
                    enriching experience. The program was intensive and
                    thoughtfully designed to cover both the aesthetic and
                    functional aspects of design."
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="testimonial-card">
                  <img src="./img/Abhishek Review.png" alt="User" />
                  <h5>Abhishek Chaudhry</h5>
                  <span>Advance Digital Marketing</span>
                  <div class="stars">⭐⭐⭐⭐⭐</div>
                  <p>
                    "I had an excellent experience completing the Advanced
                    Digital Marketing course at DG Multimedia Education
                    Institute. The course was well-structured, covering all
                    essential aspects of digital marketing"
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="testimonial-card">
                  <img src="./img/Tamana Review.png" alt="User" />
                  <h5>Tamanna Prajapati</h5>
                  <span>Graphic Design</span>
                  <div class="stars">⭐⭐⭐⭐⭐</div>
                  <p>
                    "I recently completed the Graphic Design course at DG
                    Multimedia Education Institute, and it was an incredible
                    experience. The course was well-structured from the basics
                    to advanced design techniques."
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="testimonial-card">
                  <img src="./img/Aaina Review.png" alt="User" />
                  <h5>Aaina Saraswat</h5>
                  <span>UI/UX Design</span>
                  <div class="stars">⭐⭐⭐⭐⭐</div>
                  <p>
                    "I completed the UI/UX Design course at DG Multimedia
                    Education Institute, and my experience was amazing! The
                    course content is industry-standard, and the faculty's
                    teaching style is practical and easy to understand."
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="testimonial-card">
                  <img src="./img/Param Review.png" alt="User" />
                  <h5>Param Gondaliya</h5>
                  <span>UI/UX Design</span>
                  <div class="stars">⭐⭐⭐⭐⭐</div>
                  <p>
                    "I recently completed the UI & UX course at DG Multimedia,
                    and it has been a game changer for my design career. The
                    curriculum was well-organized with a balanced mix of theory
                    and practical projects."
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="testimonial-card">
                  <img src="./img/Yashvardhan Review.png" alt="User" />
                  <h5>Yashvardhan Rathore</h5>
                  <span>FullStack Developer</span>
                  <div class="stars">⭐⭐⭐⭐⭐</div>
                  <p>
                    "I completed the Full Stack Development course at DG
                    Multimedia Education Institute, and I must say it was an
                    excellent learning experience. The course covered both
                    front-end and back-end development."
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="swiper-button-prev fs-2"></div>
          <div className="swiper-button-next"></div>
        </section>
      </section>

      {/* ------------------Footer-Section----------------  */}
      <Footer />
    </>
  );
}
document.addEventListener("DOMContentLoaded", function () {
  let index = 0;

  function showSlide() {
    let slides = document.querySelector(".testimonial-slider");
    let totalSlides = document.querySelectorAll(".testimonial-card").length;

    if (!slides) {
      console.error("Slider not found!");
      return;
    }

    if (index > totalSlides - 3) {
      index = 0;
    } else if (index < 0) {
      index = totalSlides - 3;
    }

    let move = -index * 50; // 50% shift to show two cards at a time
    slides.style.transform = `translateX(${move}%)`;
  }

  function nextSlide() {
    index++;
    showSlide();
  }

  function prevSlide() {
    index--;
    showSlide();
  }

  // Auto slide every 3 seconds
  setInterval(nextSlide, 3000);

  // Initial setup
  showSlide();
});

export default Home;

{
  /* <div className="copyright">
        <p>Copyright © 2024 DGMultimedia</p>
      </div> */
}
