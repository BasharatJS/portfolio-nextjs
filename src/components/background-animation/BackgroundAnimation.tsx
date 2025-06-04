'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './BackgroundAnimation.module.css'

const BackgroundAnimation: React.FC = () => {
  return (
    <div className={styles.animatedBackground}>
      {/* Gradient Mesh */}
      <div className={styles.gradientMesh}></div>

      {/* Floating Shapes */}
      <div className={styles.floatingShapes}>
        <div className={`${styles.shape} ${styles.shape1}`}></div>
        <div className={`${styles.shape} ${styles.shape2}`}></div>
        <div className={`${styles.shape} ${styles.shape3}`}></div>
        <div className={`${styles.shape} ${styles.shape4}`}></div>
        <div className={`${styles.shape} ${styles.shape5}`}></div>
      </div>

      {/* Animated Particles */}
      <div className={styles.particlesContainer}>
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
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
      <div className={styles.gridPattern} />
    </div>
  )
}

export default BackgroundAnimation
