import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io";
import "./CSS/Navbar.css";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  const clickmenu = () => {
    document.getElementById("nav").style.display = " block";
  };
  const closemenu = () => {
    document.getElementById("nav").style.display = " none";
  };
  return (
    <>
      {/* Top Navigation Bar */}
      <header class="head-1  d-md-block" style={{ height: "60px" }}>
        <div class="container mb-5">
          <div class="row align-items-center">
            <div class="Top-Nav-Call col-md-4 col-lg-3 col-xl-2 mb-5">
              <a href="#">
                <BiSolidPhoneCall className="Top-Nav-Icon" />
              </a>
              <a href="#">
                <h6 class="Top-Nav-Text m-0">+91 91047 90039</h6>
              </a>
            </div>
            <div class="Top-Nav-Email col-md-4 col-lg-2 col-xl-2 mb-5">
              <a href="#">
                <MdEmail className="Top-Nav-Icon" />
              </a>
              <a href="#">
                <h6 class="Top-Nav-Text m-0">info@dgmultimedia.in</h6>
              </a>
            </div>
            <ul class="col-md-4 col-lg-7 col-xl-3 mb-5 list-unstyled Social-Media-Icon-Div">
              <li class="mt-2 mb-2 ms-2">
                <a
                  href="https://www.instagram.com/dg_multimedia_institute/"
                  target="_blank"
                >
                  <h6>
                    <PiInstagramLogoFill className="Social-Media-Icon" />
                  </h6>
                </a>
              </li>
              <li class="mt-2 mb-2 ms-2">
                <a
                  href="https://www.linkedin.com/in/dg-multimedia-bb6232311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                >
                  <h6>
                    <FaLinkedin className="Social-Media-Icon" />
                  </h6>
                </a>
              </li>
              <li class="mt-2 mb-2 ms-2">
                <a
                  href="https://www.youtube.com/@DgMultimediaed"
                  target="_blank"
                >
                  <h6>
                    <FaYoutube className="Social-Media-Icon" />
                  </h6>
                </a>
              </li>
              <li class="mt-2 mb-2 ms-2">
                <a href="">
                  <h6>
                    <IoLogoWhatsapp className="Social-Media-Icon" />
                  </h6>
                </a>
              </li>
              <li class="mt-2 mb-2 ms-2">
                <a
                  href="https://www.facebook.com/dgmultimedia63?mibextid=ZbWKwL"
                  target="_blank"
                >
                  <h6>
                    <FaFacebook className="Social-Media-Icon" />
                  </h6>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <header
        className="head-2"
        style={{
          marginTop: "60px",
          backgroundColor: "#132f54",
          height: "75px",
        }}
      >
        <div className="responsive_header  d-flex justify-between items-center">
          <div className="Navbar-Logo">
            <Link to="/">
              <img
                src="./img/DG Multimedia Institute wg png.png"
                alt=""
                className="w-[150px] md:w-[100px] md:ml-0"
              />
            </Link>
          </div>
          <div className="menubar m-5" onClick={clickmenu}>
            <h5>
              <TiThMenu />
            </h5>
          </div>
        </div>

        <nav id="nav">
          <div onClick={closemenu} className="menubar close">
            <h5>
              <IoClose />
            </h5>
          </div>
          <ul>
            <li onClick={closemenu}>
              <Link to="/">Home</Link>
            </li>
            <li
              className="dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="courses">
                Courses <FaAngleDown />
              </Link>
              {isDropdownOpen && (
                <div className="dropdown_content" id="dropdown">
                  <div className="dropdown_row">
                    {/* GIMS AND VIDEO EDITING  */}
                    <div className="dropdown_col">
                      <ul onClick={closemenu}>
                        <h6>GIMS </h6>
                        <li onClick={handleLinkClick}>
                          {" "}
                          <Link to="/gims">GIMS (Graduation In Multimedia Skills)</Link>
                        </li>
                      </ul>
                      <ul onClick={closemenu}>
                        <h6>Video Editing</h6>
                        <li onClick={handleLinkClick}>
                          <Link to="/2d_animation">
                            Master In Video Editing
                          </Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/3d_animation">Davinci Resolve</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/3d_animation">Adobe Premiere Pro</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/3d_animation">Adobe After Effect</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/animation_master">Adobe Audition</Link>
                        </li>
                      </ul>
                    </div>
                    {/* Master In Graphics & UI/UX Design */}
                    <div className="dropdown_col">
                      <ul onClick={closemenu}>
                        <h6>Master Designing</h6>
                        <li onClick={handleLinkClick}>
                          <Link to="/">Master In Graphics & UI/UX Design</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/graphics">Graphics Design</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/ui_ux">UI/UX Design</Link>{" "}
                        </li>
                      </ul>
                      {/* Animations */}
                      {/* <ul onClick={closemenu}>
                        <h6>Animation </h6>
                        <li onClick={handleLinkClick}>
                          <Link to="/2d_animation">2D Animation </Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/3d_animation">3D Animation </Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/animation_master">
                            Master in 2D/3D animation
                          </Link>
                        </li>
                      </ul> */}
                    </div>
                    {/* Master Programming */}
                    <div className="dropdown_col">
                      <ul onClick={closemenu}>
                        <h6>Master Programming</h6>
                        <li onClick={handleLinkClick}>
                          {" "}
                          <Link to="/full_stack">Master in Full Stack Development</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/fronted">Master in Front End Development</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/backend">Master in Back End Development</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/webdesignfs">Master in Web Designing</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/webdevelopmentfs">Master in Web Development</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/flutter">Flutter Development</Link>{" "}
                        </li>
                      </ul>
                    </div>
                    {/* Programming */}
                    <div className="dropdown_col">
                      <ul onClick={closemenu}>
                        <h6> Programming </h6>
                        <li onClick={handleLinkClick}>
                          {" "}
                          <Link to="/react_native">React Native</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/react">React JS</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/node">Node JS </Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/angular">Angular JS</Link>{" "}
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/python">Python </Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/laravel">Laravel</Link>{" "}
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/php">Php</Link>{" "}
                        </li>
                        {/* <li onClick={handleLinkClick} ><Link to="/cyber">Cyber Security</Link> </li> */}
                        <li onClick={handleLinkClick}>
                          <Link to="/java">C</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/java">C++</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/java">JavaScript</Link>
                        </li>
                      </ul>
                    </div>
                    {/* Business Development */}
                    <div className="dropdown_col">
                      <ul>
                        <h6>Business Development </h6>
                        <li onClick={handleLinkClick}>
                          <Link to="/advance_digital">Advance Digital Marketing</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/digital">
                            {" "}
                            Basic Digital Marketing
                          </Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/personality">
                            {" "}
                            Personality development{" "}
                          </Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/social_media">Social media marketing</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/social_media">Freelancing</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/social_media">BDE(Business Development Executive)</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/social_media">HR</Link>
                        </li>
                        {/* <li onClick={handleLinkClick}>
                          <Link to="/youtube_growth">Career on youtube </Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/instagram_growth">
                            {" "}
                            Instagram Growth Courses
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                    {/* Short Term Courses */}
                    <div className="dropdown_col">
                      <ul onClick={closemenu}>
                        <h6>Short Term Courses</h6>
                        <li onClick={handleLinkClick}>
                          <Link to="/artificial_intelligence">Basic Computer Course</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/machine_learning">Microsoft Office Course</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/cyber">Excel Course</Link>{" "}
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/machine_learning">Shopify</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/machine_learning">WordPress</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/machine_learning">Telly Accounting</Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="/machine_learning">Public Speaking</Link>
                        </li>
                      </ul>

                      {/* <ul onClick={closemenu}>
                        <h6>Foundation </h6>
                        <li onClick={handleLinkClick}>
                          <Link to="/ccc">CCC </Link>
                        </li>
                        <li onClick={handleLinkClick}><Link to="/java">C,C++,Java </Link></li>
                      </ul> */}
                    </div>
                    {/* <div className="dropdown_col">
                      <ul>
                        <h6>Foundation </h6>
                        <li onClick={handleLinkClick}>
                          <Link to="ccc">CCC </Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="java">C,C++,Java </Link>
                        </li>
                      </ul>
                    </div> */}
                    {/* <div className="dropdown_col">
                      <ul>
                        <h6>Animation </h6>
                        <li onClick={handleLinkClick}>
                          <Link to="2d_animation">2D Animation </Link>
                        </li>
                        <li onClick={handleLinkClick}>
                          <Link to="3d_animation">3D Animation </Link>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              )}
            </li>
            <li onClick={closemenu}>
              <Link to="blog">Blog</Link>
            </li>
            <li onClick={closemenu}>
              <Link to="about">About</Link>
            </li>
            <li onClick={closemenu}>
              <Link to="contact">Contact</Link>
            </li>
            <li onClick={closemenu}>
              <Link to="gallery">Gallery</Link>
            </li>
          </ul>
        </nav>
        <div className="inquiry_button">
          <Link to="https://wa.me/9104790039" target="_blank">
            <button id="BTN">Inquiry us</button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
