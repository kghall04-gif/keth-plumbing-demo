import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wrench, Droplet, Settings, Zap } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Repairs',
    desc: 'Fast, honest fixes for leaks, blockages, and everyday plumbing problems. No guesswork, no inflated bills.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=70&fit=crop',
    accent: 'Leaks · Blockages · Tapware',
  },
  {
    icon: Droplet,
    title: 'Installations',
    desc: 'New fittings, fixtures, hot water systems, and full bathroom plumbing done right the first time.',
    img: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=700&q=70&fit=crop',
    accent: 'Hot Water · Bathrooms · Fixtures',
  },
  {
    icon: Settings,
    title: 'Maintenance',
    desc: 'Scheduled checks and upkeep to stop small issues becoming expensive ones. Prevention over panic.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=70&fit=crop',
    accent: 'Annual Checks · Preventative Care',
  },
  {
    icon: Zap,
    title: 'Emergency Call-Outs',
    desc: 'Burst pipe at 11pm? Greg answers the phone. Fast response when it actually matters — no call centre.',
    img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&q=70&fit=crop',
    accent: '24/7 · Fast Response',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="services"
      ref={ref}
      style={{
        padding: '110px 0',
        background: 'var(--bg)',
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div className="section-label">Services</div>
          <h2 className="section-heading">Every job, done properly.</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginTop: '14px', maxWidth: '480px', margin: '14px auto 0' }}>
            Maintenance, repairs, installations and emergency call-outs across Mission Bay and wider Auckland.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
        }}
          className="services-grid"
        >
          {services.map(({ icon: Icon, title, desc, img, accent }, i) => (
            <ServiceCard
              key={title}
              Icon={Icon}
              title={title}
              desc={desc}
              img={img}
              accent={accent}
              delay={i * 0.1}
              inView={inView}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

function ServiceCard({ Icon, title, desc, img, accent, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      style={{
        position: 'relative',
        background: 'var(--surface)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(20,184,156,0.35)'
        e.currentTarget.style.boxShadow = '0 0 48px rgba(20,184,156,0.1), 0 12px 40px rgba(0,0,0,0.4)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border-light)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Image header */}
      <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
        <img
          src={img}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(15,32,48,0.95) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'rgba(20,184,156,0.15)',
            border: '1px solid rgba(20,184,156,0.35)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Icon size={18} color="var(--accent)" />
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px 24px 24px' }}>
        <p style={{ fontSize: '0.93rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
          {desc}
        </p>
        <div style={{
          fontSize: '11px',
          fontWeight: 700,
          color: 'var(--accent)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}>
          {accent}
        </div>
      </div>
    </motion.div>
  )
}
