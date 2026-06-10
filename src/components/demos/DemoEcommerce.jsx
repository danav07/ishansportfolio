import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Search, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import './DemoEcommerce.css';

const DemoEcommerce = () => {
  return (
    <div className="demo-shop-wrapper">
      {/* Demo Banner */}
      <div className="demo-banner-shop">
        <Link to="/" className="back-btn-shop"><ArrowLeft size={16}/> Back to Portfolio</Link>
        <span className="demo-badge-shop">Made by Ishan</span>
      </div>

      {/* Shop Navigation */}
      <nav className="shop-nav">
        <div className="shop-nav-left">
          <button className="shop-menu-btn"><Menu size={20}/></button>
          <div className="shop-logo">LUMINA</div>
        </div>
        <div className="shop-nav-links">
          <a href="#">New Arrivals</a>
          <a href="#">Collections</a>
          <a href="#">Accessories</a>
          <a href="#">Journal</a>
        </div>
        <div className="shop-nav-icons">
          <Search size={20} />
          <div className="cart-icon">
            <ShoppingBag size={20} />
            <span className="cart-count">2</span>
          </div>
        </div>
      </nav>

      {/* Hero Product */}
      <main className="shop-main">
        <div className="product-container">
          <motion.div 
            className="product-image-col"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="product-image-wrapper">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800" alt="Premium Watch" className="product-img main-img" />
            </div>
            <div className="product-thumbnails">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=200" alt="Thumb 1" className="thumb active" />
              <div className="thumb empty"></div>
              <div className="thumb empty"></div>
            </div>
          </motion.div>

          <motion.div 
            className="product-info-col"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="breadcrumbs">
              <span>Home</span> / <span>Accessories</span> / <span>Watches</span>
            </div>
            
            <h1 className="product-title">The Chronos Series</h1>
            <p className="product-price">$245.00</p>
            
            <p className="product-desc">
              Precision engineering meets minimalist design. The Chronos series is crafted from aerospace-grade aluminum and features a scratch-resistant sapphire crystal face.
            </p>

            <div className="product-variants">
              <h3>Color</h3>
              <div className="color-options">
                <button className="color-btn active" style={{backgroundColor: '#e5e5e5'}}></button>
                <button className="color-btn" style={{backgroundColor: '#111111'}}></button>
                <button className="color-btn" style={{backgroundColor: '#7c5344'}}></button>
              </div>
            </div>

            <button className="add-to-cart-btn">Add to Bag</button>

            <div className="product-details-accordion">
              <div className="accordion-item">
                <h4>Details</h4>
                <p>40mm dial, 3ATM water resistant, interchangeable Italian leather strap.</p>
              </div>
              <div className="accordion-item border-top">
                <h4>Shipping & Returns</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default DemoEcommerce;
