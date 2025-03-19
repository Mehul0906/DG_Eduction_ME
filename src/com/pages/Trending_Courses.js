import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
function Trending_Courses() {
  const swiperRef = useRef(null);
  return (
    <>
    {/* ------------------Trending-Courses-Section---------------- */}
    <section className="container mt-5">
  <div className="slider-container" data-aos="fade-up" data-aos-duration="3000">
    <div className='student_reviews_title'>
      <h2>Trending Courses</h2>
    </div>
  </div>
  <div className="swiper-wrapper" style={{width:"90%",margin:"0 auto"}} data-aos="fade-up"
          data-aos-duration="3000">
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        420: { slidesPerView: 1 }, 
        1150: { slidesPerView: 3 }
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
    >
      <SwiperSlide>
        <div className="card">
            <img src="./img/4-Course.png" alt="Design" />
            <div className="card-content">
              <h3>GIMS Courses </h3>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <Link to="/gims">  <button className='btn'>Know More..!</button></Link>
            </div>
          </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <img src="./img/2-Course.png" alt="Development" />
          <div className="card-content">
            <h3>Design Courses</h3>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <Link to="/graphics"> <button className='btn'>Know More..!</button></Link>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <img src="./img/1-Course.png" alt="Design" />
          <div className="card-content">
            <h3>Development Courses</h3>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <Link to="/full_stack"> <button className='btn'>Know More..!</button></Link>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <img src="./img/5-Course.png" alt="Programming" />
          <div className="card-content">
            <h3>Programming IT</h3>
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <Link to="/flutter"> <button className='btn'>Know More..!</button></Link>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="card">
          <img src="./img/3-Course.png" alt="Marketing" />
          <div className="card-content">
            <h3>Marketing Courses</h3>
            <div className="stars">⭐⭐⭐⭐</div>
            <Link to="/advance_digital"> <button className='btn'>Know More..!</button></Link>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  </div>
  <div className="swiper-button-prev fs-2" ></div>
  <div className="swiper-button-next" ></div>
    </section>
    </>
  )
}

export default Trending_Courses
