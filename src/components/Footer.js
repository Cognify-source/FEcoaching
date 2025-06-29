// src/components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} FREDRIK EKHOLM COACHING. Alla rättigheter förbehållna.
      </p>
    </footer>
  )
}
