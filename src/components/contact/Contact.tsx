'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  Send,
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquare,
  CheckCircle,
} from 'lucide-react'
import styles from './Contact.module.css'

const Contact: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const EMAILJS_CONFIG = {
    serviceId: 'service_r5yutfo', // Replace with your Service ID
    templateId: 'template_53vsb4j', // Replace with your Template ID
    publicKey: 'J6AN7nRS6oL4iv5Ff', // Replace with your Public Key
  }

  // const EMAILJS_CONFIG = {
  //   serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  //   templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  //   publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
  // }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data:', formData)
    console.log('EmailJS Config:', EMAILJS_CONFIG)
    setIsSubmitting(true)
    setSubmitError('')

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'tutortaquee123@gmail.com', // Your receiving email
        reply_to: formData.email,
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      )

      console.log('Email sent successfully:', result.text)

      // Success state
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitError('Failed to send message. Please try again.')

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitError(''), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)

  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false)
  //     setIsSubmitted(true)
  //     setFormData({ name: '', email: '', subject: '', message: '' })

  //     // Reset success message after 3 seconds
  //     setTimeout(() => setIsSubmitted(false), 3000)
  //   }, 2000)
  // }

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

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className={styles.contactSection} ref={ref} id="contact">
      {/* Dynamic Background */}
      <div className={styles.contactBg}>
        {/* Flowing Lines */}
        <div className={styles.flowingLines}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`line-${i}`}
              className={`${styles.flowingLine} ${styles[`line${i + 1}`]}`}
            />
          ))}
        </div>

        {/* Communication Bubbles */}
        <div className={styles.communicationBubbles}>
          {['💬', '📧', '📱', '💼', '✨', '🚀'].map((emoji, i) => (
            <motion.div
              key={i}
              className={`${styles.commBubble} ${styles[`bubble${i + 1}`]}`}
              animate={{
                y: [-30, 30, -30],
                x: [-15, 15, -15],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i * 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>

        {/* Radio Waves */}
        <div className={styles.radioWaves}>
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={`wave-${i}`}
              className={`${styles.radioWave} ${styles[`wave${i + 1}`]}`}
              animate={{
                scale: [1, 2.5, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeOut',
                delay: i * 0.8,
              }}
            />
          ))}
        </div>

        {/* Floating Shapes */}
        <div className={styles.floatingShapes}>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`shape-${i}`}
              className={`${styles.floatingShape} ${styles[`shape${i + 1}`]}`}
              animate={{
                y: [-40, 40, -40],
                x: [-20, 20, -20],
                rotate: [0, 360],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 1.5,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className={styles.contactContainer}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Header */}
        <motion.div className={styles.contactHeader} variants={titleVariants}>
          <motion.div
            className={styles.contactIconContainer}
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
            <span className={styles.contactIcon}>📞</span>
          </motion.div>

          <h2 className={styles.contactTitle}>Get In Touch</h2>

          <motion.div
            className={styles.titleUnderline}
            initial={{ width: 0, opacity: 0 }}
            animate={
              isInView
                ? { width: '150px', opacity: 1 }
                : { width: 0, opacity: 0 }
            }
            transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className={styles.underlineDot}
              animate={{
                x: [-75, 75, -75],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          <p className={styles.contactSubtitle}>
            Let's collaborate and bring your ideas to life
          </p>
        </motion.div>

        {/* Main Content */}
        <div className={styles.contactContent}>
          {/* Left Side - Contact Form */}
          <motion.div className={styles.formSection} variants={itemVariants}>
            <div className={styles.formContainer}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Send Me a Message</h3>
                <p className={styles.formSubtitle}>
                  I'd love to hear about your project. Let's discuss how we can
                  work together.
                </p>
              </div>

              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      <User className="w-4 h-4" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      <Mail className="w-4 h-4" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    <MessageSquare className="w-4 h-4" />
                    <span>Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    <MessageSquare className="w-4 h-4" />
                    <span>Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.formTextarea}
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    rows={6}
                    required
                  />
                </div>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    className={styles.successMessage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      background: '#10b981',
                      color: 'white',
                      padding: '15px',
                      borderRadius: '8px',
                      textAlign: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    ✅ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {/* Error Message */}
                {submitError && (
                  <motion.div
                    className={styles.errorMessage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      background: '#ef4444',
                      color: 'white',
                      padding: '15px',
                      borderRadius: '8px',
                      textAlign: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    ❌ {submitError}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className={styles.spinner} />
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div className={styles.imageSection} variants={itemVariants}>
            <motion.div
              className={styles.imageContainer}
              variants={floatingVariants}
              animate="animate"
            >
              <div className={styles.imageWrapper}>
                <img
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Professional workspace with laptop and coffee"
                  className={styles.contactImage}
                />
                <div className={styles.imageOverlay} />
                <div className={styles.imageGradient} />
              </div>

              {/* Floating Elements over the image */}
              <motion.div
                className={styles.floatingElement1}
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                💡
              </motion.div>

              <motion.div
                className={styles.floatingElement2}
                animate={{
                  y: [10, -10, 10],
                  x: [5, -5, 5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                ⚡
              </motion.div>

              <motion.div
                className={styles.floatingElement3}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
              >
                🚀
              </motion.div>

              <motion.div
                className={styles.floatingElement4}
                animate={{
                  y: [-15, 15, -15],
                  x: [-8, 8, -8],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              >
                💻
              </motion.div>

              <motion.div
                className={styles.floatingElement5}
                animate={{
                  rotate: [0, -360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
              >
                ☕
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
