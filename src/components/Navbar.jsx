import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '0 20px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
      background: scrolled ? 'rgba(7,17,28,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(20, 184, 156, 0.12)' : '1px solid transparent',
    }}>
      {/* Wordmark */}
      <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '9px', textDecoration: 'none' }}>
        <svg width="24" height="24" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13" cy="9" r="5" stroke="#14B89C" strokeWidth="2" fill="none"/>
          <path d="M11 14L10 23H16L15 14" stroke="#14B89C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ fontWeight: 800, fontSize: '15px', letterSpacing: '-0.3px', color: 'var(--text)' }}>
          <span style={{ color: 'var(--accent)' }}>KETH</span>
          <span style={{ color: 'var(--text-muted)', fontWeight: 600, marginLeft: '5px', fontSize: '12px', letterSpacing: '0.06em' }}>PLUMBING</span>
        </span>
      </a>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <nav className="nav-links" style={{ display: 'flex', gap: '22px' }}>
          {['Services', 'Reviews'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="tel:02108357290"
          className="btn-primary"
          style={{ fontSize: '13px', padding: '9px 16px', borderRadius: '7px', width: 'auto' }}
        >
          Call Now
        </a>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
