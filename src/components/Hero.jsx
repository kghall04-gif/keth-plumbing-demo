import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1800&q=85&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=85&fit=crop',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=85&fit=crop',
  'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1800&q=85&fit=crop',
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const [imgIdx, setImgIdx] = useState(0)
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const textY = useTransform(scrollY, [0, 700], [0, -100])
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.62, 0.82])

  useEffect(() => {
    const id = setInterval(() => setImgIdx(i => (i + 1) % HERO_IMAGES.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '64px',
      }}
    >
      {/* ── Animated image carousel ── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={imgIdx}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1.03 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${HERO_IMAGES[imgIdx]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />
      </AnimatePresence>

      {/* ── Gradient overlay (multiple layers for depth) ── */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          opacity: overlayOpacity,
          background: `
            linear-gradient(to right, rgba(7,17,28,0.98) 0%, rgba(7,17,28,0.75) 55%, rgba(7,17,28,0.3) 100%),
            linear-gradient(to top, rgba(7,17,28,0.9) 0%, transparent 50%)
          `,
        }}
      />

      {/* ── Teal accent glow on left ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 2,
        background: 'radial-gradient(ellipse 45% 70% at 0% 50%, rgba(20,184,156,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* ── Image dots ── */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        right: '48px',
        zIndex: 10,
        display: 'flex',
        gap: '8px',
      }}>
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setImgIdx(i)}
            style={{
              width: i === imgIdx ? '28px' : '8px',
              height: '8px',
              borderRadius: '100px',
              background: i === imgIdx ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="container" style={{ position: 'relative', zIndex: 5, width: '100%' }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{ maxWidth: '640px' }}
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(20, 184, 156, 0.12)',
              border: '1px solid rgba(20, 184, 156, 0.3)',
              borderRadius: '100px',
              padding: '7px 16px',
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--accent)',
              marginBottom: '28px',
            }}>
              <motion.span
                animate={{ scale: [1, 1.35, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2.5 }}
                style={{ display: 'inline-block' }}
              >⭐</motion.span>
              5.0 Rating · 10 Google Reviews
            </div>
          </motion.div>

          {/* Brand headline */}
          <motion.div variants={fadeUp} style={{ y: textY }}>
            <motion.h1
              style={{
                fontSize: 'clamp(3.2rem, 8vw, 6.5rem)',
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                marginBottom: '16px',
              }}
            >
              <span style={{ color: 'var(--accent)', display: 'block' }}>Keth</span>
              <span style={{ color: '#FFFFFF', display: 'block' }}>Plumbing.</span>
            </motion.h1>
          </motion.div>

          {/* Divider line */}
          <motion.div
            variants={fadeUp}
            style={{
              width: '60px',
              height: '3px',
              background: 'var(--accent)',
              borderRadius: '100px',
              marginBottom: '24px',
              boxShadow: '0 0 16px var(--accent-glow)',
            }}
          />

          {/* Value prop */}
          <motion.p
            variants={fadeUp}
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.2rem)',
              color: 'rgba(239,244,246,0.85)',
              lineHeight: 1.65,
              marginBottom: '36px',
              fontWeight: 500,
              maxWidth: '480px',
            }}
          >
            Reliable repairs, installations & emergency call-outs across Mission Bay
            and wider Auckland — from a plumber you can actually trust.
          </motion.p>

          {/* Quick stats row */}
          <motion.div
            variants={fadeUp}
            style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '36px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { val: '19 yrs', label: 'Experience' },
              { val: '5.0★', label: 'Google Rating' },
              { val: 'Registered', label: 'Certifying Plumber' },
            ].map(({ val, label }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{val}</span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
          >
            <a href="tel:02108357290" className="btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>
              Call Greg — 0210 835 7290
            </a>
            <a href="#services" className="btn-outline" style={{ fontSize: '15px' }}>
              Our Services
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 10,
        }}
      >
        <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 560px) {
          #hero .container > div { max-width: 100% !important; }
        }
      `}</style>
    </section>
  )
}
