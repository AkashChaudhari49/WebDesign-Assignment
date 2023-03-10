import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './component/Navbar';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Footer from './component/Footer';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path ='/' element={<Home/>} />
        <Route path ='/about' element={<About/>}  />
        <Route path ='/portfolio' element={<Portfolio/>}  />
        <Route path ='/contact' element={<Contact/>}  />
      </Routes>
      <Footer/>
    </Router>
    </>
    
  );
}

export default App;
