import React from 'react';
import { motion } from 'framer-motion';
import { Atom } from 'lucide-react';
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
            <p>
              Beyond technical skills, I pride myself on unwavering loyalty and dedication to the teams I work with—treating every project with full commitment and as if it were my own.
            </p>
            
            <div className="skills">
              <span className="skill-tag">UI/UX Design</span>
              <span className="skill-tag">React & CSS</span>
              <span className="skill-tag">AI-Assisted Dev</span>
              <span className="skill-tag">Video Editing</span>
              <span className="skill-tag">Marketing Strategy</span>
            </div>

            <div className="tools-section">
              <h4 className="tools-title">Video & Creative</h4>
              <div className="tools-grid" style={{ marginBottom: '2rem' }}>
                <div className="tool-item">
                  <img src="/premiere.svg" alt="Premiere Pro Logo" className="tool-icon" />
                  <span>Premiere Pro</span>
                </div>
                <div className="tool-item">
                  <img src="/aftereffects.svg" alt="After Effects Logo" className="tool-icon" />
                  <span>After Effects</span>
                </div>
                <div className="tool-item capcut-item">
                  <img src="/capcut.svg" alt="CapCut Logo" className="tool-icon capcut-icon" />
                  <span>CapCut</span>
                </div>
              </div>

              <h4 className="tools-title">AI Tooling (Pro Versions)</h4>
              <div className="tools-grid" style={{ marginBottom: '2rem' }}>
                <div className="tool-item">
                  <img src="https://cdn.simpleicons.org/anthropic/D97757" alt="Claude Pro Logo" className="tool-icon" />
                  <span>Claude Pro</span>
                </div>
                <div className="tool-item">
                  <img src="https://cdn.simpleicons.org/googlegemini/8E75B2" alt="Gemini Advanced Logo" className="tool-icon" />
                  <span>Gemini Advanced</span>
                </div>
                <div className="tool-item">
                  <div className="tool-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c3aed' }}>
                    <Atom size={32} />
                  </div>
                  <span>Antigravity AI</span>
                </div>
              </div>

              <h4 className="tools-title">Microsoft 365 & Office</h4>
              <div className="tools-grid">
                <div className="tool-item">
                  <img src="https://img.icons8.com/color/48/000000/office-365.png" alt="Microsoft 365 Logo" className="tool-icon" />
                  <span>Microsoft 365</span>
                </div>
                <div className="tool-item">
                  <img src="https://img.icons8.com/color/48/000000/microsoft-word-2019--v2.png" alt="Word Logo" className="tool-icon" />
                  <span>MS Word</span>
                </div>
                <div className="tool-item">
                  <img src="https://img.icons8.com/color/48/000000/microsoft-excel-2019--v1.png" alt="Excel Logo" className="tool-icon" />
                  <span>MS Excel</span>
                </div>
                <div className="tool-item">
                  <img src="https://img.icons8.com/color/48/000000/microsoft-powerpoint-2019--v1.png" alt="PowerPoint Logo" className="tool-icon" />
                  <span>PowerPoint</span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
