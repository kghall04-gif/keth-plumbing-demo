export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: '#040D16',
      borderTop: '1px solid rgba(20,184,156,0.12)',
      padding: '60px 0 36px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '48px',
          alignItems: 'start',
          marginBottom: '48px',
        }}
          className="footer-grid"
        >
          {/* Left — Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="10" r="5.5" stroke="#14B89C" strokeWidth="2" fill="none"/>
                <path d="M12 15.5L10.5 26H17.5L16 15.5" stroke="#14B89C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <div style={{ fontWeight: 800, fontSize: '20px', lineHeight: 1, color: 'var(--accent)', letterSpacing: '-0.02em' }}>KETH</div>
                <div style={{ fontWeight: 600, fontSize: '11px', color: 'rgba(239,244,246,0.6)', letterSpacing: '0.2em', marginTop: '2px' }}>PLUMBING</div>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', maxWidth: '300px', lineHeight: 1.65 }}>
              Registered Certifying Plumber · Greg Keth · Serving Mission Bay &amp; wider Auckland, New Zealand.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {['Repairs', 'Installations', 'Maintenance', 'Emergencies'].map(s => (
                <a key={s} href="#services" style={{ fontSize: '13px', color: 'var(--text-dim)', fontWeight: 500, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-dim)'}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Contact */}
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '10px' }}>Get in Touch</div>
            <a
              href="tel:02108357290"
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-0.02em',
                display: 'block',
                marginBottom: '6px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = '#fff'}
            >
              0210 835 7290
            </a>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Mission Bay, Auckland</div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
            © {year} Keth Plumbing. All rights reserved.
          </span>
          <span style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
            19 Years · 5.0★ Rated · Mission Bay, NZ
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-grid > div:last-child { text-align: left !important; }
        }
      `}</style>
    </footer>
  )
}
