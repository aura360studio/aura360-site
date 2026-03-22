import { useEffect, useState } from 'react';

export default function useShowcaseFloatingCard() {
  const [isFloatingCardHidden, setIsFloatingCardHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const heroSection = document.getElementById('home');
      const heroRect = heroSection?.getBoundingClientRect();
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      const isInsideHero = Boolean(heroRect && heroRect.top < window.innerHeight && heroRect.bottom > 120);

      if (!isInsideHero) {
        setIsFloatingCardHidden(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (Math.abs(delta) < 8) return;

      if (currentScrollY <= 24 || delta < 0) {
        setIsFloatingCardHidden(false);
      } else if (delta > 0) {
        setIsFloatingCardHidden(true);
      }

      lastScrollY = currentScrollY;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return isFloatingCardHidden;
}
