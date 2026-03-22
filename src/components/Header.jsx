import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoWhite from '../assets/logo-white.png';
import faviconLens from '../assets/favicon_io/favicon-32x32.png';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'additional', label: 'Scope' },
  { id: 'contact', label: 'Contact' },
];

const labsIconLine =
  'https://cdn.jsdelivr.net/npm/remixicon@4.9.1/icons/Health%20%26%20Medical/flask-line.svg';
const labsIconFill =
  'https://cdn.jsdelivr.net/npm/remixicon@4.9.1/icons/Health%20%26%20Medical/flask-fill.svg';
const labsUrl = 'https://labs.aura360studio.com/';
const showcaseMenuItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'additional', label: 'Scope', href: '#additional' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLabsPage = location.pathname === '/labs';
  const isShowcasePage = location.pathname === '/showcase';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const [isShowcaseHeaderHidden, setIsShowcaseHeaderHidden] = useState(false);

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

  useEffect(() => {
    if (!isShowcasePage) {
      setIsShowcaseHeaderHidden(false);
      return undefined;
    }

    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (Math.abs(delta) < 8) return;

      if (currentScrollY <= 24 || isMenuOpen || delta < 0) {
        setIsShowcaseHeaderHidden(false);
      } else if (delta > 0) {
        setIsShowcaseHeaderHidden(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMenuOpen, isShowcasePage]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    }

    return false;
  };

  const handleClassicHomeClick = (event) => {
    event.preventDefault();
    handleNavClick();
    setActiveId('home');

    if (location.pathname === '/' && scrollToSection('home')) {
      window.history.replaceState(null, '', '/#home');
      return;
    }

    navigate('/#home');
    window.setTimeout(() => {
      scrollToSection('home');
    }, 60);
  };

  const handleShowcaseHomeClick = (event) => {
    event.preventDefault();
    handleNavClick();
    setActiveId('home');

    if (location.pathname === '/showcase' && scrollToSection('home')) {
      window.history.replaceState(null, '', '/showcase#home');
      return;
    }

    navigate('/showcase#home');
    window.setTimeout(() => {
      scrollToSection('home');
    }, 60);
  };

  return (
    <header className={`header-layer ${isShowcasePage && isShowcaseHeaderHidden ? 'showcase-header-hidden' : ''}`}>
      {isShowcasePage ? (
        <>
          <div
            id='showcase-menu-panel'
            className={`showcase-menu-panel ${isMenuOpen ? 'open' : ''} ${isShowcaseHeaderHidden && !isMenuOpen ? 'hidden' : ''}`}
            aria-hidden='false'
          >
            <div className='showcase-menu-card'>
              <div className='showcase-menu-top'>
                <button
                  type='button'
                  className={`showcase-menu-toggle ${isMenuOpen ? 'open' : ''}`}
                  aria-label={isMenuOpen ? 'Close showcase menu' : 'Open showcase menu'}
                  aria-expanded={isMenuOpen}
                  aria-controls='showcase-menu-panel'
                  onClick={() => setIsMenuOpen((open) => !open)}
                >
                  {isMenuOpen ? (
                    <span className='showcase-close-mark' aria-hidden='true'>
                      <span />
                      <span />
                    </span>
                  ) : (
                    <span className='showcase-menu-glyph' aria-hidden='true'>
                      <span />
                      <span />
                      <span />
                    </span>
                  )}
                </button>

                <Link
                  to='/showcase#home'
                  className='showcase-wordmark showcase-wordmark-static'
                  onClick={handleShowcaseHomeClick}
                >
                  <span>Aura 360 Studio</span>
                </Link>

                <Link
                  to='/showcase#home'
                  className='showcase-brand-mark'
                  aria-label='Go to Aura 360 Studio showcase home'
                  onClick={handleShowcaseHomeClick}
                >
                  <img src={faviconLens} alt='' className='showcase-brand-mark-image' />
                </Link>
              </div>

              <nav className='showcase-menu-nav' aria-label='Showcase navigation'>
                {showcaseMenuItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className='showcase-menu-link'
                    onClick={() => {
                      setActiveId(item.id);
                      handleNavClick();
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className='showcase-menu-actions' aria-label='Showcase quick actions'>
                <Link to='/' className='showcase-menu-action' onClick={handleNavClick}>
                  Classic Mode
                </Link>
                <a href={labsUrl} className='showcase-menu-action' onClick={handleNavClick} target='_blank' rel='noreferrer'>
                  Aura Lab
                </a>
              </div>
            </div>
          </div>

          <Link
            to='/'
            title='Classic Mode'
            aria-label='Classic Mode'
            className='mode-switch is-showcase-page showcase-side-control'
          >
            <span className='mode-switch-icon' aria-hidden='true'>
              <svg className='mode-icon mode-icon-outline' viewBox='0 0 24 24' role='presentation' focusable='false'>
                <rect x='3.5' y='4.5' width='7' height='7' rx='1.5' />
                <rect x='13.5' y='4.5' width='7' height='7' rx='1.5' />
                <rect x='3.5' y='14.5' width='7' height='7' rx='1.5' />
                <rect x='13.5' y='14.5' width='7' height='7' rx='1.5' />
              </svg>
              <svg className='mode-icon mode-icon-fill' viewBox='0 0 24 24' role='presentation' focusable='false'>
                <rect x='3' y='4' width='8' height='8' rx='2' />
                <rect x='13' y='4' width='8' height='8' rx='2' />
                <rect x='3' y='14' width='8' height='8' rx='2' />
                <rect x='13' y='14' width='8' height='8' rx='2' />
              </svg>
            </span>
          </Link>

          <a
            href={labsUrl}
            title='Aura Labs'
            aria-label='Aura Labs'
            className='labs-launch showcase-side-control'
            target='_blank'
            rel='noreferrer'
          >
            <span
              className='labs-launch-icon'
              aria-hidden='true'
              style={{
                '--labs-icon-line': `url("${labsIconLine}")`,
                '--labs-icon-fill': `url("${labsIconFill}")`,
              }}
            />
          </a>
        </>
      ) : (
        <>
      <Link to='/#home' aria-label='Aura 360 Studio Home' className='logo-dock glass' onClick={handleClassicHomeClick}>
        <img src={logoWhite} alt='Aura 360 Studio' className='logo-dock-image' />
      </Link>

      {!isLabsPage && !isShowcasePage ? (
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
      ) : isLabsPage ? (
        <nav className='nav-pill glass nav-pill-secondary' aria-label='Page navigation'>
          <Link to='/' className='nav-link'>
            Back to Home
          </Link>
          <span className='nav-link active'>Aura Labs</span>
        </nav>
      ) : (
        <nav className='nav-pill glass nav-pill-secondary' aria-label='Page navigation'>
          <Link to='/' className='nav-link'>
            Back to Home
          </Link>
          <span className='nav-link active'>Mode 02</span>
        </nav>
      )}

      <Link
        to={isShowcasePage ? '/' : '/showcase'}
        title={isShowcasePage ? 'Back to Main Site' : 'Switch Website Mode'}
        aria-label={isShowcasePage ? 'Back to Main Site' : 'Switch Website Mode'}
        className={`mode-switch ${isShowcasePage ? 'is-showcase-page' : ''}`}
      >
        <span className='mode-switch-icon' aria-hidden='true'>
          <svg className='mode-icon mode-icon-outline' viewBox='0 0 24 24' role='presentation' focusable='false'>
            <rect x='3.5' y='4.5' width='7' height='7' rx='1.5' />
            <rect x='13.5' y='4.5' width='7' height='7' rx='1.5' />
            <rect x='3.5' y='14.5' width='7' height='7' rx='1.5' />
            <rect x='13.5' y='14.5' width='7' height='7' rx='1.5' />
          </svg>
          <svg className='mode-icon mode-icon-fill' viewBox='0 0 24 24' role='presentation' focusable='false'>
            <rect x='3' y='4' width='8' height='8' rx='2' />
            <rect x='13' y='4' width='8' height='8' rx='2' />
            <rect x='3' y='14' width='8' height='8' rx='2' />
            <rect x='13' y='14' width='8' height='8' rx='2' />
          </svg>
        </span>
      </Link>

      <a
        href={labsUrl}
        title='Aura Labs'
        aria-label='Aura Labs'
        className={`labs-launch ${isLabsPage ? 'is-labs-page' : ''}`}
        target='_blank'
        rel='noreferrer'
      >
        <span
          className='labs-launch-icon'
          aria-hidden='true'
          style={{
            '--labs-icon-line': `url("${labsIconLine}")`,
            '--labs-icon-fill': `url("${labsIconFill}")`,
          }}
        />
      </a>

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
        {isLabsPage || isShowcasePage ? (
          <>
            <Link
              to={isShowcasePage ? '/' : '/showcase'}
              className={`mobile-nav-link ${isShowcasePage ? 'active' : ''}`}
              onClick={handleNavClick}
            >
              Website Mode
            </Link>
            <a href={labsUrl} className='mobile-nav-link' onClick={handleNavClick} target='_blank' rel='noreferrer'>
              Aura Labs
            </a>
          </>
        ) : null}
        {isLabsPage || isShowcasePage ? (
          <Link to='/' className='mobile-nav-link' onClick={handleNavClick}>
            Back to Home
          </Link>
        ) : (
          navItems.map((item) => (
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
          ))
        )}
      </nav>
        </>
      )}
    </header>
  );
}
