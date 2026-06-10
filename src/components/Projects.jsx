import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Aura E-Commerce',
    category: 'Full Stack App',
    description: 'A premium, modern e-commerce platform with dark mode, seamless cart interactions, and a beautiful UI.',
    image: project1,
    tags: ['React', 'CSS', 'Node.js'],
  },
  {
    id: 2,
    title: 'Nexus Analytics',
    category: 'AI Dashboard',
    description: 'An AI-powered data visualization dashboard with glassmorphic elements and real-time insights.',
    image: project2,
    tags: ['React', 'Framer Motion', 'Chart.js'],
  },
  {
    id: 3,
    title: 'Studio Creative',
    category: 'Marketing Website',
    description: 'A high-converting landing page for a creative agency, featuring bold typography and dynamic scroll animations.',
    image: project3,
    tags: ['React', 'Vite', 'Vanilla CSS'],
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-alt">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Featured Work
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <button className="icon-btn" aria-label="View Source">
                      <Code2 size={20} />
                    </button>
                    <button className="icon-btn" aria-label="View Live">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
