import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Lumina E-Commerce',
    category: 'Full Stack App',
    description: 'A sleek, premium e-commerce platform designed for luxury brands. Features a responsive grid, smooth animations, and a minimalist aesthetic.',
    image: project1,
    tags: ['React', 'CSS', 'UI/UX', 'Framer Motion'],
    demoUrl: '/demo/ecommerce',
    githubUrl: 'https://github.com/danav07/ishansportfolio'
  },
  {
    id: 2,
    title: 'Nexus AI Dashboard',
    category: 'AI Dashboard',
    description: 'A dark-mode analytics dashboard powered by AI. Includes interactive chat UI, glassmorphism elements, and professional typography.',
    image: project2,
    tags: ['React', 'Dashboard', 'UI Design'],
    demoUrl: '/demo/ai-dashboard',
    githubUrl: 'https://github.com/danav07/ishansportfolio'
  },
  {
    id: 3,
    title: 'Marketing Website',
    category: 'Marketing Website',
    description: 'A high-conversion landing page for a SaaS startup. Features clear call-to-actions, social proof sections, and fast loading speeds.',
    image: project3,
    tags: ['React', 'HTML5', 'CSS3'],
    demoUrl: '#',
    githubUrl: 'https://github.com/danav07/ishansportfolio'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-alt">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
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
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.demoUrl.startsWith('/') && project.demoUrl !== '#' ? (
                      <Link to={project.demoUrl} className="project-btn demo-btn">
                        <ExternalLink size={18} /> View Live Demo
                      </Link>
                    ) : (
                      <a href={project.demoUrl} className="project-btn demo-btn">
                        <ExternalLink size={18} /> View Demo
                      </a>
                    )}
                    <a href={project.githubUrl} className="project-btn github-btn">
                      <Code2 size={18} /> Code
                    </a>
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
