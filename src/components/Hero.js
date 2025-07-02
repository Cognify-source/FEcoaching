// src/components/Hero.js

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center bg-gray-100">
      {/* 1/3 bredd: hero-bild */}
      <div className="w-full lg:w-1/3">
        <img
          src="/images/hero.png"
          alt="Hero"
          className="object-cover w-full h-full"
        />
      </div>
      {/* 2/3 bredd: statisk text */}
      <div className="w-full lg:w-2/3 px-6 py-12 text-center lg:text-left">
        <h1 className="text-4xl font-serif text-gray-800 mb-4">
          Utforska dina inre delar – hitta tillbaka till ditt autentiska jag.
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Känner du att olika sidor av dig drar åt olika håll? I min coaching får du möta och integrera dina inre delar så att de kan sam­arbeta i stället för att konkurrera. Metoden bygger på Internal Family Systems (IFS) men är öppen för andra evidens­baserade verktyg som stödjer just din resa.
        </p>
        <button className="px-6 py-3 border border-gray-400 text-gray-700 font-medium hover:bg-gray-200 transition">
          TAKE THE QUIZ
        </button>
      </div>
    </section>
  )
}
