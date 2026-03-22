import { motion } from 'framer-motion';
import { showcaseAssets, showcaseReveal } from './showcaseContent';

export default function ShowcaseHero() {
  return (
    <section id='home' className='showcase-product-shell showcase-anchor-section'>
      <motion.div className='showcase-gallery-column showcase-floating-stage' variants={showcaseReveal} initial='hidden' animate='visible'>
        <div className='showcase-main-visual showcase-service-visual'>
          <img src={showcaseAssets.firstImage} alt='Product photography service visual' className='showcase-main-product-image' />
        </div>
      </motion.div>
    </section>
  );
}
