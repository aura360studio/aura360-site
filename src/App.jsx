import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Header,
  Hero,
  About,
  Services,
  Additional,
  Contact,
  LabsPage,
  ShowcasePage,
} from './components';
import { initSmoothScroll } from './utils/smoothScroll';

function OnePageLayout() {
  const year = new Date().getFullYear();
  const footerAddress =
    'XHV5+R8G, 5th Main Rd, Prakash Nagar, Rajajinagar, Bengaluru, Karnataka 560021';
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(footerAddress)}`;

  useEffect(() => {
    // Next step: replace native smooth scroll with Lenis for cinematic easing.
    initSmoothScroll();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Additional />
        <Contact />
      </main>
      <footer className='site-footer'>
        <p>(c) {year} Aura 360 Studio. All rights reserved.</p>
        <a href={mapsUrl} target='_blank' rel='noreferrer' className='footer-address-link'>
          {footerAddress}
        </a>
      </footer>
    </>
  );
}

function LabsLayout() {
  return (
    <>
      <Header />
      <LabsPage />
    </>
  );
}

function ShowcaseLayout() {
  return (
    <>
      <Header />
      <ShowcasePage />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<OnePageLayout />} />
      <Route path='/labs' element={<LabsLayout />} />
      <Route path='/showcase' element={<ShowcaseLayout />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}
