import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Menu, MessageSquare, Plus, Settings, User } from 'lucide-react';
import { motion } from 'framer-motion';
import './DemoAI.css';

const DemoAI = () => {
  const [input, setInput] = useState('');

  return (
    <div className="demo-ai-wrapper">
      {/* Demo Banner */}
      <div className="demo-banner">
        <Link to="/" className="back-btn"><ArrowLeft size={16}/> Back to Portfolio</Link>
        <span className="demo-badge">Made by Ishan</span>
      </div>

      {/* App Layout */}
      <div className="ai-app">
        {/* Sidebar */}
        <aside className="ai-sidebar">
          <button className="new-chat-btn"><Plus size={16} /> New Chat</button>
          
          <div className="history-list">
            <p className="history-title">Recent</p>
            <div className="history-item"><MessageSquare size={14}/> Website redesign plan</div>
            <div className="history-item"><MessageSquare size={14}/> React performance tips</div>
            <div className="history-item"><MessageSquare size={14}/> Marketing copy draft</div>
          </div>

          <div className="sidebar-bottom">
            <div className="sidebar-btn"><User size={16}/> Profile</div>
            <div className="sidebar-btn"><Settings size={16}/> Settings</div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ai-main">
          <header className="ai-header">
            <button className="menu-btn"><Menu size={20} /></button>
            <h2>Nexus AI</h2>
          </header>

          <div className="chat-container">
            <motion.div 
              className="message ai-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="avatar ai-avatar">N</div>
              <div className="message-content">
                <p>Hello! I'm Nexus, an advanced AI assistant. How can I help you accelerate your workflow today?</p>
              </div>
            </motion.div>

            <motion.div 
              className="message user-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="message-content">
                <p>Can you show me a premium UI dashboard layout?</p>
              </div>
            </motion.div>

            <motion.div 
              className="message ai-message"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className="avatar ai-avatar">N</div>
              <div className="message-content">
                <p>Absolutely. The interface you are currently interacting with is a pristine example of modern UI design, featuring glassmorphism, responsive grid layouts, and minimalist typography.</p>
              </div>
            </motion.div>
          </div>

          <div className="input-area">
            <div className="input-box">
              <input 
                type="text" 
                placeholder="Message Nexus..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="send-btn" disabled={!input}><Send size={18} /></button>
            </div>
            <p className="disclaimer">Nexus AI can make mistakes. Consider verifying important information.</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DemoAI;
