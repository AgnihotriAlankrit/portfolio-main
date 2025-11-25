import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload, FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleResumeDownload = async (e) => {
    e.preventDefault()
    try {
      // Add cache-busting parameter to ensure latest file is fetched
      const timestamp = new Date().getTime()
      const response = await fetch(`/AlankritAgnihotri_Resume.pdf?v=${timestamp}`)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'AlankritAgnihotri_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading resume:', error)
      // Fallback to direct download with cache-busting
      const timestamp = new Date().getTime()
      window.open(`/AlankritAgnihotri_Resume.pdf?v=${timestamp}`, '_blank')
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 overflow-hidden pt-20 md:pt-24 bg-gradient-to-b from-dark-bg via-dark-card to-dark-bg" style={{ zIndex: 1, position: 'relative' }}>
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 inline-block animate-float">
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-br from-accent to-accent-light p-1 shadow-2xl shadow-accent/50">
            <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center overflow-hidden">
              {/* Profile image */}
              <img 
                src="/profile.jpg" 
                alt="Alankrit Agnihotri"
                className="w-full h-full object-cover scale-125 translate-x-[-2%]"
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-text-primary flex flex-wrap justify-center items-baseline gap-3 md:gap-4 lg:gap-6">
          <span className="tracking-wide">Alankrit</span>
          <span className="text-accent glow-text">Agnihotri</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-12 font-medium leading-relaxed">
          Marketing <span className="text-accent">|</span> Analytics <span className="text-accent">|</span> Product Management
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="https://www.linkedin.com/in/alankrit-agnihotri/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-dark-bg font-bold rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.6)] min-w-[200px] justify-center"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
          
          <a
            href="mailto:AlankritAgnihotri@gmail.com"
            className="group flex items-center gap-2 px-8 py-4 bg-dark-card hover:bg-dark-lighter text-text-primary font-bold rounded-3xl border-2 border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] min-w-[200px] justify-center"
          >
            <FaEnvelope className="text-xl group-hover:text-accent" />
            Email
          </a>

          <a
            href="/AlankritAgnihotri_Resume.pdf"
            onClick={handleResumeDownload}
            className="group flex items-center gap-2 px-8 py-4 bg-dark-card hover:bg-dark-lighter text-text-primary font-bold rounded-3xl border-2 border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] min-w-[200px] justify-center"
            download="AlankritAgnihotri_Resume.pdf"
          >
            <FaFileDownload className="text-xl group-hover:text-accent" />
            Resume
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContact}
          className="animate-bounce-slow text-accent text-4xl cursor-pointer hover:text-accent-light transition-colors"
          aria-label="Scroll down"
        >
          <FaChevronDown />
        </button>
      </div>
    </section>
  )
}

export default Hero

