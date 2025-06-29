// src/components/Navbar.js

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent">
      {/* Logo med olika vikt */}
      <a href="/" className="text-xl">
        <span className="font-extrabold">FREDRIK EKHOLM</span>{' '}
        <span className="font-light">COACHING</span>
      </a>

      {/* Meny med större spacing */}
      <ul className="hidden md:flex space-x-12">
        <li><a href="/om-mig" className="hover:text-gray-900">OM MIG</a></li>
        <li><a href="/for-foretag" className="hover:text-gray-900">FÖR FÖRETAG</a></li>
        <li><a href="/for-privatpersoner" className="hover:text-gray-900">FÖR PRIVATPERSONER</a></li>
        <li><a href="/metod" className="hover:text-gray-900">METOD</a></li>
        <li><a href="/kontakt" className="hover:text-gray-900">KONTAKT</a></li>
      </ul>

      {/* Ikoner / hamburgermeny */}
      <div className="flex items-center space-x-4">
        <button aria-label="Search">🔍</button>
        <button aria-label="Cart">🛒</button>
        <button className="md:hidden" aria-label="Menu">☰</button>
      </div>
    </nav>
  );
}
