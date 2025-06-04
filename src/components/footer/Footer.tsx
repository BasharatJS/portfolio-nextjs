'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  GraduationCap,
  Calendar,
  Award,
} from 'lucide-react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const quickLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Contact', href: '#contact', icon: Mail },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/BasharatJS',
      icon: Github,
      color: '#333',
      followers: '2.5K',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/md-basharat-taquee-84a6a922b',
      icon: Linkedin,
      color: '#0077B5',
      followers: '1.8K',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/basharat_taquee',
      icon: Twitter,
      color: '#1DA1F2',
      followers: '892',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/basharat.taquee',
      icon: Instagram,
      color: '#E4405F',
      followers: '1.2K',
    },
  ]

  const education = {
    degree: 'Bachelor of Technology: Mechanical Engineering',
    institution: 'Jawahar Lal Nehru Technological University',
    location: 'Hyderabad, India',
    duration: '2013 - 2017',
    achievements: [
      'Graduated with First Class Honors',
      'Specialized in CAD/CAM and Manufacturing',
      'Active member of Engineering Society',
      'Completed internship in automotive industry',
    ],
  }

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
        delayChildren: 0.3,
      },
    },
  }

  const columnVariants = {
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

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
      },
    }),
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: index * 0.15,
        type: 'spring',
        stiffness: 200,
      },
    }),
  }

  const floatingVariants = {
    animate: (index: number) => ({
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 360],
      transition: {
        duration: 8 + index * 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 1,
      },
    }),
  }

  return (
    <footer className={styles.footerSection} ref={ref} id="footer">
      {/* Dynamic Background */}
      <div className={styles.footerBg}>
        {/* Tech Grid Pattern */}
        <div className={styles.techGrid}>
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={`grid-${i}`}
              className={`${styles.gridDot} ${styles[`dot${(i % 4) + 1}`]}`}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + (i % 5),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.1,
              }}
            />
          ))}
        </div>

        {/* Constellation Lines */}
        <div className={styles.constellation}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`constellation-${i}`}
              className={`${styles.constellationLine} ${
                styles[`cLine${(i % 3) + 1}`]
              }`}
            />
          ))}
        </div>

        {/* Floating Tech Icons */}
        <div className={styles.floatingTechIcons}>
          {['⚛️', '🚀', '💻', '📱', '⚡', '🎯', '🔧', '💡'].map((icon, i) => (
            <motion.div
              key={i}
              className={`${styles.techIcon} ${styles[`techIcon${i + 1}`]}`}
              variants={floatingVariants}
              animate="animate"
              custom={i}
            >
              {icon}
            </motion.div>
          ))}
        </div>

        {/* Data Stream */}
        <div className={styles.dataStream}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`stream-${i}`}
              className={`${styles.streamLine} ${styles[`stream${i + 1}`]}`}
            />
          ))}
        </div>

        {/* Hexagon Pattern */}
        <div className={styles.hexagonPattern}>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`hex-${i}`}
              className={`${styles.hexagon} ${styles[`hex${i + 1}`]}`}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className={styles.footerContainer}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          {/* Quick Links Column */}
          <motion.div className={styles.footerColumn} variants={columnVariants}>
            <div className={styles.columnHeader}>
              <div className={styles.columnIcon}>
                <Code className="w-6 h-6" />
              </div>
              <h3 className={styles.columnTitle}>Quick Links</h3>
            </div>
            <div className={styles.linksList}>
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <motion.button
                    key={link.name}
                    variants={linkVariants}
                    custom={index}
                    onClick={() => scrollToSection(link.href)}
                    className={styles.footerLink}
                    whileHover={{
                      x: 10,
                      color: 'var(--gradient-1)',
                    }}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{link.name}</span>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div className={styles.footerColumn} variants={columnVariants}>
            <div className={styles.columnHeader}>
              <div className={styles.columnIcon}>
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className={styles.columnTitle}>Education</h3>
            </div>
            <div className={styles.educationCard}>
              <div className={styles.educationHeader}>
                <div className={styles.degreeIcon}>
                  <Award className="w-5 h-5" />
                </div>
                <div className={styles.degreeInfo}>
                  <h4 className={styles.degreeTitle}>{education.degree}</h4>
                  <p className={styles.institution}>{education.institution}</p>
                </div>
              </div>

              <div className={styles.educationMeta}>
                <div className={styles.metaItem}>
                  <MapPin className="w-4 h-4" />
                  <span>{education.location}</span>
                </div>
                <div className={styles.metaItem}>
                  <Calendar className="w-4 h-4" />
                  <span>{education.duration}</span>
                </div>
              </div>

              <div className={styles.achievements}>
                <h5 className={styles.achievementsTitle}>Key Highlights</h5>
                <ul className={styles.achievementsList}>
                  {education.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      className={styles.achievementItem}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: index * 0.1 + 1 }}
                    >
                      • {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Social Links Column */}
          <motion.div className={styles.footerColumn} variants={columnVariants}>
            <div className={styles.columnHeader}>
              <div className={styles.columnIcon}>
                <ExternalLink className="w-6 h-6" />
              </div>
              <h3 className={styles.columnTitle}>Connect With Me</h3>
            </div>

            <div className={styles.socialGrid}>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialCard}
                    variants={socialVariants}
                    custom={index}
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className={styles.socialIcon}
                      style={
                        {
                          '--social-color': social.color,
                        } as React.CSSProperties
                      }
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className={styles.socialInfo}>
                      <span className={styles.socialName}>{social.name}</span>
                      {/* <span className={styles.socialFollowers}>
                        {social.followers} followers
                      </span> */}
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <h5 className={styles.contactTitle}>Get In Touch</h5>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <Mail className="w-4 h-4" />
                  <span>tutortaquee123@gmail.com</span>
                </div>
                <div className={styles.contactItem}>
                  <Phone className="w-4 h-4" />
                  <span>+91 9492976113</span>
                </div>
                <div className={styles.contactItem}>
                  <MapPin className="w-4 h-4" />
                  <span>Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className={styles.footerBottom}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>© 2025 MD Basharat Taquee. All rights reserved.</p>
              <p>Crafted with ❤️ using React, Next.js & Framer Motion</p>
            </div>
            <div className={styles.signature}>
              <motion.div
                className={styles.signatureText}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Full Stack Developer
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
