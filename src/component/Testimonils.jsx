import React from 'react';
import "./testimonlias.css"
import women from "../Assets/women.png";
import men from "../Assets/men.png"


const Testimonils = () => {
  return (
    <div className='testimonials'>
        <div className="heading-testimonilias">
            <h3>Testimonials</h3>
        </div>
        <div className="text-para">
            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugit deleniti tenetur, tempora exercitationem quisquam repudiandae ea hic dolorum fuga quam cum."</p>
        </div>
        <div className="name-ceo"><span>Laukesh Lam</span>/Ceo of LauranX</div>
        <div className="testi-icons">
            <div className="divIcon"><img className="icon-main" src={women} alt="" /></div>
            <div className="divIcon"><img className="icon-main" src={men} alt="" /></div>
            <div className="divIcon"><img className="icon-main" src={women} alt="" /></div>
        </div>
    </div>
  )
}

export default Testimonils;