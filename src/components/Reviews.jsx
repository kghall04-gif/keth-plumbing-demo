import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reviews = [
  {
    name: 'Sarah M.',
    text: "Greg sorted out a nightmare leak under our kitchen sink in under an hour. Honest about what needed doing, didn't try to upsell anything. Pricing was fair and he cleaned up after himself. Will absolutely be calling him again.",
    date: 'March 2024',
  },
  {
    name: 'James T.',
    text: "Called Greg on a Sunday evening with a burst pipe. He picked up straight away and was at our place within 45 minutes. Sorted it quickly and professionally. Couldn't recommend him more highly.",
    date: 'January 2024',
  },
  {
    name: 'Aroha W.',
    text: "Had Greg install a new hot water cylinder. Great communication, showed up on time, and the work was neat and tidy. Really appreciate having a local plumber you can actually trust.",
    date: 'November 2023',
  },
]

function Stars({ animate = false, inView = true }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {[0,1,2,3,4].map(i => (
        <motion.span
          key={i}
          initial={animate ? { opacity: 0, scale: 0.3 } : {}}
          animate={animate && inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: animate ? i * 0.07 + 0.15 : 0, type: 'spring', stiffness: 260, damping: 18 }}
          style={{ fontSize: '17px', color: '#FFBA2D' }}
        >★</motion.span>
      ))}
    </div>
  )
}

export default function Reviews() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="reviews"
      ref={ref}
      style={{
        padding: '110px 0',
        background: 'linear-gradient(180deg, var(--bg-2) 0%, var(--surface) 100%)',
        borderTop: '1px solid var(--border-light)',
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <div className="section-label">Reviews</div>
          <h2 className="section-heading" style={{ marginBottom: '18px' }}>What Mission Bay Says</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <Stars animate inView={inView} />
            <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>5.0</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>· 10 Google Reviews</span>
          </div>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}
          className="reviews-grid"
        >
          {reviews.map(({ name, text, date }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--radius)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                backdropFilter: 'blur(8px)',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(20,184,156,0.25)'
                e.currentTarget.style.background = 'rgba(20,184,156,0.04)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>Verified Google Review</span>
                </div>
              </div>

              <Stars />

              <p style={{ fontSize: '0.9rem', color: 'rgba(239,244,246,0.75)', lineHeight: 1.72, flexGrow: 1 }}>
                "{text}"
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>{name}</span>
                <span style={{ fontSize: '11px', color: 'var(--text-dim)' }}>{date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) { .reviews-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 500px) and (max-width: 860px) { .reviews-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  )
}
