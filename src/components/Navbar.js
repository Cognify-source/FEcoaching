// src/components/Navbar.js

import Link from 'next/link'

export default function Navbar() {
  const links = [
    { href: '/om-mig', label: 'OM MIG' },
    { href: '/metod', label: 'METOD' },
    { href: '/for-privatpersoner', label: 'PRIVAT' },  // uppdaterad label
    { href: '/for-foretag', label: 'FÖRETAG' },
    { href: '/testimonials', label: 'TESTIMONIALS' },
    { href: '/kontakt', label: 'KONTAKT' },
    { href: '/', label: 'HEM' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full overflow-x-auto flex flex-nowrap bg-transparent px-6 py-4 z-50 no-reflow">
      {/* 1) LOGO – fast 800px bredd */}
      <div className="flex-none w-[800px] flex items-center">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-semibold uppercase">
            <span className="font-extrabold">FREDRIK EKHOLM</span>{' '}
            <span className="font-light">COACHING</span>
          </a>
        </Link>
      </div>

      {/* 2) LÄNKAR – fast 800px bredd */}
      <ul className="flex-none w-[800px] flex justify-center space-x-12 items-center">
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

      {/* 3) MOBILMENY – tar upp återstående utrymme */}
      <div className="flex-grow flex justify-end items-center md:hidden">
        <button aria-label="Open menu">☰</button>
      </div>
    </nav>
  )
}
