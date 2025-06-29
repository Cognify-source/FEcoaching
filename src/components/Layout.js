// src/components/Layout.js

import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {/* 
        Tre kolumner:
        • Vänster: statisk hero-bild (1/3 bredd på desktop)
        • Mitten: dynamiskt innehåll (1/3 bredd, centrerat)
        • Höger: tom kolumn (1/3 bredd) för horisontell centrering
      */}
      <div className="flex min-h-screen pt-16 pb-16">
        <div className="hidden lg:block lg:w-1/3 h-full">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>

        <main className="w-full lg:w-1/3 px-6 py-12 flex items-center justify-center">
          <div className="w-full">
            {children}
          </div>
        </main>

        <div className="hidden lg:block lg:w-1/3" />
      </div>
    </>
  )
}
