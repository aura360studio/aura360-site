import { motion } from 'framer-motion';
import ShowcaseResponsiveVideo from './ShowcaseResponsiveVideo';
import { showcaseAssets } from './showcaseContent';

export default function ShowcaseVideoSection() {
  return (
    <section id='additional' className='showcase-video-section showcase-anchor-section'>
      <div className='showcase-video-frame showcase-full-bleed-panel'>
        <ShowcaseResponsiveVideo
          className='showcase-video-media'
          desktopSrc={showcaseAssets.scopeVideo}
          mobileSrc={showcaseAssets.scopeVideoMobile}
          ariaLabel='Showcase supporting scope video'
        />
        <motion.div
          className='showcase-section-overlay showcase-video-copy showcase-video-overlay'
          initial={{ opacity: 0, x: -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className='showcase-mini-label'>From Spark to Spotlight</p>
          <h2>We understand that every brand's needs are different.</h2>
          <p>
            Whether you need a single deliverable or end-to-end support, we adapt to your vision and scale with your
            ambition. Let's explore what's possible together.
          </p>
          <a href='#contact' className='showcase-video-badge' role='button'>
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
