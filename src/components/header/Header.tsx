'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import styles from './Header.module.css'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Enhanced scroll function with better mobile support
  const scrollToSection = (href: string) => {
    try {
      // Close mobile menu first
      setIsMobileMenuOpen(false)

      // Add small delay to allow menu animation to complete
      setTimeout(() => {
        const targetId = href.replace('#', '')
        const element =
          document.getElementById(targetId) || document.querySelector(href)

        if (element) {
          // Get header height for offset calculation
          const headerHeight = 80 // Approximate header height
          const elementPosition = element.offsetTop - headerHeight

          // Use both scrollIntoView and scrollTo for better compatibility
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
          })

          // Fallback for older browsers
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          })
        } else {
          console.warn(`Element with selector "${href}" not found`)
        }
      }, 100) // Small delay for menu close animation
    } catch (error) {
      console.error('Error scrolling to section:', error)
    }
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (
        isMobileMenuOpen &&
        !target.closest(`.${styles.mobileNav}`) &&
        !target.closest(`.${styles.mobileMenuButton}`)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleOutsideClick)
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <>
      {/* Header Background Animation - Only visible when not scrolled */}
      <div
        className={`${styles.headerBackground} ${
          isScrolled ? styles.headerBackgroundHidden : ''
        }`}
      >
        {/* Gradient Mesh */}
        <div className={styles.headerGradientMesh}></div>

        {/* Floating Shapes */}
        <div className={styles.headerFloatingShapes}>
          <div className={`${styles.headerShape} ${styles.headerShape1}`}></div>
          <div className={`${styles.headerShape} ${styles.headerShape2}`}></div>
          <div className={`${styles.headerShape} ${styles.headerShape3}`}></div>
        </div>
      </div>

      <motion.header
        variants={headerVariants}
        initial="initial"
        animate="animate"
        className={`${styles.header} ${
          isScrolled ? styles.headerScrolled : ''
        }`}
      >
        <div className={styles.container}>
          <div className={styles.headerContent}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={styles.logo}
              onClick={() => scrollToSection('#home')}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.logoIcon}>
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className={styles.logoText}>Basharat@SD</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className={styles.nav}>
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  custom={index}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => scrollToSection(item.href)}
                  className={styles.navItem}
                  type="button"
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* Theme Toggle & Mobile Menu */}
            <div className={styles.controls}>
              {/* Theme Toggle */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                onClick={toggleTheme}
                className={styles.themeToggle}
                aria-label="Toggle theme"
                type="button"
              >
                <motion.div
                  animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={styles.themeIcon}
                >
                  {theme === 'light' ? <Sun /> : <Moon />}
                </motion.div>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={styles.mobileMenuButton}
                aria-label="Toggle mobile menu"
                type="button"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.nav
            initial={false}
            animate={{
              height: isMobileMenuOpen ? 'auto' : 0,
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`${styles.mobileNav} ${
              isMobileMenuOpen ? styles.mobileNavOpen : ''
            }`}
          >
            <motion.div
              className={styles.mobileNavContent}
              initial={false}
              animate={{
                y: isMobileMenuOpen ? 0 : -20,
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3, delay: isMobileMenuOpen ? 0.1 : 0 }}
            >
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={false}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20,
                  }}
                  transition={{
                    delay: isMobileMenuOpen ? index * 0.05 : 0,
                    duration: 0.3,
                  }}
                  onClick={() => scrollToSection(item.href)}
                  className={styles.mobileNavItem}
                  type="button"
                >
                  {item.name}
                </motion.button>
              ))}
            </motion.div>
          </motion.nav>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.mobileMenuOverlay}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </motion.header>
    </>
  )
}

export default Header
