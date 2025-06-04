'use client'

import React, { useState, useEffect } from 'react'
import LoadingScreen from '@/components/loader/Loader'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import About from '@/components/about/About'
import Skills from '@/components/skills/Skills'
import Experience from '@/components/experience/Experience'
import Projects from '@/components/projects/Projects'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <LoadingScreen />
  }

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
