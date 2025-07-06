// src/components/Footer.js

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-black py-2 text-center z-50">
      <p className="text-sm">
        © {new Date().getFullYear()} FREDRIK EKHOLM COACHING.
      </p>
    </footer>
  )
}
