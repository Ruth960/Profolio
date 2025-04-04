export default function Project() {
  
  const styles = {
    section: {
      padding: '80px 24px',
      backgroundColor: 'none',
      color: 'white',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'space-between',
      padding: '150px',
      
      
    },
    
    card: {
      backgroundColor: 'transparent',
      border: '20x solid rgb(244, 255, 255, o.19',
      backdropFilter: blur('30px'),
      borderRadius: '12px',
      padding: '16px',
      justifyContent: 'space-between',
      alignItems:'center',
      width:'30%',
      marginBottom: '5px',
      boxShadow: '2px 4px 8px rgb(247, 238, 238)',
      transition: 'box-shadow 0.3s',
      Animation: 'fadeIn 1s ease-in-out',
      
    },
    
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '8px',
      color: '#fff',
      textAlign:'center'
    },
    cardDescription: {
      color: '#fdd',
      marginBottom: '16px',
    },
    tagsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '16px',
    },
    tag: {
      fontSize: '0.75rem',
      padding: '4px 12px',
      borderRadius: '9999px',
      backgroundColor: '#f3e8ff',
      color: '#9333ea',
    },
    button: {
      alignItems: 'right',
      backgroundColor: 'blueviolet',
      padding: '10px',
      margin: '1',
      borderRadius: '20px',
      color: 'white',
      textDecoration: 'none',
      display: 'inline-block',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    buttonHover: {
      opacity: '0.2',
      backgroundColor: 'blue',
    },
    buttonsContainer: {
      display: 'flex',
      gap: '16px',
    },
    
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
    
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>IoT-Based Hydroponic System</h2>
          <p style={styles.cardDescription}>
            Developed an automated hydroponic farming system using IoT
            technologies, focusing on data pipeline setup and sensor
            integration.
          </p>
          <div style={styles.tagsContainer}>
            <span style={styles.tag}>IoT</span>
            <span style={styles.tag}>Python</span>
            <span style={styles.tag}>Hardware</span>
          </div>
          <div style={styles.buttonsContainer}>
            <a
              href="https://github.com/Ruth960/IoT-based-Hydroponic-System"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View Code
            </a>
          </div>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Home Automation System</h2>
          <p style={styles.cardDescription}>
            The project aims to enhance convenience and efficiency by
            integrating technology into our daily lives. By automating tasks
            creating a seamless and personalized living experience.
          </p>
          <div style={styles.tagsContainer}>
            <span style={styles.tag}>IoT</span>
            <span style={styles.tag}>Arduino</span>
            <span style={styles.tag}>Hardware</span>
          </div>
          <div style={styles.buttonsContainer}>
            <a
              href="https://github.com/Ruth960/Home-Automation-"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View Code
            </a>
          </div>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Automatic Number Plate Recognition</h2>
          <p style={styles.cardDescription}>
            Programmed a system for automatic detection and recognition of
            vehicle license plates using image processing techniques.
          </p>
          <div style={styles.tagsContainer}>
            <span style={styles.tag}>Python</span>
            <span style={styles.tag}>OpenCV</span>
            <span style={styles.tag}>Teslaflow</span>
          </div>
          <div style={styles.buttonsContainer}>
            <a
              href="https://github.com/Ruth960"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View Code
            </a>
          </div>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Personal Portfolio</h2>
          <p style={styles.cardDescription}>
            Developed a personal portfolio website to showcase my projects and
            skills using React and Tailwind CSS.
          </p>
          <div style={styles.tagsContainer}>
            <span style={styles.tag}>React</span>
            <span style={styles.tag}>Tailwind</span>
            <span style={styles.tag}>Web</span>
          </div>
          <div style={styles.buttonsContainer}>
            <a
              href="https://profolio-gules.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Ruth960/Profolio"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View Code
            </a>
          </div>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Farm Connect</h2>
          <p style={styles.cardDescription}>
            FarmConnect is a digital platform that connects small-scale farmers
            with buyers, ensuring fair prices and reducing middlemen. It
            features SMS verification, a farmer dashboard, and plans for a
            mobile app to enhance market access and agricultural sustainability.
          </p>
          <div style={styles.tagsContainer}>
            <span style={styles.tag}>React</span>
            <span style={styles.tag}>Web</span>
           
          </div>
          <div style={styles.buttonsContainer}>
            <a
              href="https://farm-connect-sigma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Ruth960/farm-connect"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View Code
            </a>
          </div>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Scientific Calculator</h2>
          <p style={styles.cardDescription}>
            Developed a scientific calculator that performs various mathematical
            operations, including trigonometric functions, logarithms.
          </p>
          <div style={styles.tagsContainer}>
            <span style={styles.tag}>JavaScript</span>
            <span style={styles.tag}>CSS</span>
            <span style={styles.tag}>HTML</span>
          </div>
          <div style={styles.buttonsContainer}>
            <a
              href="https://scientific-calculator-delta-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Ruth960"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}