import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function EmergencyCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=1600&q=80&fit=crop)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(7,17,28,0.97) 0%, rgba(10,35,50,0.93) 50%, rgba(14,45,55,0.88) 100%)',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(20,184,156,0.1) 0%, transparent 70%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '100px 28px' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '22px' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(20,184,156,0.15)',
            border: '1px solid rgba(20,184,156,0.35)',
            borderRadius: '100px',
            padding: '6px 16px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          }}>
            24 / 7 Emergency
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: '#fff',
          }}>
            Plumbing Emergency?
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'rgba(239,244,246,0.75)',
            maxWidth: '440px',
            lineHeight: 1.65,
          }}>
            Greg answers the phone. No call centres, no waiting around.
            Fast response when it actually matters.
          </p>

          <motion.a
            href="tel:02108357290"
            className="btn-primary"
            animate={{
              boxShadow: [
                '0 0 28px rgba(20,184,156,0.35), 0 4px 20px rgba(0,0,0,0.4)',
                '0 0 60px rgba(20,184,156,0.6), 0 4px 28px rgba(0,0,0,0.5)',
                '0 0 28px rgba(20,184,156,0.35), 0 4px 20px rgba(0,0,0,0.4)',
              ],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              padding: '18px 44px',
              borderRadius: '12px',
              marginTop: '6px',
              fontWeight: 800,
            }}
          >
            📞 Call Greg — 0210 835 7290
          </motion.a>

          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '-8px' }}>
            Tap to call · Available for emergencies · Mission Bay, Auckland
          </p>
        </motion.div>
      </div>
    </section>
  )
}
