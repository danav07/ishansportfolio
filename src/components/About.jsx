import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-logo-container">
              <img src="/logo.png" alt="Ishan Editor & Developer Logo" className="about-logo" />
            </div>
            <p className="lead">
              I am a digital product creator who bridges the gap between design and engineering.
            </p>
            <p>
              I am a Digital Product Creator based in India, specializing in building exceptional digital experiences. By leveraging the power of modern web technologies and AI, I turn ideas into fully functional, beautiful, and market-ready products.
            </p>
            <p>
              My expertise spans across UI design, front-end development with CSS and React, video/photo editing, and crafting effective marketing plans. I don't just write code; I build solutions that users love and businesses grow with.
            </p>
            
            <div className="skills">
              <span className="skill-tag">UI/UX Design</span>
              <span className="skill-tag">React & CSS</span>
              <span className="skill-tag">AI-Assisted Dev</span>
              <span className="skill-tag">Video Editing</span>
              <span className="skill-tag">Marketing Strategy</span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
