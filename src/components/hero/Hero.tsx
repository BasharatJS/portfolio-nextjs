'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Code,
  Smartphone,
  Globe,
  Monitor,
  Tablet,
} from 'lucide-react'
import styles from './Hero.module.css'

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 15,
      transition: { type: 'spring', stiffness: 300 },
    },
  }

  return (
    <section id="home" className={styles.hero}>
      {/* Hero Background Animation */}
      <div className={styles.heroBackground}>
        {/* Gradient Mesh */}
        <div className={styles.heroGradientMesh}></div>

        {/* Floating Shapes */}
        <div className={styles.heroFloatingShapes}>
          <div className={`${styles.heroShape} ${styles.heroShape1}`}></div>
          <div className={`${styles.heroShape} ${styles.heroShape2}`}></div>
          <div className={`${styles.heroShape} ${styles.heroShape3}`}></div>
          <div className={`${styles.heroShape} ${styles.heroShape4}`}></div>
          <div className={`${styles.heroShape} ${styles.heroShape5}`}></div>
        </div>

        {/* Animated Particles */}
        <div className={styles.heroParticlesContainer}>
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className={styles.heroParticle}
              initial={{
                x:
                  Math.random() *
                  (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y:
                  Math.random() *
                  (typeof window !== 'undefined' ? window.innerHeight : 1000),
              }}
              animate={{
                x:
                  Math.random() *
                  (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y:
                  Math.random() *
                  (typeof window !== 'undefined' ? window.innerHeight : 1000),
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className={styles.heroGridPattern} />
      </div>

      <div className={styles.container}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={styles.heroGrid}
        >
          {/* Left Content */}
          <div className={styles.content}>
            <motion.div variants={itemVariants}>
              <span className={styles.greeting}>👋 Hello, I'm</span>
              <h1 className={styles.title}>
                <span className={styles.name}>MD BASHARAT</span>
                <br />
                <span className="text-gray-800 dark:text-gray-200">TAQUEE</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className={styles.subtitle}>Software Developer</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className={styles.description}>
                I'm a passionate software developer from Pune, India,
                specializing in React Native mobile applications and modern web
                development. With 3+ years of experience, I create innovative
                digital solutions that bridge the gap between exceptional design
                and seamless functionality.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>3+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Technologies</div>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div variants={itemVariants} className={styles.buttons}>
              <button
                onClick={() => scrollToSection('#projects')}
                className={styles.primaryButton}
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className={styles.secondaryButton}
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className={styles.socialLinks}>
              <motion.a
                variants={iconVariants}
                whileHover="hover"
                href="https://github.com/BasharatJS"
                className={styles.socialLink}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                variants={iconVariants}
                whileHover="hover"
                href="https://www.linkedin.com/in/md-basharat-taquee-84a6a922b/"
                className={styles.socialLink}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                variants={iconVariants}
                whileHover="hover"
                href="#"
                className={styles.socialLink}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Development Images */}
          <div className={styles.devSection}>
            <motion.div variants={itemVariants} className={styles.devContainer}>
              {/* Mobile App Development */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className={styles.mobileDevCard}
              >
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
                <div className={styles.cardLabel}>Mobile App Development</div>
              </motion.div>

              {/* Web Development */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '2s' }}
                className={styles.webDevCard}
              >
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
                <div className={styles.cardLabel}>Web Development</div>
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className={`${styles.floatingTechIcon} ${styles.iconTopRight}`}
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '1s' }}
                className={`${styles.floatingTechIcon} ${styles.iconBottomLeft}`}
              >
                <Monitor className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '3s' }}
                className={`${styles.floatingTechIcon} ${styles.iconCenter}`}
              >
                <Globe className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className={styles.scrollIndicator}
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={styles.scrollButton}
          >
            <span className={styles.scrollText}>Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
