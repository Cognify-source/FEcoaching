// src/components/Layout.js

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {/* 
        • flex-nowrap + overflow-x-auto: förhindrar att kolumnerna krymper, ger horisontell scroll vid för smalt fönster
        • min-h-screen: fyller alltid hela viewport-höjden
      */}
      <div className="flex flex-nowrap overflow-x-auto min-h-screen pt-44 pb-4">
        {/* 
          1) STATISK VÄNSTERKOLUMN – fast 820px bredd, förhindrar krympning 
        */}
        <div className="hidden lg:block flex-none w-[820px] h-full -mt-14 no-reflow">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>

        {/* 
          2) DYNAMISK MITTKOLUMN – fast 800px bredd, förhindrar krympning 
        */}
        <main className="flex-none w-[800px] px-6 items-start justify-center no-reflow">
          <div className="w-full text-black">
            {children}
          </div>
        </main>

        {/* 
          3) TOM HÖGRKOLUMN – tar upp återstående utrymme 
        */}
        <div className="hidden lg:flex flex-grow flex-none" />
      </div>

      <Footer />
    </>
  )
}
