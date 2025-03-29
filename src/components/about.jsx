

export default function About() {
  

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      padding: '150px',
      marginRight: '1px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    }}>
      <div
        style={{
          flex: 1,
          marginRight: '50px',
          backgroundColor: 'transparent',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
   
        }}
      >
        <h1 style={{ color: 'white', textAlign:'center', margin: 30 }}>About Me</h1>
        <div style={{ textAlign: 'justify' }}>
          <p style={{ padding: 10 }}>
            I am a tech-driven problem solver passionate about emerging technologies and data-driven solutions.
            I have worked on projects
            that integrate AI, IoT, and automation to tackle real-world challenges. My experience includes
            developing smart systems for agriculture, home automation, and intelligent assistant.
          </p>
          <p style={{ padding: 10 }}>
            Beyond technology, I am committed to driving impact through innovation,
            particularly in areas like sustainability.
          </p>
          <p style={{ padding: 10 }}>
            I am seeking opportunities to collaborate on projects that leverage technology to drive positive
            change and create value for society. Feel free to reach out if you share similar interests or have
            exciting projects in mind!
          </p>
        </div>
      </div>

      <div
        style={{
          borderRadius: '50%',
          backgroundColor: 'transparent',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <img
          src="Ruthim.png"
          alt="my profile"
          style={{
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 8px 18px rgba(48, 26, 18, 0.2)',
            border: '10px  solid dark',
          }}
        />
      </div>
    </div>
    
  );
}