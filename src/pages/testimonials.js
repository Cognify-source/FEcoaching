// src/pages/testimonials.js

export const metadata = {
  title: "Testimonials – Fredrik Ekholm"
};

export default function Testimonials() {
  return (
    <>
      <h1 className="text-4xl font-serif font-extrabold text-gray-800 mb-4 text-center">
        TESTIMONIALS
      </h1>
      <div className="space-y-6 text-lg text-gray-600 text-center">
        <div>
          <p>
            “Jag är djupt tacksam för det stöd jag fått. Fredrik är en mjuk, inkännande och sympatisk coach som verkligen känner in vad som behövs i stunden. Han är inte rädd för att låta tystnaden tala, att ge utrymme där det behövs, och guidar alltid sessionen i min takt.”
          </p>
          <span className="block font-medium mt-2"><em>Jessica</em></span>
        </div>
        <div>
          <p>
            “Fredriks sessioner är väldigt hjälpsamma då han konkret försöker hitta lösningar på mina problem. Fredrik är bemötande och duktig på att lyssna. Han förstår också verkligen min situation och vad jag går igenom.”
          </p>
          <span className="block font-medium mt-2"><em>T</em></span>
        </div>
        <div>
          <p>
            “Jag hade länge känt mig splittrad och osäker på hur jag skulle hantera stress. Genom Fredriks coaching lärde jag mig möta mina inre delar med trygghet inom mig. Rekommenderas starkt! Fredriks coaching var otroligt hjälpsam.”
          </p>
          <span className="block font-medium mt-2"><em>Klient C</em></span>
        </div>
        <div>
          <p>
            “På ett nyfiket och utforskande sätt fick min femåriga version komma till tals och ge en större förståelse för mig själv och mina mönster. Och en möjlighet att skriva om historien med mer kärlek. Fredrik förmedlade ett öppet och nyfiket sinne utan tidspress som var värdefullt för att öppna upp delar som ville bli mötta och läkta.”
          </p>
          <span className="block font-medium mt-2"><em>Luzita</em></span>
        </div>
      </div>
    </>
  )
}
