import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate

import './App.css';
import Menu from './Menu/Menu';
import Market from './Market/Market';
import Catering from './Catering/Catering';
import Journal from './Journal/Journal';
import Story from './Story/Story';
import Contact from './Contact/Contact';
import NavBar from './Navbar/Navbar';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/market" element={<Market />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/"
            element={<Navigate to="/menu" replace />} // Redirect root path to /menu
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
