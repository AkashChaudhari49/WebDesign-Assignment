import React from 'react';
import "./about.css";
import Intro from './component/Intro';
import TeamCard from './component/TeamCard';
import { FaLaptopCode } from "react-icons/fa";
import { FcTwoSmartphones } from "react-icons/fc"
import { BsCalendarDate } from "react-icons/bs"
import { MdOutlineRadio } from "react-icons/md"
import women from "./Assets/women.png"
import men from "./Assets/men.png"

const About = () => {

  return (
    <div>
      <Intro name="About" />
      <div className="about-container">
        <div className="text-box">
          <div className="about-heading">
            <h3>Who We Are</h3>
          </div>
          <div className="about-para">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio odit maxime dolor doloremque, odit rem possimus ad quis debitis est a, eaque maxime dolor doloremque, odit rem officia! Fugiat, nam blanditiis.</p>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio possimus ad quis debitis est a, eaque maxime dolor doloremque, fddgbtd sit amet consectetur adipisicing elit. Optio possimus ad quis debitis est a, eaque maxime dolor etde odit rem officia! Fugiat, nam blanditiis.</p>
          </div>
          <div className="about-heading2">
            <h2>We believe in good design</h2>
          </div>
        </div>

        <div className="about-content">
          <div className="content-card">
            <div className="about-icon">
              <FaLaptopCode className='aboutIcon' />
            </div>
            <div className="content-title">
              <h3>Web Design</h3>
            </div>
            <div className="content-para">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde voluptate earum, labore id illum inventore, ut molestias quidem distinctio error, praesentium voluptatibus dolores vero?</p>
            </div>
          </div>


          <div className="content-card">
            <div className="about-icon">
              <FcTwoSmartphones className='aboutIcon' />
            </div>
            <div className="content-title">
              <h3>Phone App</h3>
            </div>
            <div className="content-para">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde voluptate earum, labore id illum inventore, ut molestias quidem distinctio error, praesentium voluptatibus dolores vero?</p>
            </div>
          </div>

          <div className="content-card">
            <div className="about-icon">
              <MdOutlineRadio className='aboutIcon' />
            </div>
            <div className="content-title">
              <h3>Commercial</h3>
            </div>
            <div className="content-para">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde voluptate earum, labore id illum inventore, ut molestias quidem distinctio error, praesentium voluptatibus dolores vero?</p>
            </div>
          </div>

          <div className="content-card border-card">
            <div className="about-icon">
              <BsCalendarDate className='aboutIcon' />
            </div>
            <div className="content-title">
              <h3>Hello Planning</h3>
            </div>
            <div className="content-para">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit unde voluptate earum, labore id illum inventore, ut molestias quidem distinctio error, praesentium voluptatibus dolores vero?</p>
            </div>
          </div>
        </div>

        <div className="team-container">
          <div className="team-heading">
            <h3>Our Team</h3>
          </div>
          <div className="team-cards">
            <TeamCard men={men} className="box-showdow1" />
            <TeamCard men={women} className="box-showdow1" />
            <TeamCard men={women} className="box-showdow1" />
            <TeamCard men={men}className="box-showdow1" />
          </div>
      
        </div>
      </div>
    </div>
  )
}

export default About;