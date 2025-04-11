import React, { useContext } from 'react';
import Navbar from './navBar.jsx';
import About from '../components/about.jsx';
import Header from '../components/header.jsx';
import Projects from '../components/project.jsx';
import Skills from '../components/skills.jsx';
import Contacts from '../components/contacts.jsx';
import ThemeContext from '../contexts/ThemeContext';

export default function Home() {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? 'rgb(21, 3, 62)' : '#f8fafc',
        color: isDarkMode ? 'white' : '#334155',
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      <Navbar
        title='Portfolio'
        links={[
          { text: 'Home', path: 'home' },
          { text: 'About', path: 'about' },
          { text: 'Projects', path: 'projects' },
          { text: 'Skills', path: 'skills' },
          { text: 'Contacts', path: 'contacts'}
        ]}
      />
       
      <div id='home'><Header /></div>
      <div id='about'><About/></div>
      <div id='projects'><Projects /></div> 
      <div id='skills'><Skills/></div>
      <div id='contacts'><Contacts/></div>
    </div>
  );
}