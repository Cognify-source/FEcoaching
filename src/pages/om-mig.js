import Layout from "../components/Layout";

export default function OmMig() {
  return (
    <Layout>
      <section className="flex flex-col lg:flex-row items-center bg-gray-100">
        {/* Bildsektion (samma bild som på startsidan) */}
        <div className="w-full lg:w-1/3">
          <img
            src="/images/hero.png"
            alt="Om mig"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Textsektion */}
        <div className="w-full lg:w-2/3 px-6 py-12 text-center lg:text-left">
          <h1 className="text-4xl font-serif text-gray-800 mb-4">
            OM MIG
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Här skriver du din presentation – vem du är, din bakgrund och vad du
            brinner för som coach. 
          </p>
        </div>
      </section>
    </Layout>
  );
}
