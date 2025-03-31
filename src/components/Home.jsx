import Navbar from './navBar.jsx';
import About from '../components/about.jsx';
import Header from '../components/header.jsx';
import Projects from '../components/project.jsx';
import Skills from '../components/skills.jsx';
import Contacts from '../components/contacts.jsx'



export default function Home() {
    return (
      <div
      style={{
        
      
        backgroundImage:''
      }}
      >
        <Navbar
          title='Profolio'
          links={[
            { text: 'Home', path: 'home' },
            { text: 'About', path: 'about' },
            { text: 'Projects', path: 'projects' },
            { text: 'Contacts', path: 'contacts'}
          ]}
        />
         
                <div id='home'><Header /></div>
                <div id='about'> <About/></div>
                <div id='projects'><Projects /></div> 
                <div id='skills'><Skills/> </div>
                <div id='contacts'><Contacts/></div> 
                 
                           
                
      </div>
    );
  }

