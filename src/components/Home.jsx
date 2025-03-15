import Navbar from './navBar.jsx';
import Contact from '../components/contactForm.jsx';
import About from '../components/about.jsx';
import Header from '../components/header.jsx';
import Projects from '../components/project.jsx';
import Skills from '../components/skills.jsx';


export default function Home() {
    return (
      <div>
        <Navbar
          links={[
            { text: 'Home', path: 'home' },
            { text: 'About', path: 'about' },
            { text: 'Projects', path: 'projects' },
            { text: 'Contact', path: 'contact' }
          ]}
        />
         
                <div id='home'><Header /></div>
                <div id='about'> <About/></div>
                <div id='projects'><Projects /></div> 
                <div id='projects'><Skills/> </div> 
                <div id='projects'><Contact/></div> 
                           
               
      </div>
    );
  }