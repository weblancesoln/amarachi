import React, { useState, useEffect } from 'react'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
        Amarachi J.
      </a>
      <button 
        className="nav-toggle" 
        aria-label="Toggle menu"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
        <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
        <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
        <li><a href="#education" onClick={(e) => handleNavClick(e, 'education')}>Education</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
