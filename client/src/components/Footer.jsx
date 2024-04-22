import React from 'react';
import '../index.css'
function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#007bff', 
      color: '#fff', 
      padding: '20px 0', 
      textAlign: 'center', 
      position: 'fixed',
      bottom: 0,
      width: '100%'
    }}>
      <p>&copy; {new Date().getFullYear()} Aryatechno. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
