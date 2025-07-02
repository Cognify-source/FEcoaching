// src/components/Layout.js

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {/* 
        • flex-nowrap: se till att kolumnerna inte wrappar eller krymper
        • min-h-screen: minst hela viewporthöjd
      */}
      <div className="flex flex-nowrap min-h-screen pt-44 pb-4">
        {/* 1) STATISK VÄNSTERKOLUMN – fast 1/3-bredd på lg+, ingen shrink */}
        <div className="hidden lg:block lg:flex-none lg:w-1/3 h-full -mt-14 no-reflow">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>

        {/* 2) DYNAMISK MITTKOLUMN – fast 1/3-bredd på lg+, ingen shrink */}
        <main className="flex-none w-full lg:flex-none lg:w-1/3 px-6 flex items-start justify-center no-reflow">
          <div className="w-full text-black">
            {children}
          </div>
        </main>

        {/* 3) TOM HÖGERKOLUMN – fast 1/3-bredd på lg+, ingen shrink */}
        <div className="hidden lg:block lg:flex-none lg:w-1/3" />
      </div>

      <Footer />
    </>
  )
}
