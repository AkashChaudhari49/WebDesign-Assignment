import React from 'react';
import { NavLink } from 'react-router-dom';
import  Testimonils from "./component/Testimonils"
import './home.css';
import { AiFillLike, AiOutlineCamera } from "react-icons/ai";
import { MdOutlineLaptopChromebook, MdShoppingCart } from "react-icons/md";
import { HiSearchCircle } from "react-icons/hi";
import { RxEyeOpen } from "react-icons/rx";


const Home = () => {
  return (
    <div>
      <div className='home-screen'>
        <div className='home-text'>
          <h3 className='title'>Good Design is Good Bussiness</h3>
          <p className='sub-title'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores ea iste nulla. Libero quibusdam non hic at? Aliquam tempora quaerat dgd dgdd degdg sfgsgd nobis this good.</p>

          <button className='btn'>
            <NavLink className="nav-links" to="/">Lern More</NavLink>
          </button>

        </div>
      </div>

      <div className="home-service">
        <div className='title-service'>
          <h3>Our Service</h3>
        </div>

        <div className='services-row'>
          <div className="services-col">
            <div className='service-icon'>
              <MdOutlineLaptopChromebook className="icon" />
            </div>
            <div className="title">
              <h3>Web Design</h3>
            </div>
            <div className="service-desc">
              <p className='desc'>Lorem asfg ssfdsd grsfds ipsum dolor sit amet consectetur adipisicing elit. <span className='high-text'>more..</span>.</p>
            </div>
          </div>

          <div className="services-col">
            <div className='service-icon'>
              <HiSearchCircle className="icon" />
            </div>
            <div className="title">
              <h3>Search Optimization</h3>
            </div>
            <div className="service-desc">
              <p className='desc'>Lorem asfg ssfdsd grsfds ipsum ipsum dolor sit amet consectetur adipisicing elit. <span className='high-text'>more..</span>.</p>
            </div>
          </div>

          <div className="services-col">
            <div className='service-icon'>
              <MdShoppingCart className="icon" />
            </div>
            <div className="title">
              <h3>Online Shop</h3>
            </div>
            <div className="service-desc">
              <p className='desc'>Lorem asfg ssfdsd grsfds ipsum ipsum dolor sit amet consectetur adipisicing elit. <span className='high-text'>more..</span>.</p>
            </div>
          </div>

          <div className="services-col">
            <div className='service-icon'>
              <AiFillLike className="icon" />
            </div>
            <div className="title">
              <h3>Social Media</h3>
            </div>
            <div className="service-desc">
              <p className='desc'>Lorem asfg ssfdsd grsfds ipsum ipsum dolor sit amet consectetur adipisicing elit. <span className='high-text'>more..</span></p>
            </div>
          </div>
        </div>
      </div>


      <div className="portfolio-section">
        <div className='portfolio-container'>
          <div className='portfolio-title'>
            <h3 className='title'>Our Portfolio Awesome</h3>
            <button className='btn'><NavLink className="nav-link">More Works</NavLink></button>
          </div>
          <div className="portfolio-row">
            <div className="card">
              <div className="card-box">
                <AiOutlineCamera className="camera-icon" />
              </div>
              <div className="card-title">
                <h4>Lorem ipsum dolor.</h4>
              </div>
              <div className="card-desc">
                Lorem ipsum dolor sit amet consectetur sldlsdl esmxf adipisicing elit. Quod facere.
              </div>
            </div>

            <div className="card">
              <div className="card-box">
                <AiOutlineCamera className="camera-icon" />
              </div>
              <div className="card-title">
                <h4>Lorem dolor.</h4>
              </div>
              <div className="card-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </div>
            </div>

            <div className="card">
              <div className="card-box">
                <span className='detail'><RxEyeOpen className="camera-icon detail-icon" /> Deatil</span>
              </div>
              <div className="card-title">
                <h4>Lorem ipsum dolor fit.</h4>
              </div>
              <div className="card-desc">
                Lorem ipsum dolor sit amet consectetur dskedj wrdfdr esdkd adipisicing elit. 
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="offer-section">
        <div className="offer-heading">
          <div className="offer-title">
            <h3>What we offer</h3>
          </div>
          <div className="offer-desc">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis itaque asperiores aperiam! Possimus aut eum repellendus hic facilis accusantium ipsam. Perspiciatis, repellat?</p>
          </div>
        </div>

        <div className="offer-row">
          <div className="offer-col">
            <h3 className='col-title'>Web Design</h3>
            <p className='col-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat blanditiis recusandae maxime expedita. Culpa  excepturi at quo numquam impedit dolores autem ad.</p>
            <button>Details</button>
          </div>

          <div className="offer-col">
            <h3 className='col-title'>Search Optimization</h3>
            <p className='col-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat blanditiis recusandae maxime expedita. Culpa  excepturi at quo numquam impedit dolores autem ad.</p>
          </div>

          <div className="offer-col">
            <h3 className='col-title'>Online Shop</h3>
            <p className='col-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat blanditiis recusandae maxime expedita. Culpa tempore veritatis excepturi at quo ad.</p>
            <button>Details</button>
          </div>

          <div className="offer-col">
            <h3 className='col-title'>Social Media</h3>
            <p className='col-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat blanditiis recusandae maxime expedita. Culpa tempore veritatis excepturi at quo numquam.</p>
          </div>

        </div>
      </div>
      <Testimonils/>
    </div>
  )
}

export default Home;