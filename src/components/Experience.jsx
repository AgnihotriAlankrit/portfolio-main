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
      company: 'Deutsche Bank',
      role: 'Analyst Intern',
      date: 'July 2023 – Dec 2023',
      achievements: [
        {
          text: 'Led month-end reconciliation optimization through stakeholder analysis and root-cause investigation, reducing close time by ',
          highlight: '2+ hours',
          suffix: ''
        },
        {
          text: 'Partnered cross-functionally to resolve approx. ',
          highlight: '$18B',
          suffix: ' in feed discrepancies via data stewardship solutions, boosting accuracy'
        },
        {
          text: 'Enhanced Python automation to integrate four data feeds, cutting runtime by ',
          highlight: '40 minutes',
          suffix: ' and enabling faster reporting'
        },
        {
          text: 'Engineered SQL validation queries to eliminate data anomalies and automated stakeholder reporting workflows',
          highlight: null
        },
      ]
    },
    {
      company: 'Indira Gandhi Centre for Atomic Research (IGCAR)',
      role: 'Research Analyst Intern',
      date: 'May 2022 – July 2022',
      achievements: [
        {
          text: 'Analyzed concrete testing inefficiencies using Excel, pivot tables, and statistical control charts to identify production bottlenecks',
          highlight: null
        },
        {
          text: 'Synthesized insights from ',
          highlight: '200+',
          suffix: ' data points and delivered process optimization recommendations to stakeholders'
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

