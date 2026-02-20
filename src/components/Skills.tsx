import React from 'react'

const Skills: React.FC = () => {
  const skills = [
    'Leadership',
    'Communication',
    'Time Management',
    'Problem Solving',
    'Adaptability',
    'Teamwork',
    'Attention to Detail',
    'Critical Thinking'
  ]

  const certifications = [
    'Artificial Intelligence in Human Resource Management (2026)',
    'Diploma in Modern Human Resource Management (In View)'
  ]

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              <span>{skill}</span>
            </span>
          ))}
        </div>

        <h3 className="subsection-title">Certifications & Licenses</h3>
        <ul className="cert-list">
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>

        <h3 className="subsection-title">Hobbies & Interests</h3>
        <p className="hobbies">Reading · Photography · Physical Exercise · Research · Singing</p>

        <h3 className="subsection-title">Awards & Honors</h3>
        <p className="awards">Best in English Language Certificate, Angela Nursery and Primary School</p>
      </div>
    </section>
  )
}

export default Skills
