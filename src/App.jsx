import { useState } from 'react'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Reviews from './components/Reviews'
import EmergencyCTA from './components/EmergencyCTA'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <LoadingScreen onDone={() => setLoaded(true)} />
      <CursorGlow />
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <Navbar />
        <main>
          <Hero />
          <TrustBar />
          <Services />
          <Reviews />
          <EmergencyCTA />
        </main>
        <Footer />
      </div>
    </>
  )
}
