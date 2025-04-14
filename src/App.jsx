import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/home1.jsx';
import './App.css';
import Navbar from './Components/navbar/navbar';
import Footer from './Components/footer/footer.jsx';
import Product from './Products/product.jsx';
import Contact from './contact/contact1.jsx';
import Financials from './investors/financial/financials.jsx';
import Shareholders from './investors/shareholders/shareholder.jsx';
import Team from './aboutus/team/team.jsx';
import AnnualReport from './investors/annualReport/annualreport.jsx';
import VisionValue from './aboutus/vision/visionvalue.jsx';
import CompanyHistory from './aboutus/history/companyhistory.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/about' element={<AboutUs />} /> */}
        <Route path='/about/vision' element={<VisionValue />} />
        <Route path='/about/team' element={<Team />} />
        <Route path='/about/history' element={<CompanyHistory />} />

        {/* <Route path='/investors' element={<Investor />} /> */}
        <Route path='/investors/annual-report' element={<AnnualReport />} />
        <Route path='/investors/financials' element={<Financials />} />
        <Route path='/investors/shareholders' element={<Shareholders />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;