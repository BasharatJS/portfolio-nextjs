'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Smartphone, Globe, Palette, Rocket, Target } from 'lucide-react'
import styles from './About.module.css'

const About: React.FC = () => {
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
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
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

  const skills = [
    { name: 'Expo CLI', icon: Code2, level: 90 },
    { name: 'React Native CLI', icon: Smartphone, level: 95 },
    { name: 'ReactJS', icon: Globe, level: 90 },
    { name: 'Next.js', icon: Rocket, level: 85 },
    { name: 'Javascript', icon: Palette, level: 80 },
    { name: 'Typescript', icon: Target, level: 95 },
  ]

  const skillVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="about" className={styles.aboutSection}>
      {/* Dynamic Background - Similar to Skills */}
      <div className={styles.aboutBg}>
        {/* Animated Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className={`${styles.aboutParticle} ${styles[`particle${i + 1}`]}`}
            animate={{
              y: [-20, -60, -20],
              x: [-10, 10, -10],
              opacity: [0.7, 1, 0.7],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Morphing Background */}
        <motion.div
          className={styles.morphBg}
          animate={{
            borderRadius: [
              '30% 70% 70% 30% / 30% 30% 70% 70%',
              '70% 30% 30% 70% / 70% 70% 30% 30%',
              '30% 70% 70% 30% / 30% 30% 70% 70%',
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Orbital Rings */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`orbital-${i}`}
            className={`${styles.orbitalRing} ${styles[`ring${i + 1}`]}`}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              },
              scale: {
                duration: 3 + i,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          />
        ))}

        {/* Floating Icons */}
        <div className={styles.floatingIcons}>
          {['👨‍💻', '🚀', '💡', '🎯', '⚡', '🔧'].map((icon, i) => (
            <motion.div
              key={i}
              className={`${styles.floatingIcon} ${styles[`icon${i + 1}`]}`}
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </div>

      <div className={styles.aboutContainer}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={styles.aboutWrapper}
        >
          {/* Header - Matching Skills Section Style */}
          <motion.div className={styles.aboutHeader} variants={titleVariants}>
            <motion.div
              className={styles.aboutIconContainer}
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
              <span className={styles.aboutIcon}>👨‍💻</span>
            </motion.div>

            <h2 className={styles.aboutTitle}>About Me</h2>

            <motion.div
              className={styles.titleUnderline}
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '120px', opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                className={styles.underlineDot}
                animate={{
                  x: [-60, 60, -60],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            <p className={styles.aboutSubtitle}>
              Crafting Digital Experiences That Matter
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className={styles.aboutGrid}>
            {/* Left Section - About Content */}
            <motion.div
              variants={itemVariants}
              className={styles.aboutContentCard}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300 },
              }}
            >
              <div className={styles.cardPattern} />
              <div className={styles.cardGradient} />

              <div className={styles.contentHeader}>
                <div className={styles.contentIcon}>📝</div>
                <h3 className={styles.contentTitle}>My Journey</h3>
              </div>

              <div className={styles.aboutContent}>
                <p className={styles.description}>
                  Experienced <strong>React Native</strong> mobile app
                  developer, proficient in building cross-platform applications
                  for <strong>iOS and Android</strong> using both{' '}
                  <strong>Expo CLI</strong> and{' '}
                  <strong>React Native CLI</strong>. Skilled in implementing
                  efficient and scalable solutions using{' '}
                  <strong>Expo Router</strong>, enabling seamless navigation and
                  optimized performance in mobile apps.
                </p>
                <p className={styles.description}>
                  Highly adept in <strong>ReactJS</strong> and{' '}
                  <strong>Next.js</strong> for modern web development, with
                  hands-on experience building dynamic, responsive, and
                  SEO-friendly websites. Demonstrated ability to integrate
                  frontend technologies with backend APIs, ensuring robust and
                  user-centric applications.
                </p>
                {/* <p className={styles.description}>
                  Experienced with component-based architecture, state
                  management tools (like Redux, Zustand, or Context API), and
                  version control systems such as Git. Familiar with TypeScript,
                  Tailwind CSS, and testing frameworks to ensure code quality
                  and maintainability.
                </p> */}
                <p className={styles.description}>
                  Seeking opportunities to leverage my technical expertise,
                  design acumen, and problem-solving mindset to contribute to
                  innovative projects and drive organizational growth.
                  {/* I thrive
                  in collaborative environments and am passionate about building
                  high-impact solutions that enhance user experiences and
                  deliver tangible business value. */}
                </p>
              </div>
            </motion.div>

            {/* Right Section - Profile Card */}
            <motion.div
              variants={itemVariants}
              className={styles.profileCard}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateY: 5,
                transition: { type: 'spring', stiffness: 300 },
              }}
            >
              <div className={styles.cardPattern} />
              <div className={styles.cardGradient} />

              <div className={styles.cardHeader}>
                <div className={styles.profileAvatar}>
                  <motion.div
                    className={styles.avatarInner}
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    🚀
                  </motion.div>
                </div>
                <div className={styles.profileInfo}>
                  <h3 className={styles.profileName}>MD Basharat Taquee</h3>
                  <p className={styles.profileRole}>Software Developer</p>
                </div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.expertise}>
                  <h4 className={styles.expertiseTitle}>Expertise Areas</h4>
                  <div className={styles.expertiseTags}>
                    <span className={styles.tag}>Mobile App Development</span>
                    <span className={styles.tag}>Web App Development</span>
                    <span className={styles.tag}>Backend Development</span>
                    <span className={styles.tag}>
                      Android & iOS Development
                    </span>
                  </div>
                </div>

                {/* Skills Section inside Profile Card */}
                <div className={styles.skillsSection}>
                  <h4 className={styles.skillsTitle}>Core Skills</h4>
                  <div className={styles.skillsGridCard}>
                    {skills.map((skill, index) => {
                      const IconComponent = skill.icon
                      return (
                        <motion.div
                          key={skill.name}
                          variants={skillVariants}
                          custom={index}
                          className={styles.skillItemCard}
                          whileHover={{
                            scale: 1.05,
                            transition: { type: 'spring', stiffness: 300 },
                          }}
                        >
                          <div className={styles.skillItemHeader}>
                            <div className={styles.skillIconCard}>
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <span className={styles.skillNameCard}>
                              {skill.name}
                            </span>
                          </div>
                          <div className={styles.skillBarCard}>
                            <motion.div
                              className={styles.skillProgressCard}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{
                                duration: 1.5,
                                delay: index * 0.1,
                              }}
                            />
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section - Similar to Skills */}
          <motion.div
            className={styles.aboutStats}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div
              className={styles.statItem}
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <motion.h3
                className={styles.statNumber}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
              >
                3+
              </motion.h3>
              <p className={styles.statLabel}>Years Experience</p>
            </motion.div>

            <motion.div
              className={styles.statItem}
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <motion.h3
                className={styles.statNumber}
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.4, type: 'spring', stiffness: 200 }}
              >
                10+
              </motion.h3>
              <p className={styles.statLabel}>Projects Completed</p>
            </motion.div>

            <motion.div
              className={styles.statItem}
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <motion.h3
                className={styles.statNumber}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.6, type: 'spring', stiffness: 200 }}
              >
                100%
              </motion.h3>
              <p className={styles.statLabel}>Client Satisfaction</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
