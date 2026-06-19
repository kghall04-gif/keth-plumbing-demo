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
      padding: '0 28px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
      background: scrolled ? 'rgba(13, 20, 20, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(20, 184, 156, 0.1)' : '1px solid transparent',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="13" cy="9" r="5" stroke="#14B89C" strokeWidth="2" fill="none"/>
          <path d="M11 14L10 23H16L15 14" stroke="#14B89C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span style={{ fontWeight: 800, fontSize: '16px', letterSpacing: '-0.3px', color: 'var(--text)' }}>
          <span style={{ color: 'var(--accent)' }}>KETH</span>
          <span style={{ color: 'var(--text-muted)', fontWeight: 600, marginLeft: '6px', fontSize: '13px', letterSpacing: '0.05em' }}>PLUMBING</span>
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <nav style={{ display: 'flex', gap: '24px' }} className="nav-links">
          {['Services', 'Reviews'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
              }}
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
          style={{ fontSize: '13px', padding: '9px 18px', borderRadius: '6px' }}
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
