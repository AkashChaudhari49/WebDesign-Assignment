
import Intro from './component/Intro';
import "./portfolio.css"
import { BsGrid3X3GapFill } from "react-icons/bs";
import { HiViewList } from "react-icons/hi";
import Card from './component/Card';
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import Testimonils from './component/Testimonils';


const Portfolio = () => {
  return (
    <div>
      <Intro name="Portfolio" />
      <div className="port-container">
        <div className="port-title">
          <h3>Taste It The Good Products</h3>
        </div>
        <div className="list-div">
          <div className="list-all">
            <ul className='list-ul'>
              <li>All</li>
              <li>Web Design</li>
              <li>Advrtising</li>
              <li>Indentify</li>
              <li>Automation</li>
            </ul>
            <div className="grid-view">
              <div className="dropdown">
                <button className="dropbtn">Dropdown</button>
              </div>
              <div className="icon-grid">
                <BsGrid3X3GapFill className="gridIcon" />
                <HiViewList className="gridIcon" />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="cards-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="button-prev-next">
        <button className='btn'><GrFormPreviousLink className='iconPrNe' /> Prev</button>
        <button className='btn'>Next <GrFormNextLink className='iconPrNe' /></button>
      </div>

      <div className='client-container'>
        <div className="client-title">
          <h3>Clients</h3>
        </div>

        <div className="clients">
          {/* my 1st img  */}
          <div className="client-img">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
              alt="trusted-brands"
            />
          </div>
          <div className="client-img">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
              alt="trusted-brands"
            />
          </div>
          <div className="client-img">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
              alt="trusted-brands"
            />
          </div>
          <div className="client-img">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
              alt="trusted-brands"
            />
          </div>
          <div className="client-img">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
              alt="trusted-brands"
            />
          </div>
          <div className="client-img">
            <img
              src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
              alt="trusted-brands"
            />
          </div>
        </div>

      </div>

      <Testimonils/>

    </div>
  )
}

export default Portfolio;