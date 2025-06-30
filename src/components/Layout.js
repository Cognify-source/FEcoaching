// src/components/Layout.js

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {/* 
        • Ökat top-padding med 25 % från pt-36 → pt-44 (11rem)
        • Ökat negativ top-margin på vänsterkolumn med 25 % från -mt-12 → -mt-14 (3.5rem)
      */}
      <div className="flex min-h-screen pt-44 pb-4">
        {/* 1) STATISK VÄNSTERKOLUMN – hero-bilden flyttas aldrig eller ändrar storlek */}
        <div className="hidden lg:block lg:w-1/3 h-full -mt-14">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>

        {/* 2) DYNAMISK MITTKOLUMN – 1/3 bredd, horisontellt centrerad */}
        <main className="w-full lg:w-1/3 px-6 flex items-start justify-center">
          <div className="w-full">
            {children}
          </div>
        </main>

        {/* 3) TOM HÖGRKOLUMN för horisontell centrering */}
        <div className="hidden lg:block lg:w-1/3" />
      </div>

      <Footer />
    </>
  )
}
