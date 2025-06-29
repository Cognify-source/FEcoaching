// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-gray-200 py-4 text-center z-50">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} FREDRIK EKHOLM COACHING. Alla rättigheter förbehållna.
      </p>
    </footer>
  );
}
