// src/components/Layout.js

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {/* 
        • flex-nowrap + overflow-x-auto: hindrar att kolumnerna krymper – istället blir det horisontell scroll när fönstret blir för smalt
        • min-h-screen: för att fylla hela höjden
      */}
      <div className="flex flex-nowrap overflow-x-auto min-h-screen pt-44 pb-4">
        {/* 1) STATISK VÄNSTERKOLUMN – exakt 1/3, flex-none hindrar shrink/grow */}
        <div className="hidden lg:block flex-none w-1/3 h-full -mt-14 no-reflow">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>

        {/* 2) DYNAMISK MITTKOLUMN – exakt 1/3, flex-none hindrar shrink/grow */}
        <main className="flex-none w-full lg:w-1/3 px-6 items-start justify-center no-reflow">
          <div className="w-full text-black">
            {children}
          </div>
        </main>

        {/* 3) TOM HÖGRKOLUMN – exakt 1/3, flex-none hindrar shrink/grow */}
        <div className="hidden lg:block flex-none w-1/3" />
      </div>

      <Footer />
    </>
  )
}


