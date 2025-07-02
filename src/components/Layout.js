// src/components/Layout.js

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {/* 
        • flex-nowrap för att inga kolumner ska brytas
        • min-h-screen för att fylla hela höjden
      */}
      <div className="flex flex-nowrap min-h-screen pt-44 pb-4">
        {/* 
          1) STATISK VÄNSTERKOLUMN – alltid exakt 1/3, ingen flex-växling eller krympning 
        */}
        <div className="hidden lg:flex basis-1/3 flex-grow-0 flex-shrink-0 h-full -mt-14 no-reflow">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>

        {/*
          2) DYNAMISK MITTKOLUMN – alltid exakt 1/3, ingen flex-växling eller krympning
             Innehållet centreras horisontellt, startar direkt under navbar
        */}
        <main className="flex basis-1/3 flex-grow-0 flex-shrink-0 px-6 items-start justify-center no-reflow">
          <div className="w-full text-black">
            {children}
          </div>
        </main>

        {/*
          3) TOM HÖGRKOLUMN – alltid exakt 1/3, håller mittkolumnen centrerad
        */}
        <div className="hidden lg:flex basis-1/3 flex-grow-0 flex-shrink-0" />
      </div>

      <Footer />
    </>
  )
}
