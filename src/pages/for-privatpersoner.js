// src/pages/for-privatpersoner.js

import Layout from "../components/Layout";

export default function ForPrivatpersoner() {
  return (
    <Layout>
      <section className="flex items-start bg-gray-100">
        {/* 1) Hero‐bild – alltid 1/3 bredd, oförändrad */}
        <div className="hidden lg:block lg:w-1/3 h-auto">
          <img
            src="/images/hero.png"
            alt="För privatpersoner"
            className="object-cover w-full h-full"
          />
        </div>

        {/* 2) Innehåll – mittpunkten, 1/3 av bredden */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between px-6 py-8">
          {/* Texten */}
          <div>
            <h1 className="text-4xl font-serif text-gray-800 mb-2">
              FÖR PRIVATPERSONER
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Internal Family Systems (IFS) ser din inre värld som ett team av delar med unika röster, behov och känslor. Genom att lära känna och möta dessa delar med vänlighet bryter vi gamla mönster och frigör energi som ofta fastnar i stress och självkritik.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              I personliga coachingsessioner skräddarsyr jag övningar och samtal efter din situation, utan att strikt följa modellen. Tillsammans utforskar vi skyddande delar, healar sårbara delar och integrerar nya resurser för djup inre harmoni.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              För dig innebär det ökad självmedvetenhet, bättre stresshantering och en trygg relation till dig själv. Med en stabil inre grund växer ditt välmående, livsglädje och förmåga att möta vardagens utmaningar.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Välkommen att upptäcka hur IFS kan bli nyckeln till ett mer balanserat, meningsfullt och rikt liv.
            </p>
          </div>
          {/* Bilden längst ner till höger */}
          <div className="flex justify-end">
            <img
              src="/images/privat_NY.png"
              alt="Privat Coaching"
              className="w-64 lg:w-96 max-w-full"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
