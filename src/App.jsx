import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactForm from './components/ContactForm';  // Assuming you've created this component
import Home from './components/Home'; // Import the Home component
import AboutUs from './components/AboutUs'; // Import the AboutUs component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/kjcleaning/">Home here</Link>
            </li>
            <li>
              <Link to="/kjcleaning/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/kjcleaning/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/kjcleaning" element={<Home />} />
          <Route path="/kjcleaning/about-us" element={<AboutUs />} />
          <Route path="/kjcleaning/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

