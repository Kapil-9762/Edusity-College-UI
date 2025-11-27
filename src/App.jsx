import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Tittle from './components/Tittle/Tittle';
import About from './components/about/About';
import Campus from './components/campus/Campus';
import Testmonial from './components/Testimonial/Testmonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Tittle title="Our Program" subTitle="What we offer"/>
        <Programs />
        <About />
        <Tittle title="Gallery" subTitle="Campus photo"/>
        <Campus />
        <Tittle title="TESTIMONIALS
        " subTitle="What Student Says" />
        <Testmonial />
        <Tittle title="Contact Us
        " subTitle="Get in Touch" />
        <Contact/>
        <Footer/>

      </div>
    </div>
  )
}

export default App
