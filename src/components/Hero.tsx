import React from 'react'

const Hero: React.FC = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className="hero">
      <div className="hero-content">
        <p className="hero-tagline">Project Coordination & Operational Management</p>
        <h1>Amarachi Juliet <span className="accent">Uchechukwu</span></h1>
        <p className="hero-subtitle">Administrative Officer · Content Creator · Operations Professional</p>
        <a href="#contact" className="cta-button" onClick={handleContactClick}>
          Get in Touch
        </a>
      </div>
      <div className="hero-image">
        <img src="/assets/amarachi-photo.png" alt="Amarachi Juliet Uchechukwu - Professional portrait" />
      </div>
    </header>
  )
}

export default Hero
