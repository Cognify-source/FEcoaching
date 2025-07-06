// src/pages/kontakt.js

import { useState } from 'react'

export const metadata = {
  title: "Kontakt – Fredrik Ekholm"
}

export default function Kontakt() {
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)

    const form = new FormData(e.target)
    const name = encodeURIComponent(form.get('name'))
    const email = encodeURIComponent(form.get('email'))
    const message = encodeURIComponent(form.get('message'))

    // Skapa en mailto-länk så att användarens e-postklient öppnas
    const mailto = `mailto:info@fredrikekholm.se` +
      `?subject=Kontakt från ${name}` +
      `&body=NamÅn: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMeddelande:%0D%0A${message}`

    // Öppna länken
    window.location.href = mailto

    // Avsluta submittet
    setSubmitting(false)
  }

  return (
    <>
      <h1 className="text-4xl font-serif font-extrabold text-slate-800 mb-6 text-center">
        KONTAKT
      </h1>

      <form
        onSubmit={handleSubmit}
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
            name="name"
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
            name="email"
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
            name="message"
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
          disabled={submitting}
          className="w-full bg-slate-800 text-white px-6 py-3 rounded 
                     hover:bg-slate-900 transition disabled:opacity-50"
        >
          {submitting ? 'Öppnar mailklient…' : 'Skicka meddelande'}
        </button>
      </form>
    </>
  )
}
