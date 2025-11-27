import React, { useEffect, useRef, useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaHeart } from 'react-icons/fa'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'AlankritAgnihotri@gmail.com',
      href: 'mailto:AlankritAgnihotri@gmail.com',
      color: 'from-red-500 to-pink-500',
      bgImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/alankrit-agnihotri/',
      color: 'from-blue-500 to-cyan-500',
      bgImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop'
    },
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/alankrit-agnihotri/',
      label: 'LinkedIn'
    },
    {
      icon: <FaGithub />,
      href: 'https://github.com/AgnihotriAlankrit',
      label: 'GitHub'
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com',
      label: 'Instagram'
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-dark-card to-dark-bg overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-text-primary tracking-normal">
            Let's <span className="text-accent glow-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-accent mb-8 rounded-full mx-auto"></div>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Always happy to connect, learn, and click whether it's ideas or photos :)
          </p>
        </div>

        {/* Contact Methods */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative p-6 rounded-3xl border-2 border-accent/30 hover:border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,136,0.3)] text-center overflow-hidden"
            >
              {/* Background Image with Blur */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm group-hover:blur-none transition-all duration-300"
                style={{
                  backgroundImage: `url(${method.bgImage})`
                }}
              ></div>
              
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-dark-bg/80 group-hover:bg-dark-bg/70 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`text-5xl mb-4 bg-gradient-to-r ${method.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block`}>
                  {method.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">{method.label}</h3>
                <p className="text-text-secondary text-lg md:text-xl break-all">{method.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div
          className={`border-t border-dark-lighter pt-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-14 h-14 flex items-center justify-center bg-dark-card rounded-full border-2 border-accent/30 hover:border-accent text-text-secondary hover:text-accent text-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,136,0.4)]"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-text-muted">
            <p className="flex items-center justify-center gap-2 mb-2">
              Made with <FaHeart className="text-red-500 animate-pulse text-xl" /> by Alankrit Agnihotri
            </p>
            <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

