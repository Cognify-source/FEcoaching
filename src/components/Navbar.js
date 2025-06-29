export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <a href="/" className="text-xl font-bold">YOURLOGO</a>
      <ul className="hidden md:flex space-x-6 text-gray-700">
        {['About','Get Started','Podcast','Blog','Shop'].map(label => (
          <li key={label}>
            <a
              href={`/${label.toLowerCase().replace(' ', '-')}`}
              className="hover:text-gray-900"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-4">
        <button aria-label="Search">🔍</button>
        <button aria-label="Cart">🛒</button>
        <button className="md:hidden" aria-label="Menu">☰</button>
      </div>
    </nav>
  );
}
