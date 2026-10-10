import { useLayoutEffect } from 'react';

// Which animation each element gets, first match wins. `nested` variants still
// run inside an element that is already animating; the rest just ride along with it.
const RULES = [
  ['.reveal-left', 'left'],
  ['.reveal-right', 'right'],
  ['.section-label', 'left'],
  ['.section-title, .contact-heading', 'blur'],
  ['.section-line', 'line', { nested: true }],
  ['.project-card, .achievement-card, .stat', 'zoom', { nested: true }],
  ['.skill-category', 'flip'],
  ['.skill-tag', 'pop', { nested: true, step: 0.035 }],
  ['.timeline-item, .edu-item', 'left'],
  ['.reveal', 'up'],
  // Already marked by an earlier run (React dev runs effects twice, and hot
  // reloads rerun them) but no longer matching above: keep its variant.
  ['[data-anim]', null],
];

const DRAW = '.timeline, .edu-timeline';

export default function useScrollAnimations() {
  useLayoutEffect(() => {
    const tagged = new Set();

    for (const [selector, variant, opts = {}] of RULES) {
      const groups = new Map();
      document.querySelectorAll(selector).forEach(el => {
        if (tagged.has(el)) return;
        if (!opts.nested && el.parentElement?.closest('[data-anim]')) {
          el.classList.remove('reveal', 'reveal-left', 'reveal-right');
          return;
        }
        el.classList.remove('reveal', 'reveal-left', 'reveal-right');
        if (variant) el.dataset.anim = variant;
        tagged.add(el);
        if (opts.step) {
          const n = groups.get(el.parentElement) ?? 0;
          groups.set(el.parentElement, n + 1);
          el.style.setProperty('--d', `${0.15 + n * opts.step}s`);
        }
      });
    }

    const finish = el => {
      el.removeAttribute('data-anim');
      el.classList.remove('in');
      el.style.removeProperty('--d');
      el.style.removeProperty('--stagger');
    };

    // Elements that enter together are staggered so a row of cards cascades.
    const reveal = els => {
      els
        .map(el => ({ el, r: el.getBoundingClientRect() }))
        .sort((a, b) => a.r.top - b.r.top || a.r.left - b.r.left)
        .forEach(({ el }, i) => {
          if (!pending.delete(el)) return;
          obs.unobserve(el);
          if (el.matches(DRAW)) { el.classList.add('drawn'); return; }
          el.style.setProperty('--stagger', `${Math.min(i * 0.08, 0.48)}s`);
          el.classList.add('in');
          const done = ev => {
            if (ev && (ev.target !== el || ev.propertyName !== 'opacity')) return;
            el.removeEventListener('transitionend', done);
            clearTimeout(timer);
            finish(el);
          };
          const timer = setTimeout(done, 2500);
          el.addEventListener('transitionend', done);
        });
    };

    const obs = new IntersectionObserver(
      entries => reveal(entries.filter(e => e.isIntersecting).map(e => e.target)),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    const pending = new Set([...tagged, ...document.querySelectorAll(DRAW)]);
    pending.forEach(el => obs.observe(el));

    // Backup for the observer: anything already scrolled into or past view is
    // shown, so a jump to the bottom (e.g. the Contact link) never leaves gaps.
    let frame = 0;
    const sweep = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        reveal([...pending].filter(el => el.getBoundingClientRect().top < window.innerHeight));
        if (!pending.size) window.removeEventListener('scroll', sweep);
      });
    };
    window.addEventListener('scroll', sweep, { passive: true });

    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', sweep);
      cancelAnimationFrame(frame);
    };
  }, []);
}
