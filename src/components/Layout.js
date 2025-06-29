// src/components/Layout.js
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <section className="flex items-stretch bg-gray-100 min-h-screen">
        {/* Statisk vänsterkolumn med hero-bilden */}
        <div className="hidden lg:block lg:w-1/3">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Dynamisk högerkolumn som byts vid navigering */}
        <div className="w-full lg:w-2/3 px-6 py-12">
          {children}
        </div>
      </section>
      <Footer />
    </>
  )
}
