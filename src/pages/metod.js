// src/pages/metod.js

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
          Grunden i min coaching är <em>Internal Family Systems</em> (IFS) – en
          forskningsstödd modell som ser varje människa som ett dynamiskt "inre
          team" av delar. Varje del bär på specifika känslor, behov och
          strategier, precis som rösterna runt ett mötesbord. När dessa delar
          får utrymme att bli hörda kan ett lugnt och klokt <em>Själv</em> –
          kärnan i din personlighet – kliva fram och leda helheten.
        </p>

        <p>
          Jag möter dig med lyhördhet och empati, inspirerad av principerna i&nbsp;
          <em>Nonviolent Communication (NVC)</em>. Genom att ge språk åt känslor
          och behov utan dömande skapar vi ett klimat där alla dina delar vågar
          tala klarspråk. Tillsammans kartlägger vi dem, lyssnar på deras
          positiva intentioner och hjälper dem att samarbeta snarare än
          konkurrera.
        </p>

        <p>
          Jag kombinerar IFS med NVC:s tydliga kommunikationsverktyg, somatisk
          närvaro, lösningsorienterade frågor och visuella tekniker. Jag växlar
          mellan djup inre dialog och konkreta handlings­steg som stärker det du
          vill se mer av i vardagen – vare sig det gäller stress­reglering,
          relationer eller ledarskap.
        </p>

        <p>
          Processen utgår alltid från din takt, dina mål och en genuin tro på att
          varje del av dig har något värdefullt att bidra med. Resultatet blir
          större klarhet, mer fokus och en stabilare inre kompass – det som
          klienter brukar beskriva som "samlad energi".
        </p>
      </div>
    </>
  );
}
