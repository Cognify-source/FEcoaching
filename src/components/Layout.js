// src/components/Layout.js

import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div className="flex min-h-screen pt-16 pb-16">
        {/* 1) Statisk vänsterkolumn med hero-bild */}
        <div className="hidden lg:block lg:w-1/3 h-full">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>

        {/* 2) Dynamisk mittkolumn – samma höjd som hero (minst viewport height) */}
        <main className="w-full lg:w-1/3 px-6 py-8 flex flex-col items-center justify-center">
          <div className="w-full text-black">
            {children}
          </div>

          {/* Testimonials (kan tas bort om du vill) */}
          <section className="w-full mt-12 relative">
            <button className="left-arrow absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl text-black">
              ‹
            </button>
            <div className="testimonial-slide relative h-32 overflow-hidden text-black">
              {/* laddas in via fetch */}
            </div>
            <button className="right-arrow absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl text-black">
              ›
            </button>
          </section>
        </main>

        {/* 3) Tom högra kolumn för horisontell centrering */}
        <div className="hidden lg:block lg:w-1/3" />
      </div>
    </>
  )
}
