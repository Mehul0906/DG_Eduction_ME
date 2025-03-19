import React from 'react'
import Footer from './Footer'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "../CSS/Blog.css"

function Blog() {
  return (
    <>
      <div className='home_area home_page_img blog_page_img'>

        <div className='about_home'>
          <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Blog</h1>
        </div>
      </div>
      <section className='blog_section'>
        <div className='container'>
          <div className='blog_row'>
            <div className='blog_col_card' data-aos="fade-up"
                        data-aos-duration="3000">
              <img src="./img/Digital-Blog.jpeg" alt="" />
              <div className='blog_details'>
                <h4>Digital Marketing: Navigating the Digital Jungle</h4>
                <p style={{textAlign:"justify"}}>In today's ever-connected world, digital marketing isn’t just a buzzword—it’s the heartbeat of every thriving business. Whether you're a seasoned marketer or a curious beginner, this blog post will take you on a journey through the essentials of digital marketing in a language that feels more like a friendly chat over coffee than a technical lecture.</p>
                <span style={{color:"#132f54"}}>Read More <MdKeyboardDoubleArrowRight /></span>
              </div>
            </div>
            <div className='blog_col_card' data-aos="fade-up"
                        data-aos-duration="3000">
              <img src="./img/graphic-Blog.jpeg" alt="" />
              <div className='blog_details'>
                <h4>Full Stack Development: The Backbone of the Web</h4>
                <p style={{textAlign:"justify"}}>Ever wondered how websites work behind the scenes? Full stack developers are the masterminds who bring them to life, handling both the front end (what users see) and the back end (the engine running the show).
                </p>
                <span style={{color:"#132f54"}}>🔹 Front End: HTML, CSS, JavaScript, React, Vue.js</span>
                <span style={{color:"#132f54"}}>🔹 Back End: Node.js, Django, Ruby on Rails</span>
                <span style={{color:"#132f54"}}>🔹 Back End: Node.js, Django, Ruby on Rails</span>
                <span style={{color:"#132f54"}}>🔹 Version Control: Git & GitHub</span>
                <span style={{color:"#132f54"}}>Read More <MdKeyboardDoubleArrowRight /></span>
              </div>
            </div>
            <div className='blog_col_card' data-aos="fade-up"
                        data-aos-duration="3000">
              <img src="./img/video edtining-Blog.jpeg" alt="" />
              <div className='blog_details'>
                <h4>Video Editing: Bringing Stories to Life</h4>
                <p style={{textAlign:"justify"}}>In a world of short attention spans, videos have become the king of content. Whether it's a YouTube vlog, a cinematic short film, or an ad campaign, video editing is what turns raw footage into a masterpiece.</p>
                <span style={{color:"#132f54"}}>🎬 Software: Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve</span>
                <span style={{color:"#132f54"}}>🎬 Techniques: Cutting, color grading, transitions, motion graphics</span>
                <span style={{color:"#132f54"}}>🎬 Trends: Short-form videos, cinematic editing, AI-powered effects</span>
                <span style={{color:"#132f54"}}>Read More <MdKeyboardDoubleArrowRight /></span>
              </div>
            </div>
            <div className='blog_col_card' data-aos="fade-up"
                        data-aos-duration="3000">
              <img src="./img/Ui-Ux-Blog.jpeg" alt="" />
              <div className='blog_details'>
                <h4>Graphic Design: The Art of Visual Communication</h4>
                <p style={{textAlign:"justify"}}>Graphic design is more than just making things look pretty—it’s about creating visuals that communicate ideas, evoke emotions, and leave a lasting impression.</p>
                <span style={{color:"#132f54"}}>🎨 Software: Adobe Photoshop, Illustrator, Canva, Figma</span>
                <span style={{color:"#132f54"}}>🎨 Fundamentals: Typography, color theory, branding</span>
                <span style={{color:"#132f54"}}>🎨 Trends: Minimalism, 3D design, AI-generated art</span>

                <span style={{color:"#132f54"}}>Read More <MdKeyboardDoubleArrowRight /></span>
              </div>
            </div>
            <div className='blog_col_card' data-aos="fade-up"
                        data-aos-duration="3000">
              <img src="./img/Fullstack-Blog.jpeg" alt="" />
              <div className='blog_details'>
                <h4>UI/UX Design: Crafting Seamless Digital Experiences</h4>
                <p style={{textAlign:"justify"}}>Ever used an app or website that just felt right? That’s the magic of UI (User Interface) and UX (User Experience) design. It’s all about making digital products not only look great but also function smoothly.</p>
                <span style={{color:"#132f54"}}>🖌 Tools: Figma, Adobe XD, Sketch</span>
                <span style={{color:"#132f54"}}>🖌 Principles: Wireframing, prototyping, user research</span>
                <span style={{color:"#132f54"}}>🖌 Trends: Dark mode, micro-interactions, voice UI</span>
                <span style={{color:"#132f54"}}>Read More <MdKeyboardDoubleArrowRight /></span>
              </div>
            </div>
            <div className='blog_col_card' data-aos="fade-up"
                        data-aos-duration="3000">
              <img src="./img/App-Blog.jpeg" alt="" />
              <div className='blog_details'>
                <h4>App Development: Building the Future</h4>
                <p style={{textAlign:"justify"}}>Mobile apps are an essential part of our daily lives. Whether it’s social media, fitness tracking, or online shopping, app development brings ideas to life in the palm of your hand.</p>
                <span style={{color:"#132f54"}}>📱 Languages: Swift (iOS), Kotlin (Android), Flutter, React Native</span>
                <span style={{color:"#132f54"}}>📱 Backend: Firebase, AWS, Node.js</span>
                <span style={{color:"#132f54"}}>📱 Trends: AI-powered apps, AR/VR integration, super apps</span>
                <span style={{color:"#132f54"}}>Read More <MdKeyboardDoubleArrowRight /></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Blog
