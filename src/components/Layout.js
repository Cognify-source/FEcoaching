// src/components/Layout.js

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div className="flex flex-nowrap overflow-x-auto min-h-screen pt-44 pb-4">
        {/* 1) STATISK VÄNSTERKOLUMN – container 850px, bild 800px vänsterställd */}
        <div className="hidden lg:block flex-none w-[850px] h-full -mt-14 no-reflow">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-[800px] h-full"
          />
        </div>

        {/* 2) DYNAMISK MITTKOLUMN – fortfarande fast 800px bredd */}
        <main className="flex-none w-[800px] px-6 items-start justify-center no-reflow">
          <div className="w-full text-black">
            {children}
          </div>
        </main>

        {/* 3) TOM HÖGRKOLUMN – tar upp återstående utrymme */}
        <div className="hidden lg:flex flex-grow flex-none" />
      </div>

      <Footer />
    </>
  )
}
