/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bygg som helt statiska HTML/JS/CSS-filer i mappen “out/”
  output: 'export',

  // Slå på Reacts strikta läge i utvecklingsmiljö (valfritt men bra)
  reactStrictMode: true,

  // Gör så att <Image> inte kräver run-time-optimering
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
