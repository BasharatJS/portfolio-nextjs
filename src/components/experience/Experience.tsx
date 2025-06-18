'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, MapPin, Briefcase, Code, Zap, Users } from 'lucide-react'
import styles from './Experience.module.css'

const Experience: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const experiences = [
    {
      id: 1,
      role: 'Lead Frontend Developer',
      company: 'Evonnexis Pvt Ltd.',
      location: 'Pune, India (Remote)',
      period: '01/2025 to Current',
      duration: 'Current',
      type: 'Full-time',
      icon: <Users className="w-5 h-5" />,
      color: '#10b981',
      achievements: [
        'Built beautiful mobile applications using Expo CLI and React Native CLI',
        'Built responsive user interfaces utilizing modern front-end technologies like React JS, Next JS and Tailwind CSS',
        'Leading frontend development initiatives and mentoring junior developers',
      ],
      skills: [
        'React Native',
        'React JS',
        'Next JS',
        'Tailwind CSS',
        'Team Leadership',
      ],
    },
    {
      id: 2,
      role: 'Software Developer',
      company: 'Freelancer',
      location: 'Pune, India (Remote)',
      period: '06/2022 to Current',
      duration: '3+ Years',
      type: 'Freelance',
      icon: <Code className="w-5 h-5" />,
      color: '#8b5cf6',
      achievements: [
        '3+ Years of experience as a Freelancer Consultant in React Native (Mobile App)',
        'Built responsive user interfaces utilizing modern front-end technologies like React JS, Next JS and Tailwind CSS',
        'Created interactive UI components utilizing React JS, enhancing overall usability and user engagement',
      ],
      skills: [
        'React Native',
        'React JS',
        'Next JS',
        'Tailwind CSS',
        'Mobile Development',
      ],
    },
    {
      id: 3,
      role: 'React Native Developer',
      company: 'Appventurez Mobitech Pvt Ltd.',
      location: 'Noida, India',
      period: '07/2022 to 06/2023',
      duration: '1 Year',
      type: 'Full-time',
      icon: <Briefcase className="w-5 h-5" />,
      color: '#06b6d4',
      achievements: [
        '1 Year of experience as a Software Developer in Appventurez Mobitech Pvt Ltd',
        'Served as a Frontend Developer specializing in React Native CLI and Expo CLI',
        'Enhanced app performance by optimizing React Native components and implementing best practices',
      ],
      skills: [
        'React Native CLI',
        'Expo CLI',
        'Performance Optimization',
        'Mobile Apps',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
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

  const timelineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: '100%',
      opacity: 1,
      transition: {
        duration: 2,
        ease: 'easeOut',
        delay: 0.5,
      },
    },
  }

  const experienceItemVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      scale: 0.8,
      filter: 'blur(10px)',
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: index * 0.4 + 1,
      },
    }),
  }

  const timelineDotVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (index: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: index * 0.4 + 1.2,
      },
    }),
  }

  const floatingElementVariants = {
    animate: (index: number) => ({
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 360],
      scale: [1, 1.1, 1],
      transition: {
        duration: 8 + index * 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className={styles.experienceSection} ref={ref} id="experience">
      {/* Dynamic Background */}
      <div className={styles.experienceBg}>
        {/* Network Grid Animation */}
        <div className={styles.networkGrid}>
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className={`${styles.networkNode} ${
                styles[`node${(i % 5) + 1}`]
              }`}
              variants={floatingElementVariants}
              animate="animate"
              custom={i}
            />
          ))}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`line-${i}`}
              className={`${styles.networkLine} ${
                styles[`line${(i % 3) + 1}`]
              }`}
            />
          ))}
        </div>

        {/* Floating Code Elements */}
        <div className={styles.floatingCode}>
          {['{ }', '</>', '< />', 'API', 'UI', 'JS'].map((code, i) => (
            <motion.div
              key={i}
              className={`${styles.codeElement} ${styles[`code${i + 1}`]}`}
              animate={{
                y: [-30, 30, -30],
                rotate: [0, 360],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.8,
              }}
            >
              {code}
            </motion.div>
          ))}
        </div>

        {/* Pulse Rings */}
        <div className={styles.pulseRings}>
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={`pulse-${i}`}
              className={`${styles.pulseRing} ${styles[`pulse${i + 1}`]}`}
              variants={pulseVariants}
              animate="animate"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </div>

        {/* Geometric Patterns */}
        <div className={styles.geometricPatterns}>
          <motion.div
            className={styles.hexagon1}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <motion.div
            className={styles.triangle1}
            animate={{
              rotate: [0, -360],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className={styles.circle1}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </div>

      <motion.div
        className={styles.experienceContainer}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div
          className={styles.experienceHeader}
          variants={titleVariants}
        >
          <motion.div
            className={styles.experienceIconContainer}
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
            <span className={styles.experienceIcon}>💼</span>
          </motion.div>

          <h2 className={styles.experienceTitle}>Work Experience</h2>

          <motion.div
            className={styles.titleUnderline}
            initial={{ width: 0, opacity: 0 }}
            animate={
              isInView
                ? { width: '160px', opacity: 1 }
                : { width: 0, opacity: 0 }
            }
            transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className={styles.underlineDot}
              animate={{
                x: [-80, 80, -80],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          <p className={styles.experienceSubtitle}>
            Professional journey through innovative technology solutions
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className={styles.timelineContainer}>
          {/* Timeline Line */}
          <motion.div
            className={styles.timelineLine}
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          />

          {/* Experience Items */}
          <div className={styles.timelineItems}>
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className={`${styles.timelineItem} ${
                  index % 2 === 0
                    ? styles.timelineItemLeft
                    : styles.timelineItemRight
                }`}
                variants={experienceItemVariants}
                custom={index}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={styles.timelineDot}
                  style={{ backgroundColor: experience.color }}
                  variants={timelineDotVariants}
                  custom={index}
                  whileHover={{
                    scale: 1.3,
                    boxShadow: `0 0 20px ${experience.color}`,
                  }}
                >
                  <motion.div
                    className={styles.timelineDotIcon}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    {experience.icon}
                  </motion.div>
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  className={styles.experienceCard}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: `0 20px 40px ${experience.color}20`,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={styles.cardPattern} />
                  <div
                    className={styles.cardGradient}
                    style={{
                      background: `linear-gradient(135deg, ${experience.color}15, ${experience.color}25)`,
                    }}
                  />

                  {/* Card Header */}
                  <div className={styles.cardHeader}>
                    <div className={styles.roleInfo}>
                      <h3 className={styles.roleTitle}>{experience.role}</h3>
                      <div className={styles.companyInfo}>
                        <span className={styles.companyName}>
                          {experience.company}
                        </span>
                        <span className={styles.jobType}>
                          {experience.type}
                        </span>
                      </div>
                    </div>
                    <div
                      className={styles.duration}
                      style={{ color: experience.color }}
                    >
                      {experience.duration}
                    </div>
                  </div>

                  {/* Card Meta */}
                  <div className={styles.cardMeta}>
                    <div className={styles.metaItem}>
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className={styles.achievements}>
                    <h4 className={styles.achievementsTitle}>
                      Key Achievements
                    </h4>
                    <ul className={styles.achievementsList}>
                      {experience.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className={styles.achievementItem}
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            isInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -20 }
                          }
                          transition={{
                            delay: index * 0.4 + achIndex * 0.1 + 1.5,
                          }}
                        >
                          <Zap
                            className="w-3 h-3"
                            style={{ color: experience.color }}
                          />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className={styles.skills}>
                    <h4 className={styles.skillsTitle}>Technologies Used</h4>
                    <div className={styles.skillsTags}>
                      {experience.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className={styles.skillTag}
                          style={{ borderColor: experience.color }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={
                            isInView
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0 }
                          }
                          transition={{
                            delay: index * 0.4 + skillIndex * 0.1 + 2,
                          }}
                          whileHover={{
                            backgroundColor: experience.color,
                            color: 'white',
                            scale: 1.05,
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Stats */}
        <motion.div
          className={styles.experienceStats}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.div
            className={styles.statItem}
            whileHover={{ scale: 1.1, y: -10 }}
          >
            <motion.h3
              className={styles.statNumber}
              initial={{ scale: 0, rotate: -180 }}
              animate={
                isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
              }
              transition={{ delay: 3.2, type: 'spring', stiffness: 200 }}
            >
              3+
            </motion.h3>
            <p className={styles.statLabel}>Years Experience</p>
          </motion.div>

          <motion.div
            className={styles.statItem}
            whileHover={{ scale: 1.1, y: -10 }}
          >
            <motion.h3
              className={styles.statNumber}
              initial={{ scale: 0, rotate: 180 }}
              animate={
                isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }
              }
              transition={{ delay: 3.4, type: 'spring', stiffness: 200 }}
            >
              3
            </motion.h3>
            <p className={styles.statLabel}>Companies Worked</p>
          </motion.div>

          <motion.div
            className={styles.statItem}
            whileHover={{ scale: 1.1, y: -10 }}
          >
            <motion.h3
              className={styles.statNumber}
              initial={{ scale: 0, rotate: -180 }}
              animate={
                isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
              }
              transition={{ delay: 3.6, type: 'spring', stiffness: 200 }}
            >
              15+
            </motion.h3>
            <p className={styles.statLabel}>Projects Delivered</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experience
