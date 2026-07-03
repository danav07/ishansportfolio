import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Monitor, Zap } from 'lucide-react';
import './DeviceSpecs.css';

const DeviceSpecs = () => {
  const specs = [
    {
      id: 0,
      name: 'System',
      desc: 'HP Victus Series Laptop',
      iconType: 'lucide',
      icon: (
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" className="victus-logo">
          <path d="M20 20 L50 80 L80 20 L60 20 L50 40 L40 20 Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      id: 1,
      name: 'Display',
      desc: '144Hz High Refresh Rate',
      iconType: 'lucide',
      icon: <Monitor size={40} className="wifi-icon" />,
    },
    {
      id: 2,
      name: 'Processor',
      desc: 'Intel Core i5 13th Gen (13420H)',
      iconType: 'img',
      iconSrc: 'https://cdn.simpleicons.org/intel/white',
      iconClass: 'intel-logo',
    },
    {
      id: 3,
      name: 'Graphics Card',
      desc: 'NVIDIA GeForce RTX 2050 (4GB)',
      iconType: 'img',
      iconSrc: 'https://cdn.simpleicons.org/nvidia/76B900',
      iconClass: 'nvidia-logo',
    },
    {
      id: 4,
      name: 'Memory (RAM)',
      desc: '16 GB DDR4',
      iconType: 'img',
      iconSrc: 'https://cdn.simpleicons.org/hyperx/FF0000',
      iconClass: 'hyperx-logo',
    },
    {
      id: 5,
      name: 'Network',
      desc: 'WiFi (50 Mbps)',
      iconType: 'lucide',
      icon: <Wifi size={40} className="wifi-icon" />,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="specs" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          My Workspace
        </motion.h2>
        
        <motion.div 
          className="specs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {specs.map((spec) => (
            <motion.div key={spec.id} className="spec-card" variants={itemVariants}>
              <div className="spec-icon-wrapper">
                {spec.iconType === 'img' ? (
                  <img src={spec.iconSrc} alt={spec.name} className={`spec-icon ${spec.iconClass}`} />
                ) : (
                  spec.icon
                )}
              </div>
              <h3 className="spec-name">{spec.name}</h3>
              <p className="spec-desc">{spec.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DeviceSpecs;
