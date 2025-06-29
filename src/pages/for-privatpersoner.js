// src/pages/for-privatpersoner.js

import Layout from "../components/Layout";

export default function ForPrivatpersoner() {
  return (
    <Layout>
      {/* 1) Hero-sektionen – oförändrad */}
      <section className="flex flex-col lg:flex-row items-center bg-gray-100">
        <div className="w-full lg:w-1/3">
          <img
            src="/images/hero.png"
            alt="För privatpersoner"
            className="object-cover w-full h-full"
          />
        </div>
      </section>

      {/* 2) Innehållssektionen – 1/3 bredd, centrerad, mindre vertikal padding */}
      <section className="relative w-full lg:w-1/3 mx-auto px-6 py-6">
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

        {/* Bilden längst ner till höger, dubbelt så stor */}
        <img
          src="/images/privat_NY.png"
          alt="Privat Coaching"
          className="absolute bottom-0 right-0 w-64 lg:w-96"
        />
      </section>
    </Layout>
  );
}
