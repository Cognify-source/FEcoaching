// src/pages/index.js

import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-serif font-semibold text-gray-800 mb-4 text-left">
        <br />
        <br />
        <br />
        Utforska dina inre delar<br />
        – hitta tillbaka till ditt autentiska jag.
      </h1>
      {/* Två radbrytningar efter rubriken */}
      <br />
      <br />

      <p className="text-lg text-gray-600 mb-6">
        Känner du att olika sidor av dig drar åt olika håll? I min coaching får du möta och integrera dina inre delar så att de kan sam­arbeta i stället för att konkurrera. Min coaching bygger på <i>Internal Family Systems (IFS)</i> som grund och kompletterar detta med andra verktyg som stödjer just din resa.
      </p>

      {/* Två radbrytningar före knappen */}
      <br />
      <br />

      <Link href="/kontakt" legacyBehavior>
        <a className="px-6 py-3 border border-gray-400 text-gray-700 font-medium hover:bg-gray-200 transition inline-block">
          BOKA ETT KOSTNADSFRITT INTRODUKTIONSSAMTAL
        </a>
      </Link>
    </>
  )
}
