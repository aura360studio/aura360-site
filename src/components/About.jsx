import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clientLogo1 from '../assets/Clients logo/1 kido.webp';
import clientLogo2 from '../assets/Clients logo/2 sky land brand.webp';
import clientLogo3 from '../assets/Clients logo/3 bizen.webp';
import clientLogo4 from '../assets/Clients logo/4 dd.webp';
import clientLogo5 from '../assets/Clients logo/5 Kreedo-logo.webp';
import clientLogo6 from '../assets/Clients logo/6 Kiya-logo.webp';
import clientLogo7 from '../assets/Clients logo/ZORKO-LOGO.webp';

const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: 0.08 * index },
  }),
};

export default function About() {
  const credibilityItems = [
    {
      title: 'End-to-End Creative Production',
      description: 'From concept to execution, everything under one vision.',
    },
    {
      title: 'Multi-Disciplinary Expertise',
      description: 'Branding, Photography, Motion, Digital.',
    },
    {
      title: 'Detail-Driven Execution',
      description: 'Precision in craft. Excellence in delivery.',
    },
    {
      title: 'Built for Impact',
      description: 'Every project designed to influence perception and performance.',
    },
  ];
  const clients = [
    { name: 'Kido', logo: clientLogo1 },
    { name: 'Sky Land Brand', logo: clientLogo2 },
    { name: 'Bizen', logo: clientLogo3 },
    { name: 'DD', logo: clientLogo4 },
    { name: 'Kreedo', logo: clientLogo5 },
    { name: 'Kiya', logo: clientLogo6 },
    { name: 'Zorko', logo: clientLogo7 },
  ];
  const [clientIndex, setClientIndex] = useState(0);
  const [disableClientTransition, setDisableClientTransition] = useState(false);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setClientIndex((current) => current + 1);
    }, 5800);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleClientsTransitionEnd = () => {
    if (clientIndex < clients.length) return;

    setDisableClientTransition(true);
    setClientIndex(0);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setDisableClientTransition(false);
      });
    });
  };

  return (
    <motion.section
      id='about'
      className='section'
      variants={sectionReveal}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.22 }}
    >
      <div className='container glass section-panel about-panel'>
        <div className='about-grid'>
          <motion.div className='about-narrative' variants={itemReveal} custom={0}>
            <h2 className='about-heading'>We Build Visual Stories.</h2>
            <p className='about-copy'>
              Aura 360 Studio is where ideas evolve into immersive brand experiences.
            </p>
            <p className='about-copy'>
              We blend strategy, design, photography, motion, and technology to craft narratives that move people and
              shape perception.
            </p>
            <p className='about-copy about-emphasis'>
              Every visual decision is intentional.
              <br />
              Every detail serves a purpose.
              <br />
              Every project is built to perform.
            </p>

            <div className='about-clients' aria-label='Selected clients'>
              <p className='about-clients-label'>Selected Clients</p>
              <div className='about-clients-marquee'>
                <div
                  className='about-clients-track'
                  onTransitionEnd={handleClientsTransitionEnd}
                  style={{
                    transform: `translateX(calc(-${clientIndex} * (var(--about-client-card-width) + var(--about-client-gap))))`,
                    transition: disableClientTransition ? 'none' : undefined,
                  }}
                >
                  {[...clients, ...clients].map((client, index) => (
                    <article className='about-client-card' key={`${client.name}-${index}`}>
                      <img src={client.logo} alt={client.name} className='about-client-logo' />
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.aside className='about-authority' aria-label='Credibility highlights' variants={itemReveal} custom={1}>
            {credibilityItems.map((item) => (
              <article key={item.title} className='authority-item'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </motion.aside>
        </div>
      </div>
    </motion.section>
  );
}
