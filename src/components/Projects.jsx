import React, { useEffect, useRef, useState } from 'react'

const Projects = () => {
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

  const projects = [
    {
      name: 'CheQ x NextLeap Product Challenge',
      description: 'Suggested UI, reward, and education changes that made the feature easier to find and more rewarding to use.',
      outcome: 'To increase use of the "Pay Together" feature on CheQ.',
      outcomeSuffix: '',
      tags: ['Product Critique', 'Feature Prioritization', 'User Personas', 'Wireframe'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      pdfPath: '/product_decks/Phase1_Phase2_CheQ_Nextleap_Ak.pdf'
    },
    {
      name: 'BeyondIRR (APM Assignment)',
      description: 'Designed a feature for Relationship Managers to handle broker changes easily within the platform, improving speed and transparency.',
      outcome: 'Improve efficiency in handling broker change requests.',
      outcomeSuffix: '',
      tags: ['Product Design', 'Success Metrics', 'Perplexity Labs'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      pdfPath: '/product_decks/BeyondIRR_APM_Assignment_AlankritAgnihotri.pdf'
    },
    {
      name: 'MoveInSync (Product Deck)',
      description: 'Suggested HRMS integration, automated confirmations, and incentive-based systems to enhance punctuality and reliability.',
      outcome: 'Increase on-time arrivals for employee commutes.',
      outcomeSuffix: '',
      tags: ['Eisenhower Matrix'],
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop',
      pdfPath: '/product_decks/MoveInSync product deck.pdf'
    },
    {
      name: 'Just Do It App',
      description: 'Tried building a minimal to-do app on Lovable, with AI tagging, reminders, and streaks to help users stay organized and consistent.',
      outcome: 'Build a clean and intelligent task management experience.',
      outcomeSuffix: '',
      tags: ['Product Design', 'Prototype', 'UX', 'Lovable'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
      pdfPath: '/product_decks/Just-do-it-App-Lovable.pdf'
    },
    {
      name: 'CricBuzz (Product Deck)',
      description: 'Suggested new ideas and features to improve match experience and user engagement.',
      outcome: 'Engagement Boost',
      outcomeSuffix: ' via retention features',
      tags: ['RICE Framework', 'User Persona', 'Metrics'],
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&h=400&fit=crop',
      pdfPath: '/product_decks/CricBuzz Product deck.pdf'
    },
    {
      name: 'SplitWise (Product Deck)',
      description: 'Making expense splitting simpler and more fun.',
      outcome: 'Enhanced UX',
      outcomeSuffix: ' & user retention',
      tags: ['Feature Prioritization', 'UX Design', 'Success Metrics'],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
      pdfPath: '/product_decks/Splitwise Product deck.pdf'
    },
    {
      name: 'Sports Retail Analysis',
      description: 'Analyzed 3,000+ SKUs using SQL to classify products and identify revenue opportunities.',
      outcome: 'Discover insights',
      outcomeSuffix: ' from sales data.',
      tags: ['SQL', 'Data Analysis'],
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop'
    },
    {
      name: 'Hospitality BI Dashboard',
      description: 'Built a Power BI dashboard showing key metrics like bookings, revenue, and cancellations to help plan better pricing and reduce losses.',
      outcome: 'Track and improve hotel performance',
      outcomeSuffix: ' through data.',
      tags: ['Power BI', 'Data Visualization'],
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop'
    },
    {
      name: 'Business Strategy Analysis',
      description: 'Evaluated industry dynamics via Porter\'s Five Forces, BCG Matrix, and SPACE Analysis.',
      outcome: 'Strategic Insights',
      outcomeSuffix: ' for market positioning.',
      tags: ['Market Analysis', 'BCG Matrix'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    }
  ]

  const handleProjectClick = (pdfPath) => {
    if (pdfPath) {
      window.open(pdfPath, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-dark-bg to-dark-card overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-text-primary tracking-normal">
            <span className="text-accent glow-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-accent mb-16 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div
                onClick={() => handleProjectClick(project.pdfPath)}
                className={`bg-dark-card rounded-3xl overflow-hidden border border-dark-lighter hover:border-accent transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-accent/20 transform hover:-translate-y-2 h-full flex flex-col ${project.pdfPath ? 'cursor-pointer' : ''}`}
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-dark-lighter to-dark-card overflow-hidden border-b-2 border-accent/20">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                    {project.name}
                  </h3>
                  
                  {project.description && (
                    <p className="text-text-secondary text-base mb-4 flex-grow">
                      {project.description}
                    </p>
                  )}

                  {/* Outcome */}
                  <div className="mb-4 bg-dark-bg/50 p-3 rounded-xl border border-accent/30">
                    <p className="text-sm text-text-muted mb-1">Aim:</p>
                    <p className="text-accent text-lg md:text-xl font-bold glow-text">
                      {project.outcome}
                    </p>
                    <p className="text-text-secondary text-sm">{project.outcomeSuffix}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 text-xs font-medium bg-dark-bg text-accent border border-accent/50 rounded-full hover:bg-accent/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

