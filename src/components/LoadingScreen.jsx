import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onDone }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false)
      setTimeout(onDone, 500)
    }, 1500)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9000,
            background: '#040D16',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{
              fontSize: 'clamp(2rem, 6vw, 2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1,
            }}>
              <span style={{ color: '#14B89C' }}>Keth </span>
              <span style={{ color: '#fff' }}>Plumbing</span>
            </div>
            <div style={{ fontSize: '12px', color: '#8BA8B8', letterSpacing: '0.18em', marginTop: '6px', textTransform: 'uppercase', fontWeight: 600 }}>
              Mission Bay · Auckland
            </div>
          </motion.div>

          <svg width="220" height="36" viewBox="0 0 220 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M0 28 C40 28 50 8 90 8 C130 8 140 28 180 28 C200 28 210 18 220 18"
              stroke="#14B89C"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.35, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="220"
              cy="18"
              r="4"
              fill="#14B89C"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.35, duration: 0.25, type: 'spring' }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
