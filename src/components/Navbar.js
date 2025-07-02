// src/components/Navbar.js

import Link from 'next/link'

export default function Navbar() {
  const links = [
    { href: '/om-mig', label: 'OM MIG' },
    { href: '/metod', label: 'METOD' },
    { href: '/for-privatpersoner', label: 'PRIVATPERSONER' },
    { href: '/for-foretag', label: 'FÖRETAG' },
    { href: '/kontakt', label: 'KONTAKT' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full grid grid-cols-3 items-center bg-transparent px-6 py-4 z-50">
      {/* Vänster: logo */}
      <div className="justify-self-start">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-semibold uppercase">
            <span className="font-extrabold">FREDRIK EKHOLM</span>{' '}
            <span className="font-light">COACHING</span>
          </a>
        </Link>
      </div>

      {/* Mitten: länkar med uppdaterade labels */}
      <ul className="flex justify-center space-x-12">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} legacyBehavior>
              <a className="text-lg uppercase font-light hover:text-gray-900">
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      {/* Höger (mobil): hamburgermeny */}
      <div className="flex justify-end space-x-4 md:hidden">
        <button aria-label="Open menu">☰</button>
      </div>
    </nav>
  )
}
