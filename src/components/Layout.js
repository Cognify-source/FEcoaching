// src/components/Layout.js

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div className="flex min-h-screen pt-44 pb-4">
        {/* 1) STATISK VÄNSTERKOLUMN – fixed width (1/3), ingen shrink */}
        <div className="hidden lg:block lg:w-1/3 h-full -mt-14 no-reflow flex-shrink-0">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>

        {/* 2) DYNAMISK MITTKOLUMN – fixed width (1/3), ingen shrink */}
        <main className="w-full lg:w-1/3 px-6 flex items-start justify-center no-reflow flex-shrink-0">
          <div className="w-full text-black">
            {children}
          </div>
        </main>

        {/* 3) TOM HÖGRKOLUMN för horisontell centrering */}
        <div className="hidden lg:block lg:w-1/3 flex-shrink-0" />
      </div>

      <Footer />
    </>
  )
}
