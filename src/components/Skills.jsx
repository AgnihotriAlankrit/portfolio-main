import React, { useEffect, useRef, useState } from 'react'
import { 
  FaDatabase, FaChartLine, FaFileExcel, FaGoogle, FaMicrosoft,
  FaLightbulb, FaUsers, FaChartBar
} from 'react-icons/fa'

const Skills = () => {
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

  const technicalSkills = [
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'Power BI', icon: <FaChartLine /> },
    { name: 'Excel', icon: <FaFileExcel /> },
    { name: 'Google Sheets', icon: <FaGoogle /> },
    { name: 'Microsoft Office Suite', icon: <FaMicrosoft /> },
  ]

  const productBusinessSkills = [
    { name: 'Product Strategy', icon: <FaLightbulb /> },
    { name: 'Feature Prioritization', icon: <FaChartLine /> },
    { name: 'Data Analysis', icon: <FaChartBar /> },
    { name: 'Process Optimization', icon: <FaChartLine /> },
    { name: 'Market Research', icon: <FaChartBar /> },
    { name: 'Stakeholder Management', icon: <FaUsers /> },
    { name: 'Competitive Benchmarking', icon: <FaChartLine /> },
  ]

  const certifications = [
    // Add your certifications here if needed
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-dark-card to-dark-bg overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-text-primary tracking-normal">
            Skills & <span className="text-accent glow-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-accent mb-16 rounded-full"></div>
        </div>

        {/* Technical Skills */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <span className="text-accent">💻</span> Technical Skills
          </h3>
          <div className="flex flex-wrap gap-4">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="group px-6 py-4 bg-dark-card rounded-3xl border-2 border-accent/30 hover:border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent/30 cursor-pointer flex items-center gap-3"
              >
                <span className="text-2xl text-accent">{skill.icon}</span>
                <span className="text-lg font-medium text-text-primary group-hover:text-accent transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Product & Business Skills */}
        <div
          className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
            <span className="text-accent">🎯</span> Product & Business
          </h3>
          <div className="flex flex-wrap gap-4">
            {productBusinessSkills.map((skill, index) => (
              <div
                key={index}
                className="group px-6 py-4 bg-dark-card rounded-3xl border-2 border-accent/30 hover:border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent/30 cursor-pointer flex items-center gap-3"
              >
                <span className="text-2xl text-accent">{skill.icon}</span>
                <span className="text-lg font-medium text-text-primary group-hover:text-accent transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications - Hidden when empty */}
        {certifications.length > 0 && (
          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 flex items-center gap-3">
              <FaCertificate className="text-accent" /> Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group px-6 py-4 bg-dark-card rounded-lg border-2 border-accent/30 hover:border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] cursor-pointer flex items-center gap-4"
                >
                  <span className="text-3xl text-accent">{cert.icon}</span>
                  <span className="text-base md:text-lg font-medium text-text-primary group-hover:text-accent transition-colors">
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills

