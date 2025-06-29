// src/components/Layout.js

import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="min-h-screen flex items-start bg-gray-100">
        {children}
      </main>
      <Footer />
    </>
  )
}
