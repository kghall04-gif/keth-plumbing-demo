import { useEffect, useRef, useState } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true)
      return
    }

    const move = (e) => {
      if (!glowRef.current) return
      glowRef.current.style.left = e.clientX + 'px'
      glowRef.current.style.top = e.clientY + 'px'
    }

    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  if (isTouch) return null

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9998,
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(20,184,156,0.07) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.1s linear, top 0.1s linear',
        left: '-200px',
        top: '-200px',
      }}
    />
  )
}
