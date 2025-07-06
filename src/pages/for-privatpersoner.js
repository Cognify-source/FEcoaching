// src/pages/for-privatpersoner.js

export const metadata = {
  title: "För privatpersoner – Fredrik Ekholm"
};

export default function ForPrivatpersoner() {
  return (
    <>
      <h1 className="text-4xl font-serif font-extrabold text-gray-800 mb-4 text-left">
        FÖR PRIVATPERSONER
      </h1>
      <div className="text-lg text-gray-600 space-y-4 relative">
        {/* Bilden flyter till höger och tar upp cirka 1/3 av bredden */}
        <div className="float-right w-full sm:w-1/3 ml-4 mb-4">
          <img
            src="/images/privat_NY.png"
            alt="Illustration av coaching för privatpersoner"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <p>
          Känner du dig fast i gamla hjulspår? Tar din inre kritiker eller gamla mönster över
          och hindrar dig från att leva det liv du vill? Min coaching kan hjälpa dig att skapa
          mer inre harmoni och självmedkänsla, så att du kan fatta tydligare beslut, få ett rikare
          inre liv och manifestera ditt bästa jag.
        </p>

        <p>
          Utgångspunkten är principer från <em>Internal Family Systems</em> (IFS) – en modell som gör
          dina "delpersonligheter" till samarbetspartners i stället för
          motståndare. Vi integrerar också principer från&nbsp;
          <em>Nonviolent Communication (NVC)</em> för att fördjupa din förmåga
          att lyssna empatiskt, formulera dina behov utan dömande och möta andra
          med samma respekt. Tillsammans utforskar vi delarnas behov och
          intentioner genom guidade reflektioner och praktiska övningar.
          Resultatet blir en lugnare inre dialog, minskat negativt self talk och ett ökat självförtroende.
        </p>

        <p>
          Jag anpassar mig coaching efter var du befinner dig i livet. Oavsett
          om du vill hantera oro, bryta gamla mönster eller hitta ny riktning
          kombinerar jag evidensbaserade tekniker med empati och tydligt fokus
          på dina mål. Boka ett kostnadsfritt introduktionssamtal och ta första
          steget mot ett liv med större klarhet, balans och glädje.
        </p>
      </div>
    </>
  );
}
