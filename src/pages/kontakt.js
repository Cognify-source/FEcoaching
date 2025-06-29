// src/pages/kontakt.js

export default function Kontakt() {
  return (
    <>
      <h1 className="text-4xl font-serif text-gray-800 mb-6 text-center">
        KONTAKT
      </h1>

      <form className="space-y-4 max-w-lg mx-auto">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-1">
            Namn
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="Ditt namn"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1">
            E-post
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="din@epost.se"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 mb-1">
            Meddelande
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring"
            placeholder="Skriv ditt meddelande här"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-900 transition"
        >
          Skicka meddelande
        </button>
      </form>

      <div className="mt-8 text-center">
        <a
          href="mailto:info@fredrikekholm@se"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Maila oss
        </a>
      </div>
    </>
  )
}
