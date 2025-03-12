import React from 'react';

import Home from '../components/Home.jsx';
import About from '../components/about.jsx';

export default function HomePage() {
   return(
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '50px', textAlign: 'center', borderRadius: '1px', backgroundColor: 'white', minHeight: '100vh' }}>
            <div style={{ maxWidth: '800px', margin: '4px auto', backgroundColor: '#f0f0f0', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                
                 <Home />
                 <About />
                 <div className="w-full h-full bg-gray-200">
                    
                 </div>
           </div>
         </div>
    );
} 