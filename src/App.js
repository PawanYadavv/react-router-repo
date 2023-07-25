import React, { useState } from "react";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Imageapp from "./components/Imageapp";
import './App.css'

function App() {


	const [loggedIn, setLoggedIn] = useState(false);
	// const [activePage, setActivePage] = useState("home");
	const handleLogin = () => {
	  setLoggedIn(true);
	};
	return (  <BrowserRouter>
	{!loggedIn ? <Login onLogin={handleLogin} />  :
		<div>
	<header className="header-class">
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to="/home" className="navbar__link">Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="/about" className="navbar__link">About</Link>
          </li>
          <li className="navbar__item">
            <Link to="/contact" className="navbar__link">Contact</Link>
          </li>
          <li className="navbar__item">
            <Link to="/image" className="navbar__link">Image</Link>
          </li>
        </ul>
      </nav>
    </header>
    {/* <div>
      <span className="heading-text">
      Explore our Image section To find the beautiful images that are required by you these images are very useful literslly to the user
      </span>
    </div> */}


		  <Routes>

          <Route path="/" element={<div>
      <span className="heading-text">
      Explore our Image section To find the beautiful images that are required by you these images are very useful literslly to the user
      </span>
    </div> } />
          <Route path="/image" element={<Imageapp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
		</div>
}
	  </BrowserRouter>
	  );
	
}



export default App;




