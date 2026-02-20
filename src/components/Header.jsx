import { useEffect, useState } from 'react';
import logoWhite from '../assets/logo-white.png';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'additional', label: 'Scope' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const hashId = window.location.hash.replace('#', '');
      if (hashId) setActiveId(hashId);
    };

    onHashChange();
    window.addEventListener('hashchange', onHashChange);

    const sectionEls = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { threshold: [0.3, 0.55, 0.75] }
    );

    sectionEls.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('hashchange', onHashChange);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='header-layer'>
      <a href='#home' aria-label='Aura 360 Studio Home' className='logo-dock glass'>
        <img src={logoWhite} alt='Aura 360 Studio' className='logo-dock-image' />
      </a>

      <nav className='nav-pill glass' aria-label='Primary navigation'>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link ${activeId === item.id ? 'active' : ''}`}
            onClick={() => {
              setActiveId(item.id);
              handleNavClick();
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        type='button'
        className='menu-toggle glass'
        aria-label='Toggle navigation menu'
        aria-expanded={isMenuOpen}
        aria-controls='mobile-nav-dropdown'
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className={`menu-bar ${isMenuOpen ? 'open' : ''}`} />
        <span className={`menu-bar ${isMenuOpen ? 'open' : ''}`} />
        <span className={`menu-bar ${isMenuOpen ? 'open' : ''}`} />
      </button>

      <nav
        id='mobile-nav-dropdown'
        className={`mobile-menu glass ${isMenuOpen ? 'open' : ''}`}
        aria-label='Mobile navigation'
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`mobile-nav-link ${activeId === item.id ? 'active' : ''}`}
            onClick={() => {
              setActiveId(item.id);
              handleNavClick();
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
