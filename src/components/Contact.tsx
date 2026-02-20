import React from 'react'

interface ContactItem {
  icon: string
  text: string
  href?: string
  isLocation?: boolean
}

const Contact: React.FC = () => {
  const contacts: ContactItem[] = [
    {
      icon: 'fas fa-envelope',
      text: 'amaucj@gmail.com',
      href: 'mailto:amaucj@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      text: '+234 803 952 5827',
      href: 'tel:+2348039525827'
    },
    {
      icon: 'fab fa-linkedin-in',
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/amarachi-uchechukwu-ba8a1a2ab',
    },
    {
      icon: 'fas fa-map-marker-alt',
      text: 'Lagos, Nigeria',
      isLocation: true
    }
  ]

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Let's Connect</h2>
        <div className="contact-grid">
          {contacts.map((contact, index) => {
            if (contact.isLocation) {
              return (
                <div key={index} className="contact-card location">
                  <span className="contact-icon">
                    <i className={contact.icon}></i>
                  </span>
                  <span>{contact.text}</span>
                </div>
              )
            }
            return (
              <a
                key={index}
                href={contact.href}
                className="contact-card"
                target={contact.href?.startsWith('http') ? '_blank' : undefined}
                rel={contact.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="contact-icon">
                  <i className={contact.icon}></i>
                </span>
                <span>{contact.text}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
