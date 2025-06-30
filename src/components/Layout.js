// src/components/Layout.js

import { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  const heroRef = useRef(null)
  const [heroHeight, setHeroHeight] = useState('auto')

  useEffect(() => {
    function updateHeight() {
      if (heroRef.current) {
        setHeroHeight(`${heroRef.current.clientHeight}px`)
      }
    }
    // Sätt initialt
    updateHeight()
    // Uppdatera om fönstret ändrar storlek
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return (
    <>
      <Navbar />

      <div
        className="flex pt-16 pb-16 bg-transparent items-stretch"
        style={{ height: heroHeight }}
      >
        {/* Statisk vänsterkolumn med hero-bild */}
        <div
          ref={heroRef}
          className="hidden lg:block lg:w-1/3 h-auto"
        >
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Dynamisk mittkolumn */}
        <main className="w-full lg:w-1/3 px-6 py-8 flex flex-col items-center justify-center">
          <div className="w-full text-black">
            {children}
          </div>

          {/* Testimonials-sektionen */}
          <section className="w-full mt-12 relative">
            <button className="left-arrow absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl text-black">
              ‹
            </button>
            <div className="testimonial-slide relative h-32 overflow-hidden">
              {/* laddas in via fetch */}
            </div>
            <button className="right-arrow absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl text-black">
              ›
            </button>
          </section>
        </main>

        {/* Tom högra kolumn för horisontell centrering */}
        <div className="hidden lg:block lg:w-1/3" />
      </div>
    </>
  )
}
