// src/components/Layout.js

import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      {/* Den fasta toppmenyn */}
      <Navbar />

      {/* 
        Innehållsområde med top- och bottom-padding för nav/footer.
        Tre kolumner i en flex-container: 
        1) Statiskt hero-bild (1/3 bredd, dold på små skärmar)
        2) Dynamiskt innehåll (1/3 bredd, centrerat)
        3) Tom kolumn (1/3 bredd) för horisontell centrering
      */}
      <div className="pt-16 pb-16">
        <div className="flex min-h-screen">
          {/* 1) Hero-bilden */}
          <div className="hidden lg:block lg:w-1/3 h-full">
            <img
              src="/images/hero.png"
              alt="Hero"
              className="object-cover w-full h-full"
            />
          </div>

          {/* 2) Dynamiskt innehåll */}
          <main className="w-full lg:w-1/3 px-6 py-8 flex items-center justify-center">
            <div className="w-full">{children}</div>
          </main>

          {/* 3) Tom högra kolumn */}
          <div className="hidden lg:block lg:w-1/3" />
        </div>
      </div>

      {/* Den fasta footern */}
      <Footer />
    </>
  );
}
