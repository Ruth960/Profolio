import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaMedium, FaGithub } from 'react-icons/fa'; // Import icons

function Header() {
  const textRef = useRef(null);

  useEffect(() => {
    const phrases = [
      'Frontend Developer',
      'IoT Specialist',
      'React and React Native Developer',
      'Technical Writer',
    ];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      if (isDeleting) {
        if (textRef.current) {
          textRef.current.textContent = currentPhrase.substring(
            0,
            currentCharIndex - 1
          );
        }
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        if (textRef.current) {
          textRef.current.textContent = currentPhrase.substring(
            0,
            currentCharIndex + 1
          );
        }
        currentCharIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1500;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    };

    type();
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.5rem',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          zIndex: 10,
          maxWidth: '72rem',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            animation: 'fadeIn 5s ease-in-out',
          }}
        >
          Hello, I'm{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(to right,rgb(49, 10, 87),rgb(235, 16, 125))',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Ruth Wanjiru Mwaniki
          </span>
        </h1>
        <h2
          style={{
            fontSize: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          I'm a{' '}
          <span
            ref={textRef}
            style={{
              backgroundImage: 'linear-gradient(to right, #4f46e5, #9333ea)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          ></span>
          <span
            style={{
              animation: 'blink 1s step-end infinite',
            }}
          >
            |
          </span>
        </h2>
        <p
          style={{
            fontSize: '1rem',
            opacity: 0.8,
            marginBottom: '2rem',
            maxWidth: '48rem',
            margin: '0 auto',
          }}
        >
          A passionate and driven individual with a strong desire to make a positive impact in the world
          using technology. I am currently working on FarmConnect, a platform aimed at connecting small-scale
          farmers to fair markets, leveraging digital solutions to enhance agricultural sustainability.
        </p>
        <div
          style={{
            backgroundColor: 'linear-gradient(to right,rgb(14, 83, 110),rgb(234, 51, 210))',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
          }}
        >
          <a
            href="#projects"
            style={{
              padding: '0.75rem 2rem',
              margin: 20,
              backgroundImage: 'linear-gradient(to right, #9333ea, #ec4899)',
              borderRadius: '9999px',
              color: 'white',
              fontWeight: '500',
              textAlign: 'center',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.target.style.opacity = '1')}
          >
            View My Work
          </a>
        </div>
      </div>
      <a
        href="#about"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
        }}
        aria-label="Scroll down"
      >
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '2.5rem',
            width: '8rem',
            height: '8rem',
            borderRadius: '50%',
            backgroundImage: 'linear-gradient(to right, #9333ea, #ec4899)',
            opacity: 0.2,
            filter: 'blur(3rem)',
          }}
        ></div>
      </a>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '200px',
          margin: '1rem auto',
        }}
      >
        <a
          href="https://www.linkedin.com/in/ruth-wanjiru-mwaniki-485945205/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '0.5rem',
            margin: '0 0.5rem',
            borderRadius: '50%',
            backgroundColor: '#0077B5', // LinkedIn color
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://medium.com/@ruthmwaniki960"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '0.5rem',
            margin: '0 0.5rem',
            borderRadius: '50%',
            backgroundColor: '#000000', // Medium color
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaMedium />
        </a>
        <a
          href="https://github.com/Ruth960"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '0.5rem',
            margin: '0 0.5rem',
            borderRadius: '50%',
            backgroundColor: '#171515', // GitHub color
            color: 'white',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

export default Header;