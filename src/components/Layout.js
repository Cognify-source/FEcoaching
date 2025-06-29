// src/components/Layout.js
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <section className="grid grid-cols-1 lg:grid-cols-3 min-h-screen bg-gray-100">
        {/* 1) Statisk vänsterkolumn med hero-bilden */}
        <div className="hidden lg:block">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>

        {/* 2) Dynamisk mittkolumn som alltid är 1/3 av bredden */}
        <div className="flex items-start justify-center px-6 py-12">
          <div className="w-full">
            {children}
          </div>
        </div>

        {/* 3) Tom högra kolumn för att centrera mittkolumnen */}
        <div className="hidden lg:block" />
      </section>

      <Footer />
    </>
  )
}
