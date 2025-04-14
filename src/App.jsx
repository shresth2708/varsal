import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/home1.jsx';
import './App.css';
import Navbar from './Components/navbar/navbar';
import Footer from './Components/footer/footer.jsx';
import Product from './Products/product.jsx';
import Contact from './contact/contact1.jsx';
import AboutUs from './aboutus/about.jsx';
import Investor from './investors/investors1.jsx';

function App() {
  // Add this to ensure proper rendering of full page content
  useEffect(() => {
    document.body.style.overflow = 'visible';
    document.body.style.display = 'block';
    document.body.style.width = '100%';
    
    // Optional: Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <BrowserRouter>
      <Navbar />
      {/* Removed Search component that was causing errors */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/investors' element={<Investor />} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;