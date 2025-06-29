// src/pages/for-privatpersoner.js

export default function ForPrivatpersoner() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
          {/* 1) Hero-bilden i första kolumnen */}
          <div className="h-full">
            <img
              src="/images/hero.png"
              alt="För privatpersoner"
              className="object-cover w-full h-full"
            />
          </div>

          {/* 2) Din text i mittersta kolumnen */}
          <div className="relative px-6 py-8">
            <h1 className="text-4xl font-serif text-gray-800 mb-4">
              FÖR PRIVATPERSONER
            </h1>
            <div className="text-lg text-gray-600">
              <img
                src="/images/privat_NY.png"
                alt="Privat Coaching"
                className="float-right ml-4 mb-4 w-64 lg:w-96 max-w-full"
              />
              <p className="mb-4">
                Internal Family Systems (IFS) ser din inre värld som ett team av
                delar med unika röster, behov och känslor. Genom att lära känna och
                möta dessa delar med vänlighet bryter vi gamla mönster och frigör
                energi som ofta fastnar i stress och självkritik.
              </p>
              <p className="mb-4">
                I personliga coachingsessioner skräddarsyr jag övningar och samtal
                efter din situation, utan att strikt följa modellen. Tillsammans
                utforskar vi skyddande delar, healar sårbara delar och integrerar
                nya resurser för djup inre harmoni.
              </p>
              <p className="mb-4">
                För dig innebär det ökad självmedvetenhet, bättre stresshantering
                och en trygg relation till dig själv. Med en stabil inre grund
                växer ditt välmående, livsglädje och förmåga att möta vardagens
                utmaningar.
              </p>
              <p className="mb-4">
                Välkommen att upptäcka hur IFS kan bli nyckeln till ett mer balanserat,
                meningsfullt och rikt liv.
              </p>
              <div className="clear-right" />
            </div>
          </div>

          {/* 3) Tom kolumn för att hålla layouten */}
          <div className="hidden lg:block" />
        </div>
      </section>
    </>
  )
}
