// src/pages/kontakt.js

export default function Kontakt() {
  return (
    <>
      <h1 className="text-4xl font-serif text-gray-800 mb-6 text-center">
        KONTAKT
      </h1>

      <form className="space-y-4 max-w-lg mx-auto">
        {/* Namn */}
        <div>
          <label htmlFor="name" className="block text-gray-800 mb-1">
            Namn
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ditt namn"
            className="w-full border border-gray-400 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
          />
        </div>

        {/* E-post */}
        <div>
          <label htmlFor="email" className="block text-gray-800 mb-1">
            E-post
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="din@epost.se"
            className="w-full border border-gray-400 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
          />
        </div>

        {/* Meddelande */}
        <div>
          <label htmlFor="message" className="block text-gray-800 mb-1">
            Meddelande
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Skriv ditt meddelande här"
            className="w-full border border-gray-400 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
          />
        </div>

        {/* Skicka-knapp */}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition"
        >
          Skicka meddelande
        </button>
      </form>

      <div className="mt-8 text-center">
        <a
          href="mailto:info@fredrikekholm@se"
          className="inline-block bg-teal-600 text-white px-6 py-3 rounded hover:bg-teal-700 transition"
        >
          Maila oss
        </a>
      </div>
    </>
  )
}
