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
        Känner du att olika sidor av dig drar åt olika håll och skapar konflikt – i dig själv, i ditt
        ledarskap eller i ditt team? Jag hjälper både privatpersoner och
        företag att möta och integrera sina inre delar så att de kan samarbeta i
        stället för att konkurrera. Min coaching använder principer från {" "}
        <a
          href="https://ifs-institute.com/"
          className="underline hover:text-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Internal Family Systems (IFS)</em>
        </a>{" "}
        som grund och förstärker detta med kärnprinciperna från{" "}
        <a
          href="https://www.cnvc.org/"
          className="underline hover:text-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Nonviolent Communication (NVC)</em>
        </a>
        , vilket ger en tydlig och empatisk dialog både inom dig och mellan människor. Tillsammans väljer vi de
        praktiska verktyg som bäst stödjer just din – eller er – resa mot klarhet, fokus och harmoni.
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
