import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar({ links, title }) {
  return (
    <nav style={{
        width: '100%',
        margin: '20 auto',
        background: 'trasparent',
        color: 'white',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between', 
        fontSize: '20px',
        alignItems: 'center',
        position: 'fixed', 
        top: 0, 
        zIndex: 1000,
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '30px'}}>{title}</div> {/* Title on the left */}
      <div style={{ display: 'flex', gap: '10px' }}> {/* Links on the right */}
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
