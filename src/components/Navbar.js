// src/components/Navbar.js
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent">
      {/* Logo */}
      <Link href="/" legacyBehavior>
        <a className="text-xl">
          <span className="font-extrabold">FREDRIK EKHOLM</span>{' '}
          <span className="font-light">COACHING</span>
        </a>
      </Link>

      {/* Meny med client-side navigation */}
      <ul className="hidden md:flex space-x-12">
        <li>
          <Link href="/om-mig" legacyBehavior>
            <a className="hover:text-gray-900">OM MIG</a>
          </Link>
        </li>
        <li>
          <Link href="/for-foretag" legacyBehavior>
            <a className="hover:text-gray-900">FÖR FÖRETAG</a>
          </Link>
        </li>
        <li>
          <Link href="/for-privatpersoner" legacyBehavior>
            <a className="hover:text-gray-900">FÖR PRIVATPERSONER</a>
          </Link>
        </li>
        <li>
          <Link href="/metod" legacyBehavior>
            <a className="hover:text-gray-900">METOD</a>
          </Link>
        </li>
        <li>
          <Link href="/kontakt" legacyBehavior>
            <a className="hover:text-gray-900">KONTAKT</a>
          </Link>
        </li>
      </ul>

      {/* Mobil-meny-knapp */}
      <div className="flex items-center space-x-4 md:hidden">
        <button aria-label="Open menu">☰</button>
      </div>
    </nav>
  )
}
