// src/components/Layout.js
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <section className="grid grid-cols-1 lg:grid-cols-3 items-center min-h-screen">
        {/* Statisk vänsterkolumn med hero-blid */}
        <div className="hidden lg:block h-full">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Dynamisk mittkolumn som är vertikalt centrerad */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full">
            {children}
          </div>
        </div>

        {/* Tom högra kolumn för horisontell centrering */}
        <div className="hidden lg:block" />
      </section>
      <Footer />
    </>
  )
}
