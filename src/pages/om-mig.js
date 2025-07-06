// src/pages/om-mig.js

import Link from 'next/link'

export const metadata = {
  title: "Om mig – Fredrik Ekholm"
}

export default function OmMig() {
  return (
    <>
      <h1 className="text-4xl font-serif font-extrabold text-gray-800 mb-4 text-left">
        OM MIG
      </h1>
      <div className="text-lg text-gray-600 space-y-4">
        <p>
          <strong>Mitt namn är Fredrik Ekholm</strong> och jag har i över tjugo år
          intresserat och fördjupat mig i personlig utveckling och människans inre
          drivkrafter. Jag har under resan utforskat många metoder – från
          klassisk coachning, via meditation och yoga till somatiska tekniker – och
          landat i ett arbetssätt där bland andra{" "}
          <a
            href="https://ifs-institute.com/"
            className="underline hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>Internal Family Systems (IFS)</em>
          </a>{" "}
          och{" "}
          <a
            href="https://www.cnvc.org/"
            className="underline hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>Nonviolent Communication (NVC)</em>
          </a>{" "}
          är centrala komponenter i verktygslådan.
        </p>
        <p>
          Min coaching har av klienter beskrivits som lyhörd, mjuk och samtidigt handfast.
          Jag ger plats åt tystnaden när den behövs, följer ditt tempo och
          hjälper dig sätta ord på det som känns diffust och oklart. Klienter uppskattar
          min förmåga att både hålla ett varmt, tryggt rum och samtidigt rikta
          fokus mot konkreta steg som löser faktiska problem.
        </p>
        <p>
          I sessionerna kombinerar jag guidade inre möten med dina
          "delpersonligheter", praktiska övningar och visuella tekniker.
          Oavsett om du vill stärka ditt ledarskap, hantera stress eller hitta
          riktning i livet utformar jag varje samtal efter dina behov.
          Resultatet brukar bli ökad självmedvetenhet, tydligare beslut och en
          mer samlad inre kompass.
        </p>
        <p>
          Välkommen att boka ett första samtal. Tillsammans skapar vi de
          förutsättningar du behöver för långsiktig balans, klarhet och
          harmoni – både i ditt eget liv och i de sammanhang där du leder
          andra.
        </p>
      </div>
    </>
  )
}
