import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes

import './App.css';
import Menu from './Menu/Menu';
import Market from './Market/Market';
import Catering from './Catering/Catering';
import Journal from './Journal/Journal';
import Story from './Story/Story';
import Contact from './Contact/Contact';
import NavBar from './Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes> {/* Use Routes instead of Route */}
          <Route path="/menu" element={<Menu />} /> 
          <Route path="/market" element={<Market />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
