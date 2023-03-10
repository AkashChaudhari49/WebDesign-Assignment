import './Navbar.css';
import { NavLink } from "react-router-dom";
import { HiSearchCircle } from "react-icons/hi";


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div>
        <h3 className='logo'>Your Logo</h3>
      </div>
      <div className='links'>
        <ul className='nav-lists'>
          <li><NavLink className='nav-links'  to="/">Home</NavLink></li>
          <li><NavLink className='nav-links'  to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink className='nav-links'  to="/about">About</NavLink></li>
          <li><NavLink className='nav-links'  to="/contact">Contact</NavLink></li>
          <li><button>Sign</button></li>
        </ul>
      </div>
      <div className='searchDiv'>
        <input type="text" placeholder='Search' /><HiSearchCircle className='searchIcon' />
      </div>

    </nav>
  )
}

export default Navbar;