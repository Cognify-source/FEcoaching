// src/pages/kontakt.js

export const metadata = {
  title: "Kontakt – Fredrik Ekholm"
}

export default function Kontakt() {
  return (
    <>
      <h1 className="text-4xl font-serif font-extrabold text-slate-800 mb-6 text-center">
        KONTAKT
      </h1>

      {/* 
        Lägg in action="mailto:…" så att submit öppnar användarens mailklient.
        method="POST" + encType text/plain ger grundläggande mejl-kropp.
      */}
      <form
        action="mailto:info@fredrikekholm.se"
        method="POST"
        encType="text/plain"
        className="space-y-6 max-w-lg mx-auto"
      >
        {/* Namn */}
        <div>
          <label htmlFor="name" className="block text-slate-700 mb-2">
            Namn
          </label>
          <input
            type="text"
            id="name"
            name="Namn"
            required
            placeholder="Ditt namn"
            className="w-full border border-slate-400 rounded px-4 py-2 bg-[#d6d0c0] text-slate-900
                       focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
          />
        </div>

        {/* E-post */}
        <div>
          <label htmlFor="email" className="block text-slate-700 mb-2">
            E-post
          </label>
          <input
            type="email"
            id="email"
            name="E-post"
            required
            placeholder="din@epost.se"
            className="w-full border border-slate-400 rounded px-4 py-2 bg-[#d6d0c0] text-slate-900
                       focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
          />
        </div>

        {/* Meddelande */}
        <div>
          <label htmlFor="message" className="block text-slate-700 mb-2">
            Meddelande
          </label>
          <textarea
            id="message"
            name="Meddelande"
            required
            rows="5"
            placeholder="Skriv ditt meddelande här"
            className="w-full border border-slate-400 rounded px-4 py-2 bg-[#d6d0c0] text-slate-900
                       focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
          />
        </div>

        {/* Skicka‐knapp */}
        <button
          type="submit"
          className="w-full bg-slate-800 text-white px-6 py-3 rounded 
                     hover:bg-slate-900 transition"
        >
          Skicka meddelande
        </button>
      </form>
    </>
  )
}
