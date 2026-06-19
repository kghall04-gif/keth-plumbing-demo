import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, Star, Users, ShieldCheck } from 'lucide-react'

function CountUp({ target, suffix = '', duration = 1600 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!inView) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  return <span ref={ref}>{val}{suffix}</span>
}

const stats = [
  { icon: Clock,       num: 19,   suffix: '',   label: 'Years Industry Experience' },
  { icon: Star,        num: null, suffix: '',   label: 'Google Rating',             fixed: '5.0★' },
  { icon: Users,       num: 10,   suffix: '+',  label: 'Happy Customers' },
  { icon: ShieldCheck, num: null, suffix: '',   label: 'Registered Certifying Plumber', fixed: '✓' },
]

export default function TrustBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, #0B1926 0%, #0F2030 100%)',
        borderTop: '1px solid rgba(20,184,156,0.18)',
        borderBottom: '1px solid rgba(20,184,156,0.18)',
        padding: '56px 0',
      }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
        }}
          className="trust-grid"
        >
          {stats.map(({ icon: Icon, num, suffix, label, fixed }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                textAlign: 'center',
                padding: '12px 8px',
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'rgba(20, 184, 156, 0.1)',
                border: '1px solid rgba(20,184,156,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon size={22} color="var(--accent)" />
              </div>
              <div style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#fff', lineHeight: 1, letterSpacing: '-0.03em' }}>
                {fixed ?? <CountUp target={num} suffix={suffix} />}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500, lineHeight: 1.4 }}>
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 660px) { .trust-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 380px) { .trust-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
