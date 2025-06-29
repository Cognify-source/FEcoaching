// src/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="grid grid-cols-3 items-center px-6 py-4 bg-transparent">
      {/* 1) Logo - vänsterställd */}
      <div className="justify-self-start">
        <Link href="/" legacyBehavior>
          <a className="text-xl">
            <span className="font-extrabold">FREDRIK EKHOLM</span>{' '}
            <span className="font-light">COACHING</span>
          </a>
        </Link>
      </div>

      {/* 2) Meny - centrerad */}
      <ul className="flex justify-center space-x-12">
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

      {/* 3) Ikoner/hamburgermeny - högerställd */}
      <div className="flex justify-end space-x-4">
        <button aria-label="Search">🔍</button>
        <button aria-label="Cart">🛒</button>
        <button className="md:hidden" aria-label="Menu">☰</button>
      </div>
    </nav>
  );
}
