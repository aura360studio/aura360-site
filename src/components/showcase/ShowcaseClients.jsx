import { motion } from 'framer-motion';
import { showcaseAssets, showcaseClients } from './showcaseContent';

export default function ShowcaseClients() {
  return (
    <section id='about' className='showcase-clients-strip showcase-anchor-section' aria-labelledby='clients-title'>
      <div className='showcase-full-bleed-panel showcase-about-panel'>
        <img src={showcaseAssets.auraStudioBg} alt='Aura 360 Studio background' className='showcase-section-image' />
        <div className='showcase-section-overlay showcase-clients-content'>
          <motion.article
            className='showcase-about-hook-card'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.22 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className='showcase-mini-label'>Aura 360 Studio</p>
            <h2>Visual stories shaped with intention, atmosphere, and precision.</h2>
            <p>
              We build brand imagery that feels premium, memorable, and ready to perform across campaigns, commerce, and
              launch moments.
            </p>
          </motion.article>

          <div className='showcase-clients-header'>
            <p className='showcase-mini-label'>Selected Clients</p>
            <h2 id='clients-title'>Brands we have helped present with clarity.</h2>
          </div>

          <div className='showcase-clients-marquee'>
            <div className='showcase-clients-track'>
              {[...showcaseClients, ...showcaseClients].map((client, index) => (
                <article className='showcase-client-card' key={`${client.name}-${index}`}>
                  <img src={client.logo} alt={client.name} className='showcase-client-logo' />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
