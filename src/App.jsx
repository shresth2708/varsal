import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/home1.jsx';
import './App.css';
import Navbar from './Components/navbar/navbar';
import Footer from './Components/footer/footer.jsx';
import Product from './Products/product.jsx';
import Contact from './contact/contact1.jsx';
import Search from './Components/search/search.jsx';
import AboutUs from './aboutus/about.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;