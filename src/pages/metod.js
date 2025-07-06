// src/pages/metod.js

import Link from 'next/link'

export const metadata = {
  title: "Min metod – Fredrik Ekholm"
}

export default function Metod() {
  return (
    <>
      <h1 className="text-4xl font-serif font-extrabold text-gray-800 mb-4 text-left">
        MIN METOD
      </h1>
      <div className="text-lg text-gray-600 space-y-4 relative">
        {/* Bilden flyter till höger och tar upp cirka 1/3 av bredden */}
        <div className="float-right w-full sm:w-1/3 ml-4 mb-4">
          <img
            src="/images/IFS-illu_NY.png"
            alt="Illustration av IFS-processen"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <p>
          Lyhördhet och empati, i kombination med principerna i&nbsp;
          <a
            href="https://www.cnvc.org/"
            className="underline hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>Nonviolent Communication (NVC)</em>
          </a>{" "}
          och{" "}
          <a
            href="https://ifs-institute.com/"
            className="underline hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <em>Internal Family Systems</em>
          </a>{" "}
          (IFS) utgör kärnan i min coaching. Genom att ge språk åt känslor
          och behov utan dömande skapas ett inre klimat där alla dina delar vågar
          tala klarspråk. Tillsammans kartlägger vi dem, lyssnar på deras
          positiva intentioner och hjälper dem att samarbeta snarare än
          konkurrera.
        </p>

        <p>
          Jag kombinerar principer från {" "}
          <a
            href="https://ifs-institute.com/"
            className="underline hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            IFS
          </a>{" "}
          med{" "}
          <a
            href="https://www.cnvc.org/"
            className="underline hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            NVC:s
          </a>{" "}
          tydliga kommunikationsverktyg, somatisk närvaro, lösningsorienterade
          frågor och visuella tekniker. Jag växlar mellan djup inre dialog och
          konkreta handlings­steg som stärker det du vill se mer av i
          vardagen – vare sig det gäller inre harmoni, relationer eller
          yttre ledarskap.
        </p>

        <p>
          Jag utgår alltid från din takt, dina mål och en genuin tro på att
          varje del av dig har något värdefullt att bidra med. Resultatet blir
          större klarhet, mer fokus och en stabilare inre vägledning och
          harmoni.
        </p>
      </div>
    </>
  )
}
