import React, { useEffect, useRef, useState } from 'react'
import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
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

  const experiences = [
    {
      company: 'Havells',
      role: 'Intern',
      date: 'June 2025 – July 2025',
      achievements: [
        {
          text: 'Conducted extensive field research across 200+ retail outlets in Tier-2/3 cities (Allahabad, Jhansi, Lalitpur, Orai, Jalaun, Farrukhabad) to identify potential Distributors and dealers through direct interaction with retailers',
          highlight: ' ',
          suffix: ''
        },
        {
          text: 'Evaluated product-market fit of Havells Smart Home solutions for urban and semi-urban consumers ',
          highlight: ' ',
          suffix: ' '
        },
        {
          text: 'Designed Go-to-Market (GTM) recommendations including channel incentive , dealer workshops, Actionable strategies and sugesstions ',
          highlight: '',
          suffix: ' '
        },
        {
          text: ' ',
          highlight: null
        },
      ]
    },
    {
      company: 'Accenture',
      role: 'Application Development Associate',
      date: 'September 2022 – December 2022',
      achievements: [
        {
          text: 'Completed structured training on Java, web technologies, and database management systems as part of the onboarding process. Gained hands-on experience in application development, database design, and system architecture. Worked on mini-projects simulating real-world business scenarios, enhancing problem-solving and analytical skills.',
          highlight: null
        },
        {
          text: '',
          highlight: ' ',
          suffix: ' '
        },
      ]
    }
  ]

  return (
    <section
      id="experience"
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
            Work <span className="text-accent glow-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-accent mb-16 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <React.Fragment key={index}>
            <div
              className={`relative mb-12 md:mb-20 flex flex-col md:flex-row items-center w-full transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Timeline dot - smaller, no icon */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-2 border-dark-bg z-10 hidden md:block"></div>

              {/* Content Card */}
              <div className={`md:w-[calc(50%-1.5rem)] ${index % 2 === 0 ? 'md:pr-6 md:ml-auto' : 'md:pl-6'}`}>
                <div className="bg-dark-card p-5 md:p-6 rounded-3xl border border-dark-lighter hover:border-accent transition-all duration-300 shadow-lg hover:shadow-2xl">
                  {/* Company Name */}
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                    {exp.company}
                  </h3>
                  
                  {/* Role */}
                  <p className="text-lg md:text-xl text-accent font-semibold mb-2">
                    {exp.role}
                  </p>
                  
                  {/* Date */}
                  <p className="text-sm text-text-muted mb-6">{exp.date}</p>

                  {/* Achievements */}
                  <ul className="space-y-5">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-text-secondary">
                        <span className="text-accent mr-3 mt-1 flex-shrink-0">▹</span>
                        <span className="text-base md:text-lg">
                          {achievement.text}
                          {achievement.highlight && (
                            <span className="text-accent text-base md:text-lg font-bold glow-text">
                              {achievement.highlight}
                            </span>
                          )}
                          {achievement.suffix && achievement.suffix}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

