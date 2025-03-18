import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import AOS from "aos"; {/* for fadding styles*/}
import "aos/dist/aos.css"; {/* for fadding styles*/}
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonials from './components/Testimoonials/Testimonials'
import Footer from './components/Footer/Footer'
function App() {
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  });

  return (
    <div className='bg-white dark:bg-gray-900
    drak:text-white duration-200'>
    <Navbar />
    <Hero/>
    <Products/>
    <TopProducts/>
    <Banner/>
    <Subscribe/>
    <Products/>
    <Testimonials/>
    <Footer/>
    </div>
  )
}

export default App
