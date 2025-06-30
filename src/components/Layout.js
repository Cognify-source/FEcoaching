// src/components/Layout.js

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div className="flex pt-16 pb-4">
        {/* 1) STATISK VÄNSTERKOLUMN – hero-bilden flyttas aldrig */}
        <div className="hidden lg:block lg:w-1/3 h-auto">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>

        {/* 2) DYNAMISK MITTKOLUMN – exakt 1/3 bredd, centrerad horisontellt och vertikalt */}
        <main className="w-full lg:w-1/3 px-6 flex items-center justify-center">
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
