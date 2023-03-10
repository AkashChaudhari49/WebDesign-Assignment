import React from 'react';
import "./footer.css"; 
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdPhonelinkRing } from "react-icons/md";
import { GrMail } from "react-icons/gr";


const Footer = () => {
    return (
        <section className='footer-section'>
            <div className="footer-box">
                <div className="card feed">
                    <div className="heading">
                        <h3>Bird Feed</h3>
                    </div>
                    <div className="para-div">
                        <span>Check now feed now</span>
                        <span className='link'>http://akdrfa.com</span>
                        <span>2 month ago</span>
                    </div>
                    <div className="para-div">
                        <span>Check now feed now</span>
                        <span className='link'>http://akdrfa.com</span>
                        <span>2 month ago</span>
                    </div>
                    <div className="para-div">
                        <span>Check now feed now</span>
                        <span className='link'>http://akdrfa.com</span>
                        <span>2 month ago</span>
                    </div>

                </div>
                <div className="card news">
                    <div className="heading">
                        <h3>NewsLetter</h3>
                    </div>
                    <div className="para para-div">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam possimus quae asperiores!</p>
                    </div>
                    <div className="contact-mail">
                        <h3>Your Email Address</h3>
                        <input type="text" />
                        <button>Signup</button>
                    </div>
                </div>
                
                <div className="card projects">
                    <div className="heading">
                        <h3>Recent Projects</h3>
                    </div>
                    <div className="project-div">
                        <div className='box'></div>
                        <div className="desc">
                            <span>Shopping Response Card</span>
                            <span className='link'>http:ShopCart@.Com</span>
                            <span>2 Week ago</span>
                        </div>
                    </div>

                    <div className="project-div">
                        <div className='box'></div>
                        <div className="desc">
                            <span>Shopping Response Card</span>
                            <span className='link'>http:ShopCart@.Com</span>
                            <span>2 Week ago</span>
                        </div>
                    </div>

                    <div className="project-div">
                        <div className='box'></div>
                        <div className="desc">
                            <span>Shopping Response Card</span>
                            <span className='link'>http:ShopCart@.Com</span>
                            <span>2 Week ago</span>
                        </div>
                    </div>

                </div>
                <div className="card contact">
                    <div className="heading">
                        <h3>Contact</h3>
                    </div>
                    <div className="contact-div">
                        <div className="icon-div"><BsFillTelephoneOutboundFill className='icon-contact'/></div>
                        <div className="number-div">
                            <span>+221 223-554822</span>
                            <span>+221 223-554822</span>
                        </div>
                    </div>

                    <div className="contact-div">
                        <div className="icon-div"><MdPhonelinkRing className='icon-contact' /></div>
                        <div className="number-div">
                            <span>+91 883566534</span>
                            <span>+91 8834566534</span>
                        </div>
                    </div>

                    <div className="contact-div">
                        <div className="icon-div"><GrMail className='icon-contact' /></div>
                        <div className="number-div">
                            <span>rauarlam@gmail.com</span>
                            <span>rokshdev@gmail.com</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer