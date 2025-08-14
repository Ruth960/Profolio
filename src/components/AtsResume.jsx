import React from 'react';
import resumeData from '../data/resume.json';

export default function AtsResume() {
  return (
    <div>
      <h1>{resumeData.name}</h1>
      <p>Email: {resumeData.contact.email}</p>
      <p>Phone: {resumeData.contact.phone}</p>
      <p>LinkedIn: {resumeData.contact.linkedin}</p>
      <p>Website: {resumeData.contact.website}</p>

      <h2>Summary</h2>
      <p>{resumeData.summary}</p>

      <h2>Work Experience</h2>
      {resumeData.experience.map((job, index) => (
        <div key={index}>
          <h3>{job.title}</h3>
          <p>{job.company} | {job.location} ({job.dates})</p>
          <ul>
            {job.description.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      ))}

      <h2>Education</h2>
      {resumeData.education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.degree}</h3>
          <p>{edu.institution} ({edu.dates})</p>
          {edu.grade && <p>Final Grade: {edu.grade}</p>}
        </div>
      ))}

      <h2>Skills</h2>
      {Object.keys(resumeData.skills).map((category, catIndex) => (
        <div key={catIndex}>
          <h3>{category}</h3>
          <ul>
            {resumeData.skills[category].map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}

        <h2>Projects</h2>
        {resumeData.projects.map((proj, index) => (
            <div key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            </div>
        ))}

        <h2>Internships</h2>
        {resumeData.internships.map((internship, index) => (
            <div key={index}>
            <h3>{internship.title}</h3>
            <p>{internship.company}</p>
            <ul>
                {internship.tasks.map((task, i) => <li key={i}>{task}</li>)}
            </ul>
            </div>
        ))}
    </div>
  );
}
