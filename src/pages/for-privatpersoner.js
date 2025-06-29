// src/pages/for-privatpersoner.js

import Layout from "../components/Layout";

export default function ForPrivatpersoner() {
  return (
    <Layout>
      <section className="flex flex-col lg:flex-row items-center w-full lg:w-1/3 mx-auto">
        {/* Bildsektion */}
        <div className="w-full">
          <img
            src="/images/hero.png"
            alt="För privatpersoner"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Textsektion med absolut placerad bild */}
        <div className="w-full px-6 py-12 text-center lg:text-left relative">
          <h1 className="text-4xl font-serif text-gray-800 mb-6">
            FÖR PRIVATPERSONER
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Internal Family Systems (IFS) ser din inre värld som ett team av delar med unika röster, behov och känslor. Genom att lära känna och möta dessa delar med vänlighet bryter vi gamla mönster och frigör energi som ofta fastnar i stress och självkritik.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            I personliga coachingsessioner skräddarsyr jag övningar och samtal efter din situation, utan att strikt följa modellen. Tillsammans utforskar vi skyddande delar, healar sårbara delar och integrerar nya resurser för djup inre harmoni.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            För dig innebär det ökad självmedvetenhet, bättre stresshantering och en trygg relation till dig själv. Med en stabil inre grund växer ditt välmående, livsglädje och förmåga att möta vardagens utmaningar.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Välkommen att upptäcka hur IFS kan bli nyckeln till ett mer balanserat, meningsfullt och rikt liv.
          </p>

          {/* Infogad bild längst ner till höger, dubbelt så stor */}
          <img
            src="/images/privat_NY.png"
            alt="Privat Coaching"
            className="absolute bottom-0 right-0 w-64 lg:w-96"
          />
        </div>
      </section>
    </Layout>
  );
}
