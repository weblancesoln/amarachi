import React from 'react'

interface ExperienceItem {
  date: string
  title: string
  company: string
  responsibilities: string[]
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      date: 'October 2024 – Current',
      title: 'Administrative Officer | Content Creator',
      company: 'GTEXT HOLDINGS · Lagos, Nigeria',
      responsibilities: [
        'Oversee daily administrative operations, including client records management, documentation, and official correspondence',
        'Coordinate meetings, schedules, and follow-ups with prospective investors and key stakeholders',
        'Provide end-to-end administrative support to the sales team through data entry, report preparation, and performance tracking',
        'Manage and maintain organized records of client interactions, ensuring timely responses',
        'Serve as communication bridge between departments to streamline workflows and improve internal collaboration',
        'Create engaging digital content (text, visuals, videos) for marketing campaigns and brand visibility',
        'Manage company social media accounts including content planning, posting, and audience engagement',
        'Assist with estate management functions and support marketing and property promotions'
      ]
    },
    {
      date: 'July 2018 – January 2020',
      title: 'Manager',
      company: 'EZE JOHN ENTERPRISES · Lagos, Nigeria',
      responsibilities: [
        'Managed day-to-day business operations, including staff recruitment, onboarding, and performance evaluations',
        'Oversaw financial activities such as budgeting, expense tracking, and cost control',
        'Maintained high customer satisfaction standards and supervised inventory management'
      ]
    },
    {
      date: 'May 2017 – May 2018',
      title: 'Sales Representative',
      company: 'TEMPLE HILL · Lagos, Nigeria',
      responsibilities: [
        'Engaged prospective customers to promote products and services, supporting sales target achievement',
        'Built and maintained strong customer relationships through clear communication',
        'Identified customer needs and delivered tailored product recommendations'
      ]
    },
    {
      date: 'February 2017 – April 2017',
      title: 'Business Studies Tutor',
      company: 'EL SHADDAI TUTORIAL CENTER · Lagos, Nigeria',
      responsibilities: [
        'Delivered structured tutorials for Business Studies students',
        'Developed comprehensive lesson plans and instructional materials',
        'Provided individualized academic support to improve student performance'
      ]
    }
  ]

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2>Experience</h2>
        {experiences.map((exp, index) => (
          <article key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <span className="date">{exp.date}</span>
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <ul>
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
