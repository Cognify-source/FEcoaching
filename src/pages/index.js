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
      {/* En radbrytning efter rubriken */}
      <br />

      <p className="text-lg text-gray-600 mb-6">
        Känner du att olika sidor av dig drar åt olika håll – i dig själv, i ditt
        ledarskap eller i ditt team? Min coaching hjälper både privatpersoner och
        företag att möta och integrera sina inre delar så att de kan samarbeta i
        stället för att konkurrera. Arbetet vilar på <i>Internal Family Systems (IFS) </i>
        och fördjupas med kärnprinciperna från&nbsp;
        <i>Nonviolent Communication (NVC)</i>, vilket ger en tydlig men empatisk
        dialog både inom dig och mellan människor. Tillsammans väljer vi de
        praktiska verktyg som bäst stödjer just din – eller er – resa mot
        hållbar klarhet, fokus och framåtrörelse.
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
