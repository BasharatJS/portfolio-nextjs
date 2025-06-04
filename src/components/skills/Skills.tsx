'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Skills.module.css'

const Skills: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const skillsData = [
    {
      id: 1,
      title: 'Frontend Development',
      gradient: 'from-cyan-400 to-blue-500',
      accentColor: '#06b6d4',
      icon: '⚛️',
      skills: [
        'React Native CLI',
        'Expo CLI',
        'React JS',
        'Next JS',
        'TypeScript',
        'Tailwind CSS',
      ],
    },
    {
      id: 2,
      title: 'Backend Development',
      gradient: 'from-violet-400 to-purple-500',
      accentColor: '#8b5cf6',
      icon: '⚙️',
      skills: [
        'Node JS',
        'Express JS',
        'MongoDB',
        'Convex',
        'Clerk',
        'Firebase',
      ],
    },
    {
      id: 3,
      title: 'State Management',
      gradient: 'from-emerald-400 to-green-500',
      accentColor: '#10b981',
      icon: '🔄',
      skills: [
        'Redux',
        'Redux toolkit',
        'Zustand',
        'React Query',
        'Context API',
        'MobX',
      ],
    },
    {
      id: 4,
      title: 'Tools & Services',
      gradient: 'from-orange-400 to-red-500',
      accentColor: '#f97316',
      icon: '🛠️',
      skills: [
        'GitHub Desktop',
        'Git',
        'GitLab',
        'Postman',
        'Slack',
        'Android Studio',
        'VS Code',
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

  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      scale: 0.3,
      y: 100,
      rotateZ: index === 1 ? 0 : index === 0 ? -45 : index === 2 ? 45 : -30,
      filter: 'blur(10px)',
    }),
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      rotateZ: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        delay: index * 0.2,
        duration: 0.8,
      },
    }),
  }

  const skillChipVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: 0.1 * index,
        type: 'spring',
        stiffness: 200,
      },
    }),
  }

  const orbitalVariants = {
    animate: (index: number) => ({
      rotate: [0, 360],
      scale: [1, 1.1, 1],
      transition: {
        rotate: {
          duration: 8 + index * 2,
          repeat: Infinity,
          ease: 'linear',
        },
        scale: {
          duration: 3 + index,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      },
    }),
  }

  const particleVariants = {
    animate: {
      y: [-20, -60, -20],
      x: [-10, 10, -10],
      opacity: [0.7, 1, 0.7],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const morphVariants = {
    animate: {
      borderRadius: [
        '30% 70% 70% 30% / 30% 30% 70% 70%',
        '70% 30% 30% 70% / 70% 70% 30% 30%',
        '30% 70% 70% 30% / 30% 30% 70% 70%',
      ],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className={styles.skillsSection} ref={ref} id="skills">
      {/* Dynamic Background */}
      <div className={styles.skillsBg}>
        {/* Animated Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`${styles.skillsParticle} ${styles[`particle${i + 1}`]}`}
            variants={particleVariants}
            animate="animate"
            style={{ animationDelay: `${i * 0.8}s` }}
          />
        ))}

        {/* Morphing Background */}
        <motion.div
          className={styles.morphBg}
          variants={morphVariants}
          animate="animate"
        />

        {/* Orbital Rings */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`orbital-${i}`}
            className={`${styles.orbitalRing} ${styles[`ring${i + 1}`]}`}
            variants={orbitalVariants}
            animate="animate"
            custom={i}
          />
        ))}

        {/* Floating Icons */}
        <div className={styles.floatingIcons}>
          {['💻', '📱', '⚡', '🚀', '🎯', '🔧'].map((icon, i) => (
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

      <motion.div
        className={styles.skillsContainer}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div className={styles.skillsHeader} variants={titleVariants}>
          <motion.div
            className={styles.skillsIconContainer}
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
            <span className={styles.skillsIcon}>💡</span>
          </motion.div>

          <h2 className={styles.skillsTitle}>Skills & Technologies</h2>

          <motion.div
            className={styles.titleUnderline}
            initial={{ width: 0, opacity: 0 }}
            animate={
              isInView
                ? { width: '140px', opacity: 1 }
                : { width: 0, opacity: 0 }
            }
            transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className={styles.underlineDot}
              animate={{
                x: [-70, 70, -70],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          <p className={styles.skillsSubtitle}>
            Comprehensive technology stack powering modern digital solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          {skillsData.map((category, index) => (
            <motion.div
              key={category.id}
              className={`${styles.skillCard} ${
                activeCard === category.id ? styles.active : ''
              }`}
              variants={cardVariants}
              custom={index}
              onHoverStart={() => setActiveCard(category.id)}
              onHoverEnd={() => setActiveCard(null)}
              whileHover={{
                y: -25,
                scale: 1.05,
                rotateX: 5,
                rotateY: index % 2 === 0 ? 5 : -5,
                transition: {
                  type: 'spring',
                  stiffness: 400,
                  damping: 25,
                },
              }}
            >
              {/* Card Pattern Background */}
              <div className={styles.cardPattern} />

              {/* Card Gradient */}
              <div
                className={styles.cardGradient}
                style={{
                  background: `linear-gradient(135deg, ${category.accentColor}15, ${category.accentColor}25)`,
                }}
              />

              {/* Card Header */}
              <div className={styles.cardHeader}>
                <motion.div
                  className={styles.categoryIcon}
                  style={{ background: category.accentColor }}
                  animate={{
                    rotate: activeCard === category.id ? [0, 360] : [0],
                    scale: activeCard === category.id ? [1, 1.2, 1] : [1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: activeCard === category.id ? Infinity : 0,
                    ease: 'linear',
                  }}
                >
                  {category.icon}
                </motion.div>

                <motion.h3
                  className={styles.categoryTitle}
                  style={{ color: category.accentColor }}
                  layoutId={`skills-title-${category.id}`}
                >
                  {category.title}
                </motion.h3>
              </div>

              {/* Skills List */}
              <motion.div
                className={styles.skillsList}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className={styles.skillChip}
                    style={{ borderColor: category.accentColor }}
                    variants={skillChipVariants}
                    custom={skillIndex}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: category.accentColor,
                      color: 'white',
                      x: 3,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>

              {/* Interactive Hover Elements */}
              <motion.div
                className={styles.cardGlow}
                style={{
                  background: `radial-gradient(circle at center, ${category.accentColor}40, transparent 70%)`,
                }}
                animate={{
                  opacity: activeCard === category.id ? 0.6 : 0,
                  scale: activeCard === category.id ? 1.2 : 0.8,
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Animated Border */}
              <motion.div
                className={styles.animatedBorder}
                style={{
                  background: `conic-gradient(from 0deg, ${category.accentColor}, transparent, ${category.accentColor})`,
                }}
                animate={{
                  rotate: activeCard === category.id ? [0, 360] : [0],
                  opacity: activeCard === category.id ? 1 : 0,
                }}
                transition={{
                  rotate: {
                    duration: 3,
                    repeat: activeCard === category.id ? Infinity : 0,
                    ease: 'linear',
                  },
                  opacity: { duration: 0.3 },
                }}
              />

              {/* Shimmer Effect */}
              <motion.div
                className={styles.shimmerEffect}
                animate={{
                  x: activeCard === category.id ? [-200, 200] : [-200],
                }}
                transition={{
                  duration: 2,
                  repeat: activeCard === category.id ? Infinity : 0,
                  ease: 'linear',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Skills Stats */}
        <motion.div
          className={styles.skillsStats}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className={styles.statItem}
            whileHover={{ scale: 1.1, y: -10 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <motion.h3
              className={styles.statNumber}
              initial={{ scale: 0, rotate: -180 }}
              animate={
                isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
              }
              transition={{ delay: 2.2, type: 'spring', stiffness: 200 }}
            >
              25+
            </motion.h3>
            <p className={styles.statLabel}>Technologies Mastered</p>
          </motion.div>

          <motion.div
            className={styles.statItem}
            whileHover={{ scale: 1.1, y: -10 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <motion.h3
              className={styles.statNumber}
              initial={{ scale: 0, rotate: 180 }}
              animate={
                isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }
              }
              transition={{ delay: 2.4, type: 'spring', stiffness: 200 }}
            >
              4
            </motion.h3>
            <p className={styles.statLabel}>Core Specializations</p>
          </motion.div>

          <motion.div
            className={styles.statItem}
            whileHover={{ scale: 1.1, y: -10 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <motion.h3
              className={styles.statNumber}
              initial={{ scale: 0, rotate: -180 }}
              animate={
                isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
              }
              transition={{ delay: 2.6, type: 'spring', stiffness: 200 }}
            >
              100%
            </motion.h3>
            <p className={styles.statLabel}>Commitment Level</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
