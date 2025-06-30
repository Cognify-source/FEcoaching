// src/components/Layout.js

import { useEffect } from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  useEffect(() => {
    const slideContainer = document.querySelector('.testimonial-slide')
    if (!slideContainer) return

    fetch('/data/testimonials.html')
      .then(resp => {
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
        return resp.text()
      })
      .then(html => {
        slideContainer.innerHTML = html
        initTestimonialsSlider()
      })
      .catch(err => console.error('Error loading testimonials:', err))

    function initTestimonialsSlider() {
      const slides   = Array.from(document.querySelectorAll('.testimonial'))
      const leftBtn  = document.querySelector('.left-arrow')
      const rightBtn = document.querySelector('.right-arrow')
      let current = 0
      let interval

      slides.forEach((slide, i) => {
        Object.assign(slide.style, {
          position:   'absolute',
          top:        '0',
          left:       '0',
          width:      '100%',
          transition: 'transform 0.5s ease, opacity 0.5s ease',
          transform:  i === 0 ? 'translateX(0)' : 'translateX(100%)',
          opacity:    i === 0 ? '1' : '0'
        })
      })

      function showSlide(nextIndex, forward = true) {
        if (nextIndex === current) return
        const outgoing = slides[current]
        const incoming = slides[nextIndex]

        incoming.style.transition = 'none'
        incoming.style.transform  = `translateX(${forward ? 100 : -100}%)`
        incoming.style.opacity    = '1'
        incoming.offsetHeight

        incoming.style.transition = 'transform 0.5s ease, opacity 0.5s ease'
        incoming.style.transform  = 'translateX(0)'
        outgoing.style.transform  = `translateX(${forward ? -100 : 100}%)`
        outgoing.style.opacity    = '0'

        setTimeout(() => {
          outgoing.style.transition = 'none'
          outgoing.style.transform  = `translateX(${forward ? 100 : -100}%)`
          outgoing.style.opacity    = '0'
          outgoing.offsetHeight
          outgoing.style.transition = 'transform 0.5s ease, opacity 0.5s ease'
        }, 500)

        current = nextIndex
      }

      function next() {
        showSlide((current + 1) % slides.length, true)
      }
      function prev() {
        showSlide((current - 1 + slides.length) % slides.length, false)
      }

      leftBtn.addEventListener('click', () => {
        clearInterval(interval)
        prev()
        interval = setInterval(next, 10000)
      })
      rightBtn.addEventListener('click', () => {
        clearInterval(interval)
        next()
        interval = setInterval(next, 10000)
      })

      interval = setInterval(next, 10000)
    }
  }, [])

  return (
    <>
      <Navbar />

      {/* Huvudinnehåll: hero + dynamiskt nav-segment */}
      <div className="flex min-h-screen pt-16 pb-16">
        {/* Statisk hero-bild */}
        <div className="hidden lg:block lg:w-1/3 h-full">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Dynamisk mittkolumn */}
        <main className="w-full lg:w-1/3 px-6 py-8 flex items-center justify-center">
          <div className="w-full text-black">
            {children}
          </div>
        </main>

        {/* Tom högra kolumn för centrering */}
        <div className="hidden lg:block lg:w-1/3" />
      </div>

      {/* Testimonials – full bredd, under hero-sektionen, text centrerad */}
      <section className="w-full px-6 py-8 bg-transparent text-center text-black relative">
        <button className="left-arrow absolute left-6 top-1/2 transform -translate-y-1/2 text-2xl">
          ‹
        </button>
        <div className="testimonial-slide inline-block mx-12 relative h-32 overflow-hidden"></div>
        <button className="right-arrow absolute right-6 top-1/2 transform -translate-y-1/2 text-2xl">
          ›
        </button>
      </section>
    </>
  )
}
