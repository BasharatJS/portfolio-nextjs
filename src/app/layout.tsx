import { ThemeProvider } from '@/context/ThemeContext'
import './globals.css'

export const metadata = {
  title: 'MD Basharat Taquee - Full Stack Developer',
  description:
    'Passionate React Native Developer & MERN Stack Developer. Specializing in mobile applications and modern web development with 3+ years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
