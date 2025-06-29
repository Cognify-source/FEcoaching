// src/components/Layout.js
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <section className="flex items-center bg-gray-100 min-h-[400px]">
        {/* Statisk vänsterkolumn med hero-bild */}
        <div className="hidden lg:block lg:w-1/3 h-full">
          <img
            src="/images/hero.png"
            alt="Hero"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Dynamisk högerkolumn som byts ut per sida */}
        <div className="w-full lg:w-2/3 px-6 py-12">
          {children}
        </div>
      </section>
      <Footer />
    </>
  )
}
