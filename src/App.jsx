import React from 'react'
import "./index.css";
import Header from './Components/Header';
import HeroSection from './Components/HeroSection'
import FeaturesSection from './Components/FeaturesSection';
import Testimonial from './Components/Testimonial';
import CallToAction from './Components/CallToAction';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <div>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <Testimonial />
        <CallToAction />
        <Pricing />
        <Footer />
      </div>
    </>
  )
}

export default App;