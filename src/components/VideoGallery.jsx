import React from 'react';
import { motion } from 'framer-motion';
import './VideoGallery.css';

const VideoGallery = () => {
  return (
    <section id="videos" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Editing Portfolio
        </motion.h2>
        
        <div className="video-grid">
          <motion.div 
            className="video-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="portfolio-video-container">
              <iframe 
                src="https://www.instagram.com/reel/DZKLvGbtC2I/embed/" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                allowTransparency="true"
                allow="encrypted-media"
                className="instagram-embed"
              ></iframe>
            </div>
            <div className="video-info">
              <h3 className="video-title">Recent Edit Showcase</h3>
              <p className="video-description">Professional video editing showcase featuring precise cuts, dynamic transitions, and polished color grading.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
