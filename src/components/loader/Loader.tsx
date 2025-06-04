'use client'

import React from 'react'
import styles from './Loader.module.css'

const LoadingScreen: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      {/* Animated Logo/Icon */}
      <div className={styles.logoContainer}>
        <div className={styles.logo}>👨‍💻</div>
      </div>

      {/* Name/Brand */}
      <div className={styles.brandContainer}>
        <h1 className={styles.brandName}>Basharat@SD</h1>
        <p className={styles.brandTitle}>Full Stack Developer</p>
      </div>

      {/* Loading Spinner */}
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>

      {/* Loading Text */}
      <div className={styles.loadingText}>Crafting Digital Excellence...</div>

      {/* Progress Dots */}
      <div className={styles.progressDots}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  )
}

export default LoadingScreen
