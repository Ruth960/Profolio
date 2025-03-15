
export default function About() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#333', padding: '20px', marginRight: '1px' }}>
            <div style={{ flex: 1, marginRight: '20px', backgroundColor: '#fff', color:'black', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h1>About Me</h1>
            <div style={{ textAlign: 'justify' }}>
                <p>
                I am a tech-driven problem solver passionate about emerging technologies and data-driven solutions. With a background in Computer Science and Engineering specializing in IoT, I have worked on projects that integrate AI, data analytics, and automation to tackle real-world challenges. My experience includes developing smart systems for agriculture, home automation, and intelligent assistants, as well as exploring cybersecurity and blockchain applications.
                </p>
                <p>
                Beyond technology, I am committed to driving impact through innovation, particularly in areas like sustainable farming and urban mobility. I am currently working on FarmConnect, a platform aimed at connecting small-scale farmers to fair markets, leveraging digital solutions to enhance agricultural sustainability.
                </p>
                <p>
                I am seeking opportunities to collaborate on projects that leverage technology to drive positive change and create value for society. Feel free to reach out if you share similar interests or have exciting projects in mind!
                </p>
            </div>
            </div>
            <div style={{ flex: 1, backgroundColor: '#fff', color:'black', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h1>Experience</h1>
            <div style={{ marginBottom: '15px' }}>
                <h2>Embedded system internship</h2>
                <p><i>Emertxe</i> 1 month</p>
            </div>
            <div style={{ marginBottom: '15px' }}>
                <h2>Python with AI internship</h2>
                <p><i>Markeble Corporation:</i> 1 month</p>
            </div>
            <div>
                <h2>Software Engineering</h2>
                <p>I'm currently taking a 3-month program at TUM University</p>
            </div>
            </div>
        </div>
        );
}
