'use client'
import React, { useState } from 'react'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        padding: '1rem',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <a
          href="https://basharat-software-engineer-portfoli.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            padding: '20px 40px',
            fontSize: '1.125rem',
            fontWeight: '700',
            color: 'white',
            background: isHovered
              ? 'linear-gradient(90deg, #7c3aed 0%, #2563eb 50%, #4f46e5 100%)'
              : 'linear-gradient(90deg, #9333ea 0%, #3b82f6 50%, #6366f1 100%)',
            borderRadius: '16px',
            boxShadow: isHovered
              ? '0 25px 50px -12px rgba(147, 51, 234, 0.6), 0 0 40px rgba(147, 51, 234, 0.4)'
              : '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            transform: isHovered ? 'scale(1.05) translateY(-4px)' : 'scale(1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            textDecoration: 'none',
            border: '1px solid rgba(167, 139, 250, 0.3)',
            overflow: 'hidden',
            letterSpacing: '0.025em',
          }}
        >
          {/* Shimmer effect */}
          <span
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
              transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
              transition: 'transform 0.7s ease-in-out',
              pointerEvents: 'none',
            }}
          ></span>

          {/* External link icon */}
          <svg
            style={{
              width: '24px',
              height: '24px',
              transform: isHovered
                ? 'rotate(12deg) scale(1.1)'
                : 'rotate(0deg) scale(1)',
              transition: 'all 0.3s ease',
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>

          <span style={{ position: 'relative', zIndex: 10 }}>
            Visit my portfolio
          </span>

          {/* Arrow icon */}
          <svg
            style={{
              width: '20px',
              height: '20px',
              transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
              transition: 'transform 0.3s ease',
            }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>

          {/* Glow effect */}
          {isHovered && (
            <span
              style={{
                position: 'absolute',
                inset: '-10px',
                background: 'linear-gradient(90deg, #9333ea, #3b82f6, #6366f1)',
                filter: 'blur(20px)',
                opacity: 0.5,
                zIndex: -1,
                borderRadius: '16px',
              }}
            ></span>
          )}
        </a>

        {/* Subtitle */}
        <p
          style={{
            marginTop: '24px',
            color: '#94a3b8',
            fontSize: '0.875rem',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }}
        >
          Click to explore my work ✨
        </p>
      </div>

      {/* Add pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </main>
  )
}
