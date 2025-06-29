// src/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full grid grid-cols-3 items-center bg-transparent px-6 py-4 z-50">
      {/* Vänster: logo */}
      <div className="justify-self-start">
        <Link href="/" legacyBehavior>
          <a className="text-xl">
            <span className="font-extrabold">FREDRIK EKHOLM</span>{' '}
            <span className="font-light">COACHING</span>
          </a>
        </Link>
      </div>

      {/* Mitten: länkar */}
      <ul className="flex justify-center space-x-12">
        <li>
          <Link href="/om-mig" legacyBehavior>
            <a>OM MIG</a>
          </Link>
        </li>
        <li>
          <Link href="/for-foretag" legacyBehavior>
            <a>FÖR FÖRETAG</a>
          </Link>
        </li>
        <li>
          <Link href="/for-privatpersoner" legacyBehavior>
            <a>FÖR PRIVATPERSONER</a>
          </Link>
        </li>
        <li>
          <Link href="/metod" legacyBehavior>
            <a>METOD</a>
          </Link>
        </li>
        <li>
          <Link href="/kontakt" legacyBehavior>
            <a>KONTAKT</a>
          </Link>
        </li>
      </ul>

      {/* Höger (mobil): hamburgermeny */}
      <div className="flex justify-end space-x-4 md:hidden">
        <button aria-label="Open menu">☰</button>
      </div>
    </nav>
}
