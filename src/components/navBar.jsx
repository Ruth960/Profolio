import React from "react";

export default function Navbar(props) { 
  const {title, links, pageheader} = props;

  return (
    <nav style={{
        width: '100%',
        backgroundColor: '#b5b1ff',
        color: 'white',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        <div>
            <h1>{title}</h1>
        </div>
        <h1>{pageheader}</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
            {links && links.slice(0, 4).map((link, index) => (
              <button key={link.id || index} style={{ backgroundColor: '#130614', color: 'white', borderRadius: '5px', padding: '10px 20px' }}>
                {link.text}
              </button>
            ))}
        </div>      
    </nav>
  );
}
