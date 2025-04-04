function Skills() {
  const skillCategories = [
    {
      name: 'Web Development',
      skills: [
        {name: 'HTML', level: 85,},
        {name: 'CSS', level: 80 },
        {name: 'JavaScript',level: 70, },
      ],
    },
    {
      name: 'Programming',
      skills: [
        {name: 'Python', level: 75,},
        { name: 'C', level: 60,},
        { name: 'Javascript', level: 70,},

      ],
    },
    {
      name: 'IoT & Hardware',
      skills: [
        {
          name: 'Arduino', level: 85,},
        {name: 'ESP8266', level: 80,},
        {name: 'Raspberry Pi',level: 60,},
        {name: 'IoT',level: 80,},
      ],
    },
    {
      name: 'Data & Analytics',
      skills: [
        {
          name: 'Data Analysis',
          level: 75,
        },
        {
          name: 'Machine Learning',
          level: 40,
        },
        {
          name: 'Microsoft Excel',
          level: 85,
        },
        {
          name: 'Tableau',
          level: 70,
        },
      ],
    },
  ]
  
    return (
      <section id="skills" style={{ padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem", color:'white' }}>
            My Skills
          </h2>
          <div
            style={{
              width: "5rem",
              height: "0.25rem",
              background: "linear-gradient(to right, #a855f7, #ec4899)",
              margin: "0 auto 1.5rem",
            }}
          ></div>
          <p
            style={{
              fontSize: "1.125rem",
              maxWidth: "48rem",
              margin: "0 auto",
              opacity: 0.8,
            }}
          >
            Here are my technical skills and proficiency levels across various
            domains.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
          }}
        >
          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-10">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <div
                  style={{
                    backgroundColor: "transparent",
                    borderRadius: "0.75rem",
                    padding: "1.5rem",
                    boxShadow: "0 4px 6px rgba(251, 241, 241, 0.78)",
                    transition: "transform 0.05s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      marginBottom: "1.5rem",
                      textAlign: "center",
                      background: "linear-gradient(to right, #a855f7, #ec4899)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {category.name}
                  </h3>
                  <div>
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        style={{
                          position: "relative",
                          marginBottom: "1.5rem",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "0.5rem",
                            color:'blueviolet'
                          }}
                        >
                          <span style={{ fontWeight: "500" }}>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div
                          style={{
                            height: "0.5rem",
                            backgroundColor: "#e5e7eb",
                            borderRadius: "9999px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              height: "100%",
                              background: "linear-gradient(to right, #a855f7, #ec4899)",
                              borderRadius: "9999px",
                              width: `${skill.level}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
  
  export default Skills
  
  