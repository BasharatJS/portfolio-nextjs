'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      const currentTheme = savedTheme === 'dark' ? 'dark' : 'light'
      setTheme(currentTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      const systemTheme = prefersDark ? 'dark' : 'light'
      setTheme(systemTheme)
      document.documentElement.setAttribute('data-theme', systemTheme)
    }
  }, [])

  useEffect(() => {
    // Update theme when theme changes
    const themeValue = theme
    localStorage.setItem('theme', themeValue)
    document.documentElement.setAttribute('data-theme', themeValue)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
