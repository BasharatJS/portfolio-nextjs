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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

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
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
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
            transition={{ duration: 0.3 }}
            className={styles.mobileNav}
          >
            <div className={styles.mobileNavContent}>
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20,
                  }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className={styles.mobileNavItem}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.nav>
        </div>
      </motion.header>
    </>
  )
}

export default Header
