function Header() {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#333",
          padding: "2rem",
          fontFamily: "sans-serif",
        }}
      >
        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "2rem",
            marginBottom: "3rem",
            color: "#333",
          }}
        >
        </nav>
  
        {/* Main Content Card */}
        <div
          style={{
            position: "relative",
            backgroundColor: "white",
            borderRadius: "1.5rem",
            padding: "2rem",
            overflow: "hidden",
            display: "flex",
          }}
        >
        
                <div className="flex-1">
                <p
                  style={{
                  fontSize: "0.875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "1rem",
                  color: "#666",
                  }}
                >
                 Ruth's Profolio
                <h2
                  style={{
                  fontSize: "2.5rem",
                  fontFamily: "serif",
                  marginBottom: "1.5rem",
                  color: "#333",
                  }}
                >
                  Hello, my name is <span className="block">Ruth Wanjiru Mwaniki</span>
                </h2>
                <p
                  style={{
                  color: "#666",
                  marginBottom: "2rem",
                  maxWidth: "28rem",
                  }}
                >
                  
                </p>
                <p
                  style={{
                  color: "#333",
                  alignContent:'left',
                  fontSize:'0.9rem', 
                  paddingBottom:'2rem',
                  textAlign:'justify',
                  }}
                >
                  A passionate and driven individual with a strong desire to make a positive impact in the world using technology.  
                  I am currently working on FarmConnect, a platform aimed at connecting small-scale farmers to fair markets, 
                  leveraging digital solutions to enhance agricultural sustainability. 
                </p>
                <h1>Education</h1>
                <h2>Jain University</h2>
                <p>Bachelor of Technology in <br/>
                Computer Science and Engineering<br/>(Internet of Things)</p>
                </p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <button
                  style={{
                    backgroundColor: "transparent",
                    color: "#333",
                    border: "1px solid #ddd",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#333";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "black";
                  }}
                  >
                   <a href="https://github.com/Ruth960" target="_blank" rel="noopener noreferrer">Github</a>
                  </button>
                  <button
                  style={{
                    backgroundColor: "transparent",
                    color: "#333",
                    border: "1px solid #ddd",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "black";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "black";
                  }}
                  >
                  <a href="https://linkedin.com/in/ruth-wanjiru-mwaniki-485945205/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </button>
                  <button
                  style={{
                    backgroundColor: "transparent",
                    color: "#333",
                    border: "1px solid #ddd",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#333";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
                  >
                  <a href="https://medium.com/@ruthmwaniki960" target="_blank" rel="noopener noreferrer">Medium</a>
                  </button>
                  
                </div>
                </div>
            
                {/* Right Section */}
          <div
            className="flex-1 flex justify-end"
            style={{
              position: "relative",
            }}
          >
            {/* Curved shape */}
            <div
              style={{
                position: "absolute",
                top: '0%',
                right: 0,
                bottom: 0,
                left: '40%',
                margin:'0',
                backgroundColor: '#333',
                clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            ></div>
  
            <img
              src="Ruthim.png"
              alt="Portfolio hero image"
              style={{
                position: "absolute",
                height: "auto",
                width: "300px",
                objectFit: "contain",
                objectPosition: "top right",
                
              }}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    )
  }
  
  export default Header
