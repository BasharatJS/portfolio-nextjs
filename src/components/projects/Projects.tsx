'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Github,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  Code,
  Smartphone,
  Globe,
} from 'lucide-react'
import styles from './Projects.module.css'

const Projects: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      id: 1,
      title: 'Dayprise App',
      category: 'MOBILE APP DEVELOPMENT',
      description:
        'Mobile application developed using React Native CLI within the React ecosystem.',
      fullDescription:
        'Built responsive UI components based on prototypes and wireframes. Integrated third-party libraries and APIs for enhanced functionality. Implemented Redux for efficient state management and improved app performance.',
      image: '/api/placeholder/400/300',
      technologies: [
        'React Native CLI',
        'Redux',
        'JavaScript',
        'Third-party APIs',
      ],
      gradient: 'from-blue-500 to-purple-600',
      color: '#3b82f6',
      type: 'mobile',
      github: 'https://github.com/username/dayprise-app',
      live: 'https://dayprise-app.com',
      features: [
        'Built responsive UI components based on prototypes and wireframes',
        'Integrated third-party libraries and APIs for enhanced functionality',
        'Implemented Redux for efficient state management and improved app performance',
      ],
    },
    {
      id: 2,
      title: 'Social Media App',
      category: 'MOBILE APP DEVELOPMENT',
      description:
        'Interactive social platform built with Expo CLI for faster development workflow.',
      fullDescription:
        'Utilized Expo libraries to create an interactive and user-friendly interface. Integrated Clerk for secure user authentication. Connected to a Convex backend to manage database operations and real-time data.',
      image: '/api/placeholder/400/300',
      technologies: ['Expo CLI', 'Clerk', 'Convex', 'React Native'],
      gradient: 'from-pink-500 to-rose-600',
      color: '#ec4899',
      type: 'mobile',
      github: 'https://github.com/username/social-media-app',
      live: 'https://social-media-app.com',
      features: [
        'Utilized Expo libraries to create an interactive and user-friendly interface',
        'Integrated Clerk for secure user authentication',
        'Connected to a Convex backend to manage database operations and real-time data',
      ],
    },
    {
      id: 3,
      title: 'Chat Application',
      category: 'MERN STACK DEVELOPMENT',
      description:
        'Real-time chat application with modern UI and efficient state management.',
      fullDescription:
        "Used React.js for the user interface, styled with Tailwind CSS and Daisy UI. Implemented Zustand for managing the application's state. Set up backend with Node.js, Express.js, and MongoDB database.",
      image: '/api/placeholder/400/300',
      technologies: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Tailwind CSS',
        'Zustand',
      ],
      gradient: 'from-green-500 to-teal-600',
      color: '#10b981',
      type: 'web',
      github: 'https://github.com/username/chat-app',
      live: 'https://chat-app-demo.com',
      features: [
        'Used React.js for the user interface, styled with Tailwind CSS and Daisy UI',
        "Implemented Zustand for managing the application's state",
        'Set up backend with Node.js, Express.js, and MongoDB database',
      ],
    },
    {
      id: 4,
      title: 'E-Commerce Store',
      category: 'MERN STACK DEVELOPMENT',
      description:
        'Full-stack e-commerce application with modern UI and secure payment integration.',
      fullDescription:
        'Built responsive user interfaces utilizing React.js and Next.js with Tailwind CSS. Implemented secure payment gateway integration. Created admin dashboard for inventory and order management.',
      image: '/api/placeholder/400/300',
      technologies: [
        'React.js',
        'Next.js',
        'Node.js',
        'MongoDB',
        'Stripe',
        'Tailwind CSS',
      ],
      gradient: 'from-orange-500 to-red-600',
      color: '#f97316',
      type: 'web',
      github: 'https://github.com/username/ecommerce-store',
      live: 'https://ecommerce-demo.com',
      features: [
        'Built responsive user interfaces utilizing React.js and Next.js with Tailwind CSS',
        'Implemented secure payment gateway integration',
        'Created admin dashboard for inventory and order management',
      ],
    },
    {
      id: 5,
      title: 'Task Management App',
      category: 'MOBILE APP DEVELOPMENT',
      description:
        'Productivity app built with React Native featuring real-time synchronization.',
      fullDescription:
        'Cross-platform mobile application with intuitive drag-and-drop interface. Real-time synchronization across devices. Advanced filtering and categorization features.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      gradient: 'from-indigo-500 to-blue-600',
      color: '#6366f1',
      type: 'mobile',
      github: 'https://github.com/username/task-management',
      live: 'https://task-app-demo.com',
      features: [
        'Cross-platform mobile application with intuitive drag-and-drop interface',
        'Real-time synchronization across devices',
        'Advanced filtering and categorization features',
      ],
    },
  ]

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollAmount = 400
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const titleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 12,
        duration: 1.2,
      },
    },
  }

  const projectCardVariants = {
    hidden: {
      opacity: 0,
      rotateY: -90,
      scale: 0.8,
    },
    visible: (index: number) => ({
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: index * 0.1,
      },
    }),
  }

  const doorVariants = {
    closed: {
      rotateY: 0,
      transformOrigin: 'left center',
    },
    open: {
      rotateY: -120,
      transformOrigin: 'left center',
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25,
      },
    },
  }

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: 0.3,
        type: 'spring',
        stiffness: 200,
      },
    },
  }

  const floatingElementVariants = {
    animate: (index: number) => ({
      y: [-20, 20, -20],
      x: [-15, 15, -15],
      rotate: [0, 180, 360],
      scale: [1, 1.1, 1],
      transition: {
        duration: 6 + index * 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  }

  return (
    <section className={styles.projectsSection} ref={ref} id="projects">
      {/* Dynamic Background */}
      <div className={styles.projectsBg}>
        {/* Matrix Rain Effect */}
        <div className={styles.matrixRain}>
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`matrix-${i}`}
              className={`${styles.matrixColumn} ${
                styles[`matrix${(i % 3) + 1}`]
              }`}
            />
          ))}
        </div>

        {/* Floating Devices */}
        <div className={styles.floatingDevices}>
          {[
            { icon: Smartphone, class: 'device1' },
            { icon: Globe, class: 'device2' },
            { icon: Code, class: 'device3' },
            { icon: Smartphone, class: 'device4' },
            { icon: Globe, class: 'device5' },
          ].map((device, i) => (
            <motion.div
              key={i}
              className={`${styles.floatingDevice} ${styles[device.class]}`}
              variants={floatingElementVariants}
              animate="animate"
              custom={i}
            >
              <device.icon className="w-6 h-6" />
            </motion.div>
          ))}
        </div>

        {/* Circuit Lines */}
        <div className={styles.circuitLines}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`circuit-${i}`}
              className={`${styles.circuitLine} ${
                styles[`circuit${(i % 4) + 1}`]
              }`}
            />
          ))}
        </div>

        {/* Glowing Orbs */}
        <div className={styles.glowingOrbs}>
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className={`${styles.glowingOrb} ${styles[`orb${(i % 3) + 1}`]}`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
                x: [-30, 30, -30],
                y: [-20, 20, -20],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.8,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className={styles.projectsContainer}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div className={styles.projectsHeader} variants={titleVariants}>
          <motion.div
            className={styles.projectsIconContainer}
            animate={{
              rotateY: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className={styles.projectsIcon}>🚀</span>
          </motion.div>

          <h2 className={styles.projectsTitle}>Featured Projects</h2>

          <motion.div
            className={styles.titleUnderline}
            initial={{ width: 0, opacity: 0 }}
            animate={
              isInView
                ? { width: '180px', opacity: 1 }
                : { width: 0, opacity: 0 }
            }
            transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className={styles.underlineDot}
              animate={{
                x: [-90, 90, -90],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          <p className={styles.projectsSubtitle}>
            Innovative solutions crafted with modern technologies
          </p>
        </motion.div>

        {/* Navigation Controls */}
        <div className={styles.projectsControls}>
          <motion.button
            className={styles.scrollButton}
            onClick={() => scroll('left')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            className={styles.scrollButton}
            onClick={() => scroll('right')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Projects Container */}
        <div
          className={styles.projectsScrollContainer}
          ref={scrollContainerRef}
        >
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={styles.projectCard}
                variants={projectCardVariants}
                custom={index}
                onHoverStart={() => setActiveProject(project.id)}
                onHoverEnd={() => setActiveProject(null)}
                style={
                  { '--project-color': project.color } as React.CSSProperties
                }
              >
                {/* Card Door */}
                <motion.div
                  className={styles.cardDoor}
                  variants={doorVariants}
                  animate={activeProject === project.id ? 'open' : 'closed'}
                >
                  <div
                    className={`${styles.doorGradient} bg-gradient-to-br ${project.gradient}`}
                  />
                  <div className={styles.doorPattern} />
                  <div className={styles.doorContent}>
                    <div className={styles.projectImage}>
                      {project.type === 'mobile' ? (
                        <div className={styles.mobileDevCard}>
                          <div className={styles.mobileScreen}>
                            <div className={styles.mobileHeader}>
                              <div className={styles.mobileDots}>
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                            </div>
                            <div className={styles.mobileContent}>
                              <div className={styles.mobileApp}>
                                <div className={styles.appIcon}>
                                  <Smartphone className="w-8 h-8 text-white" />
                                </div>
                                <div className={styles.appBars}>
                                  <div className={styles.appBar}></div>
                                  <div className={styles.appBar}></div>
                                  <div className={styles.appBar}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className={styles.webDevCard}>
                          <div className={styles.webScreen}>
                            <div className={styles.webHeader}>
                              <div className={styles.webDots}>
                                <span></span>
                                <span></span>
                                <span></span>
                              </div>
                              <div className={styles.webUrl}></div>
                            </div>
                            <div className={styles.webContent}>
                              <div className={styles.webLayout}>
                                <div className={styles.webSidebar}></div>
                                <div className={styles.webMain}>
                                  <div className={styles.webCard}></div>
                                  <div className={styles.webCard}></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className={styles.projectCategory}>
                      {project.category}
                    </div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                  </div>
                </motion.div>

                {/* Card Content (Revealed) */}
                <motion.div
                  className={styles.cardContent}
                  variants={contentVariants}
                  animate={activeProject === project.id ? 'visible' : 'hidden'}
                >
                  <div className={styles.contentHeader}>
                    <h3 className={styles.contentTitle}>{project.title}</h3>
                    <div className={styles.projectType}>
                      {project.type === 'mobile' ? (
                        <Smartphone className="w-5 h-5" />
                      ) : (
                        <Globe className="w-5 h-5" />
                      )}
                      <span>
                        {project.type === 'mobile' ? 'Mobile' : 'Web'}
                      </span>
                    </div>
                  </div>

                  <p className={styles.contentDescription}>
                    {project.fullDescription}
                  </p>

                  <div className={styles.projectFeatures}>
                    <h4 className={styles.featuresTitle}>Key Features</h4>
                    <ul className={styles.featuresList}>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={styles.featureItem}>
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.technologies}>
                    <h4 className={styles.techTitle}>Technologies</h4>
                    <div className={styles.techTags}>
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.projectActions}>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionButton}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.actionButton} ${styles.primaryButton}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
