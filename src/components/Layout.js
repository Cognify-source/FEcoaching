// src/components/Layout.js

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {/* 
        • Halverad top-padding: pt-36 (9rem) istället för pt-72 (18rem)
        • Halverad negativ top-margin på vänsterkolumn: -mt-12 (3rem) istället för -mt-24
      */}
      <div className="flex min-h-screen pt-36 pb-4">
        {/* 1) STATISK VÄNSTERKOLUMN – hero-bilden flyttas aldrig eller ändrar storlek */}
        <div className="hidden lg:block lg:w-1/3 h-full -mt-12">
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
