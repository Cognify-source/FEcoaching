// src/components/Layout.js

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {/* 
        • Lägg tillbaka min-h-screen så container alltid är minst viewport-höjd.
        • Använd h-full på vänsterkolumnen så bilden alltid fyller hela den höjden.
      */}
      <div className="flex min-h-screen pt-72 pb-4">
        {/* 1) STATISK VÄNSTERKOLUMN – hero-bilden flyttas aldrig eller ändrar storlek */}
        <div className="hidden lg:block lg:w-1/3 h-full -mt-24">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>

        {/* 2) DYNAMISK MITTKOLUMN – 1/3 bredd, horisontellt centrerad, innehåll startar längre ner */}
        <main className="w-full lg:w-1/3 px-6 flex items-start justify-center">
          <div className="w-full">
            {children}
          </div>
        </main>

        {/* 3) TOM HÖGERKOLUMN för horisontell centrering */}
        <div className="hidden lg:block lg:w-1/3" />
      </div>

      <Footer />
    </>
  )
}
