import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Homepage from './landing_page/home/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './landing_page/signup/Signup';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import ProductPage from './landing_page/product/ProductPage';
import Navbar from './landing_page/Navbar';
import { Footer } from './landing_page/Footer';
import AboutPage from './landing_page/about/AboutPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/About' element={<AboutPage />}></Route>

      <Route path='/product' element={<ProductPage />}></Route>
      <Route path='/pricing' element={<PricingPage />}></Route>
      <Route path='/support' element={<SupportPage />}></Route>
      <Route path='*' element={

        <div className='container text-center'>
        <h1 className='fs-2 mt-5 p-5'>  404 page not found</h1>
        </div>
      }></Route>






    </Routes>
<Footer/>

  </BrowserRouter>

);
;
