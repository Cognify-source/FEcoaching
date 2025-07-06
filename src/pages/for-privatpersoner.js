// src/pages/for-privatpersoner.js

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
          Känner du att olika delar av dig drar åt olika håll? Kanske vill en del
          gasa framåt medan en annan trycker på bromsen. Min coaching hjälper
          dig att skapa inre samklang och självmedkänsla, så att du kan fatta
          tydligare beslut och leva mer i linje med vad som verkligen betyder
          något för dig.
        </p>

        <p>
          Utgångspunkten är <em>Internal Family Systems</em> – en modell som gör
          dina "delpersonligheter" till samarbetspartners i stället för
          motståndare. Vi integrerar också nycklarna från&nbsp;
          <em>Nonviolent Communication (NVC)</em> för att fördjupa din förmåga
          att lyssna empatiskt, formulera dina behov utan dömande och möta andra
          med samma respekt. Tillsammans utforskar vi delarnas behov och
          intentioner genom guidade reflektioner och praktiska övningar.
          Resultatet blir en lugnare inre dialog, minskad stress och ett ökat
          självförtroende.
        </p>

        <p>
          Varje program skräddarsys efter var du befinner dig i livet. Oavsett
          om du vill hantera oro, bryta gamla mönster eller hitta ny riktning
          kombinerar jag evidensbaserade tekniker med empati och tydligt fokus
          på dina mål. Boka ett kostnadsfritt introduktionssamtal och ta första
          steget mot ett liv med större klarhet, balans och glädje.
        </p>
      </div>
    </>
  );
}
