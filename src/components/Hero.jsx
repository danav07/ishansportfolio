import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-effects" />
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="remote-badge"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="pulse-dot"></span>
            Available for Remote Roles Worldwide & Across All Time Zones
          </motion.div>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hi, I am Ishan Verma
          </motion.p>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Digital Product <br/><span className="gradient-text">Creator.</span>
          </motion.h1>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, filter: "blur(5px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I blend code, UI design, and marketing strategy to build premium web apps and experiences that stand out.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="btn btn-outline resume-btn">
              <FileText size={18} /> Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Talk
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
