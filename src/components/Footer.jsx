import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
      <p>&copy; {new Date().getFullYear()} Ishan Verma. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
