// src/components/Layout.js

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {/* 
        Tre kolumner:
        • Vänster (hero-bild, 1/3 av bredden på desktop)
        • Mitt (dynamiskt innehåll, alltid 1/3 av bredden)
        • Höger (tom, 1/3 av bredden) 
        Nav och footer är fasta över/under, innehållet centrerat.
      */}
      <div className="flex min-h-screen pt-16 pb-16 bg-gray-100">
        {/* 1) Hero-bild, dold på små skärmar */}
        <div className="hidden lg:block lg:w-1/3 h-full">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>

        {/* 2) Dynamiskt innehåll – alltid 1/3 av bredden, centrerat */}
        <main className="w-full lg:w-1/3 px-6 py-12 flex items-center justify-center">
          <div className="w-full">
            {children}
          </div>
        </main>

        {/* 3) Tom högra kolumn för horisontell centrering */}
        <div className="hidden lg:block lg:w-1/3" />
      </div>

      <Footer />
    </>
  )
}
