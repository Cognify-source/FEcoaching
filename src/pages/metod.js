import Layout from "../components/Layout";

export default function Metod() {
  return (
    <Layout>
      <section className="flex flex-col lg:flex-row items-center bg-gray-100">
        <div className="w-full lg:w-1/3">
          <img
            src="/images/hero.png"
            alt="Metod"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full lg:w-2/3 px-6 py-12 text-center lg:text-left">
          <h1 className="text-4xl font-serif text-gray-800 mb-4">
            METOD
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Presentera din coaching­metod – steg för steg hur du hjälper dina
            klienter framåt.
          </p>
        </div>
      </section>
    </Layout>
  );
}
