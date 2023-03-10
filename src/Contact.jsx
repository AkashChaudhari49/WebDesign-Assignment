import React from 'react'
import Intro from './component/Intro';
import "./contact.css"
import { BsFillTelephoneFill } from "react-icons/bs"
import { AiFillHome, AiFillMail } from "react-icons/ai"

const Contact = () => {
  return (
    <div>
      <Intro name="Contact"/>
      <div className="contact-container">
        <div className="contact-content">
          <h3>Get In Touch</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repellat inventore, dicta quae ex suscipit quod, eius eaque sequi blanditiis debitis distinctio ipsa provident! Iste non excepturi aperiam alias quam!</p>
        </div>
        <div className="contact-box">
          <div className="contact-form-box">
            <div className="warning-line">
              <p>Manadatory fiels with <span className='font-red'>*</span> sign tags</p>
            </div>
            <div  className='form-div'>
              <div className="name-box">
                <label htmlFor="name">Name<span>*</span></label>
                <input type="text" />
              </div>
              <div className="name-box">
                <label htmlFor="name">Email Address<span>*</span></label>
                <input type="eamil" />
              </div>
              <div className="name-box">
                <label htmlFor="name">Number<span>*</span></label>
                <input type="number" />
              </div>
              <div className="name-box">
                <label htmlFor="name">Messege<span>*</span></label>
                <textarea type="text"/>
              </div>
              <div className="captcha-box">
                <div className="code">XaZI7TLe</div>
                <div className="code-input">
                  <label htmlFor="Captcha">Enter the Captcha</label>
                  <input type="text"/>
                </div>
              </div>
              <button>Send</button>
            </div>

          </div>

          <div className="contact-add-social-box">
            <div className="addres-div">
              <div className="social-icons">
                <BsFillTelephoneFill className='contact-icon'/>
                <AiFillHome className='contact-icon'/>
                <AiFillMail className='contact-icon'/>
              </div>
              <div className="contacts-deatail">
                <div className="datas-div">
                  <p><span>Phone : </span>+225 32424363432</p>
                  <p><span>Mobile : </span>+91 32424363432</p>
                </div>
                <div className="datas-div">
                  <p>Data Novality pvt ltd, waghle estate </p>
                  <p>thane, mumbai 4322- 13224</p>
                </div>
                <div className="datas-div">
                 <p className='link'>datanovality@gmail.com</p>
                  <p className='link'>www.datanovality.com</p>
                </div>
              </div>

            </div>
            <div className="map-div">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.193353077129!2d72.95225051437852!3d19.18675545346881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b902ff48f9fd%3A0xea7d3a1ca046bb33!2sWagle%20Estate%2C%20Shivaji%20Nagar%2C%20Kisan%20Nagar%201%2C%20Thane%20West%2C%20Thane%2C%20Maharashtra%20400080!5e0!3m2!1sen!2sin!4v1678346818760!5m2!1sen!2sin" width="300" height="200" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="social-div">
              <h3>Follow us on social media</h3>
              <div className="social-boxes">
                <div className="box-social"></div>
                <div className="box-social"></div>
                <div className="box-social"></div>
                <div className="box-social light"></div>
                <div className="box-social yellow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;