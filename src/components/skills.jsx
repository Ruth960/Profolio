function Skills() {
    // Skill categories with their respective skills
    const skillCategories = [
      {
        skills: [
          { name: "C", level: 60 },
          { name: "HTML", level: 85 },
          { name: "CSS", level: 80 },
          { name: "JavaScript", level: 70 },
          { name: "Python", level: 75 },
          { name: "IoT", level: 80 },
          { name: "Machine Learning", level: 65 },
          { name: "Data Analysis", level: 75 },
          { name: "Arduino", level: 85 },
          { name: "ESP8266", level: 80 },
          { name: "Raspberry Pi", level: 70 },
          { name: "Microsoft Excel", level: 85 },
          { name: "Tableau", level: 70 },
          { name: "Power BI", level: 75 },
        ],
      },
    ]
  
    return (
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          </div>
  
          <div className="max-w-4xl mx-auto">
            {/* Skill Categories */}
            <div className="grid md:grid-cols-2 gap-10">
              {skillCategories.map((category) => (
                <div key={category.name}>
                  <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
  
                  {/* Skills with progress bars */}
                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
  
            {/* Additional Skills */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-center">Currently Learning</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["TypeScript", "Node.js", "Express", "MongoDB", "Redux"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills
  
  