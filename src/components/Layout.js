// src/components/Layout.js
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      {/* 
        Grid med tre kolumner: 
        1) statisk hero-bild 
        2) dynamiskt innehåll 
        3) tom kolumn för centrering 
        Padding top/bottom motsvarar nav & footer-höjd
      */}
      <section className="grid grid-cols-1 lg:grid-cols-3 min-h-screen bg-gray-100 items-stretch pt-16 pb-16">
        {/* 1. Statisk vänsterkolumn med hero-bilden */}
        <div className="hidden lg:block h-full">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>

        {/* 2. Dynamisk mittkolumn där {children} byts ut */}
        <div className="flex items-center justify-center px-6">
          <div className="w-full lg:w-2/3">
            {children}
          </div>
        </div>

        {/* 3. Tom högra kolumn för horisontell centrering */}
        <div className="hidden lg:block" />
      </section>

      <Footer />
    </>
  );
}
