


export default function Project() {
    const buttonStyle = {
        alignItems: 'center',
        backgroundColor: 'blueviolet',
        padding: '10px',
        margin:'40px',
        borderRadius: '5px',
        color: 'white',
        textDecoration: 'none',
        display: 'inline-block',
        textAlign: 'center',
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: '#333', gap: '20px', justifyContent: 'space-between', padding: '150px' }}>
            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '30%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px' }}>IoT-Based Hydroponic System</h2>
                <p>Developed an automated hydroponic farming system using IoT technologies, focusing on data pipeline setup and sensor integration.</p>
                <a href="https://github.com/Ruth960" target="_blank" rel="noopener noreferrer" style={buttonStyle}>View Project</a>
            </div>
            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '30%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px' }}>Home Automation System</h2>
                <p>The project aims to enhance convenience and efficiency by integrating technology into our daily lives. By automating tasks creating a seamless and personalized living experience.</p>
                <a href="https://github.com/Ruth960" target="_blank" rel="noopener noreferrer" style={buttonStyle}>View Project</a>
            </div>
            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '30%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px' }}>Automatic Number Plate Recognition</h2>
                <p>Programmed a system for automatic detection and recognition of vehicle license plates using image processing techniques.</p>
                <a href="https://github.com/Ruth960" target="_blank" rel="noopener noreferrer" style={buttonStyle}>View Project</a>
            </div>
            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '30%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px' }}>Personal Portfolio</h2>
                <p>Developed a personal portfolio website to showcase my projects and skills using React and Tailwind CSS.</p>
                <a href="https://profolio-gules.vercel.app/" target="_blank" rel="noopener noreferrer" style={buttonStyle}>View Project</a>
            </div>
            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '30%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px' }}>Farm Connect</h2>
                <p>
                FarmConnect is a digital platform that connects small-scale farmers with buyers, ensuring fair prices and reducing middlemen. It features SMS verification, a farmer dashboard, and plans for a mobile app to enhance market access and agricultural sustainability.
                </p>
                <a href="https://farm-connect-sigma.vercel.app/" target="_blank" rel="noopener noreferrer" style={buttonStyle}>View Project</a>
            </div>
            <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '30%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px' }}>Scientific Calculator</h2>
                <p>
                    Developed a scientific calculator that performs various mathematical operations, including trigonometric functions, logarithms,
                </p>
                <a href="https://scientific-calculator-delta-ten.vercel.app/" target="_blank" rel="noopener noreferrer" style={buttonStyle}>View Project</a>
            </div>
        </div>
    );
}
