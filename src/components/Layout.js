// src/components/Layout.js

import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {/* 
        • flex-nowrap + overflow-x-auto: kolumnerna får inte krympa, utan scroll vid för smalt fönster
        • min-h-screen: fyller alltid hela höjden
      */}
      <div className="flex flex-nowrap overflow-x-auto min-h-screen pt-44 pb-4">
        {/* 
          1) STATISK VÄNSTERKOLUMN – fast pixelbredd, flex-none hindrar krympning 
             (byt ut 360px mot önskad bredd)
        */}
        <div className="hidden lg:block flex-none w-[360px] h-full -mt-14 no-reflow">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>

        {/* 
          2) DYNAMISK MITTKOLUMN – fast pixelbredd, flex-none hindrar krympning 
             (byt ut 360px mot samma bredd som vänsterkolumnen)
        */}
        <main className="flex-none w-[360px] px-6 items-start justify-center no-reflow">
          <div className="w-full text-black">
            {children}
          </div>
        </main>

        {/* 
          3) TOM HÖGRKOLUMN – flex-grow för att ta upp kvarvarande utrymme,
          och flex-none så den inte krymper under sina minsta bredd
        */}
        <div className="hidden lg:flex flex-grow flex-none" />
      </div>

      <Footer />
    </>
  )
}

