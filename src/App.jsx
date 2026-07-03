import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DeviceSpecs from './components/DeviceSpecs';
import Projects from './components/Projects';
import VideoGallery from './components/VideoGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DemoAI from './components/demos/DemoAI';
import DemoEcommerce from './components/demos/DemoEcommerce';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainPortfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <DeviceSpecs />
        <Projects />
        <VideoGallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/demo/ai-dashboard" element={<DemoAI />} />
        <Route path="/demo/ecommerce" element={<DemoEcommerce />} />
      </Routes>
    </Router>
  );
}

export default App;
