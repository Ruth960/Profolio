import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'




function App() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor:  '#111827',
        color:'white',
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
   
   </div>

  );
}

export default App;