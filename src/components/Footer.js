// src/components/Footer.js
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    const slideContainer = document.querySelector('.testimonial-slide');
    fetch('/data/testimonials.html')
      .then(resp => {
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        return resp.text();
      })
      .then(html => {
        slideContainer.innerHTML = html;
        initTestimonialsSlider();
      })
      .catch(err => console.error('Error loading testimonials:', err));

    function initTestimonialsSlider() {
      const slides   = Array.from(document.querySelectorAll('.testimonial'));
      const leftBtn  = document.querySelector('.left-arrow');
      const rightBtn = document.querySelector('.right-arrow');
      let current = 0;
      let interval;

      slides.forEach((slide, i) => {
        Object.assign(slide.style, {
          position:   'absolute',
          top:        '0',
          left:       '0',
          width:      '100%',
          transition: 'transform 0.5s ease, opacity 0.5s ease',
          transform:  i === 0 ? 'translateX(0)' : 'translateX(100%)',
          opacity:    i === 0 ? '1' : '0'
        });
      });

      function showForward(nextIndex) {
        if (nextIndex === current) return;
        const outgoing = slides[current];
        const incoming = slides[nextIndex];
        incoming.style.transition = 'none';
        incoming.style.transform  = 'translateX(100%)';
        incoming.style.opacity    = '1';
        incoming.offsetHeight;
        incoming.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        incoming.style.transform  = 'translateX(0)';
        outgoing.style.transform  = 'translateX(-100%)';
        outgoing.style.opacity    = '0';
        setTimeout(() => {
          outgoing.style.transition = 'none';
          outgoing.style.transform  = 'translateX(100%)';
          outgoing.style.opacity    = '0';
          outgoing.offsetHeight;
          outgoing.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        }, 500);
        current = nextIndex;
      }

      function showBackward(prevIndex) {
        if (prevIndex === current) return;
        const outgoing = slides[current];
        const incoming = slides[prevIndex];
        incoming.style.transition = 'none';
        incoming.style.transform  = 'translateX(-100%)';
        incoming.style.opacity    = '1';
        incoming.offsetHeight;
        incoming.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        incoming.style.transform  = 'translateX(0)';
        outgoing.style.transform  = 'translateX(100%)';
        outgoing.style.opacity    = '0';
        setTimeout(() => {
          outgoing.style.transition = 'none';
          outgoing.style.transform  = 'translateX(-100%)';
          outgoing.style.opacity    = '0';
          outgoing.offsetHeight;
          outgoing.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        }, 500);
        current = prevIndex;
      }

      function next() {
        showForward((current + 1) % slides.length);
      }

      function prev() {
        showBackward((current - 1 + slides.length) % slides.length);
      }

      leftBtn.addEventListener('click', () => {
        clearInterval(interval);
        prev();
        interval = setInterval(next, 10000);
      });
      rightBtn.addEventListener('click', () => {
        clearInterval(interval);
        next();
        interval = setInterval(next, 10000);
      });

      interval = setInterval(next, 10000);
    }

    // Cleanup on unmount
    return () => {
      clearInterval && clearInterval();
    };
  }, []);

  return (
    <footer className="bg-gray-800 text-gray-200 py-6 text-center">
      <div className="relative max-w-xl mx-auto mb-4">
        <button className="left-arrow absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl text-white">
          ‹
        </button>
        <div className="testimonial-slide relative h-32 overflow-hidden">
          {/* testimonials.html laddas in här */}
        </div>
        <button className="right-arrow absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl text-white">
          ›
        </button>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} FREDRIK EKHOLM COACHING. Alla rättigheter förbehållna.
      </p>
    </footer>
  );
}
