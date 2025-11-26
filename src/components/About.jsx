import React, { useEffect, useRef, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-dark-bg to-dark-card overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-text-primary tracking-normal">
            About <span className="text-accent glow-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent mb-12 rounded-full"></div>

          {/* About Content */}
          <div className="space-y-8 text-text-secondary text-lg md:text-xl leading-loose max-w-4xl">
            <p>
              I'm a <span className="text-accent font-semibold">an MBA candidate specializing in </span> Marketing Analytics, driven by a strong passion for Product Management, Product Strategy, and building customer-centric digital solutions. With a blend of analytical thinking and strategic insight, I enjoy transforming data into meaningful decisions that shape impactful products.
            </p>
            <p>
              As an <span className="text-accent font-semibold">Intern at Havells</span>, I gained hands-on experience in market research, dealer ecosystem understanding, retail scouting, channel analysis, and competitive benchmarking. This internship strengthened my understanding of .<span className="text-accent font-semibold">Distribution Network, GTM strategy, and product positioning</span>in the FMEG sector
            </p>
            <p>
              I enjoy combining analytical thinking with a product-focused approach understanding users, identifying key problems, and building impactful solutions. I'm currently exploring <span className="text-accent font-semibold">product management, product analyst, business analyst</span>, and other related roles where I can learn, grow, and contribute to building meaningful products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

