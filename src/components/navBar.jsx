import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar({ links }) {
  return (
    <nav style={{
        width: '89.6%',
        marginRight:'75px',
        backgroundColor: '#333',
        color: 'white',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '20px',
        alignItems: 'center',
        
        position: 'fixed', // Make the navbar fixed
        top: 0, // Position it at the top
        zIndex: 1000 // Ensure it stays above other elements
    }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        {links && links.map((link, index) => (
          <ScrollLink 
            key={index}
            to={link.path} 
            smooth={true} 
            duration={500} 
            style={{ color: 'white', borderRadius: '5px', padding: '10px 20px', textDecoration: 'none', cursor: 'pointer' }}
          >
            {link.text}
          </ScrollLink>
        ))}
      </div>
    </nav>
  );
}