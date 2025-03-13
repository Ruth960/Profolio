import Navbar from "./navBar";


export default function Home() {   
    const navLinks = [
        { text: 'Home' },
        { text: 'About' },
        { text: 'Contact' },
        { text: 'Services' },
        { text: 'Projects' },
        { text: 'Blog' },
        { text: 'FAQ' },

    ];
    return (
        <>
            <Navbar
        title= 'Ruth Website'
        links = {navLinks}
            />
    
                
            <div className="home">
                <div>
                    <h1>Ruth Wanjiru</h1>
                    <p>Hi there! I'm Ruth, a tech enthusiast with a Bachelor degree in in Internet of Things. I love exploring innovative solutions through technology and have worked on exciting projects ranging from home automation to AI-driven smart assistants. I'm passionate about creating impactful solutions, whether it's through data analytics, digitalization, or cutting-edge technology.
                    </p>
                    <button style={{ backgroundColor: '#130614', color: 'white',  borderRadius: '5px', width:'100px', hieght:'60px',marginTop:'30px' }}>About Me</button>
                </div>
                <div>
                    <p>.</p>
                </div>
            </div>
        </>
    );
}
