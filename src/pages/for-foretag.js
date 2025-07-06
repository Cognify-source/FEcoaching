
// src/pages/for-foretag.js

export default function ForForetag() {
  return (
    <>
      <h1 className="text-4xl font-serif font-extrabold text-gray-800 mb-4 text-left">
        FÖR FÖRETAG
      </h1>
      <div className="text-lg text-gray-600 space-y-4 relative">
        {/* Bilden flyter till höger och tar upp cirka 1/3 av bredden */}
        <div className="float-right w-full sm:w-1/3 ml-4 mb-4">
          <img
            src="/images/foretag_NY.png"
            alt="Illustration av företagscoaching"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <p>
          När era medarbetare drar åt olika håll blir organisationen splittrad –
          beslut tar längre tid och energi går förlorad. Min coaching vänder
          trenden. Med <em>Internal Family Systems</em> som grund och verktyg i
          målsättning, <em>Nonviolent Communication (NVC)</em> och stressreglering
          guidar jag chefer och team till inre samstämmighet.
        </p>

        <p>
          Genom strukturerade NVC-samtal synliggör vi motstridiga drivkrafter och
          gör dem till en resurs i stället för ett hinder. Resultatet blir ledare
          som fattar tydliga beslut och medarbetare som känner sig hörda,
          delaktiga och mindre stressade. Forskning visar att psykologisk
          trygghet driver innovation, sänker sjukfrånvaron och stärker
          kundrelationer – effekter ni märker när konflikter lugnar sig och
          samarbetet flyter.
        </p>

        <p>
          Varje uppdrag skräddarsys: från enskilda sessioner till workshops där
          hela teamet tränar reflektion, feedback och ansvarstagande. Ni
          investerar i människors förmåga att leda sig själva – och i företagets
          långsiktiga hållbarhet och lönsamhet. Boka ett kostnadsfritt
          introduktionssamtal så utforskar vi hur min coaching kan lyfta just er
          organisation.
        </p>
      </div>
    </>
  );
}
