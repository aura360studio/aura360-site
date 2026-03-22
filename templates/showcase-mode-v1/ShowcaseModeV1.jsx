import { useState } from 'react';
import { motion } from 'framer-motion';
import './showcase-mode-v1.scss';
import heroImage from './assets/BulbT-White.png';
import imageA from './assets/be7a48e8ce369cd62101c838cc16071beefc7811-4096x2305.jpg';
import imageB from './assets/af194e074aa5d35657879ae1259807a0bce91a97-4096x2305.jpg';
import imageC from './assets/45ef3df666d22fdf6400cb9a8b6c927da4d7cae1-4096x2305.jpg';
import imageD from './assets/8e20678bead91663aee2ecf82f75a59df41fdd9a-4096x2305.jpg';
import imageE from './assets/e51eafa8c68c0f72fe5e29262ab3831ff5af9f07-4096x2305.jpg';
import imageF from './assets/f9295f017f6a6ba6c920627d2a8887729601b6f8-4096x2305.jpg';
import imageG from './assets/f7354cdcb3233ae6232e934eaba929b5b203305f-4096x2305.jpg';
import thumbA from './assets/becdbe2d3c08c1816a79b1c63a25e48b33e89000-864x865.jpg';
import thumbB from './assets/986c684a3dd95ec1df621dfa5945386b1c0f50ba-864x865.jpg';
import thumbC from './assets/14e016cb4afe82477aa6c66b7dbdc46538942b60-864x864.jpg';
import cameraMotion from './assets/camera.gif';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const productOptions = {
  colours: ['White', 'Graphite', 'Blue'],
  capacities: ['8+128 GB', '8+256 GB', '12+256 GB'],
};

const gallery = [
  { id: 'hero', image: heroImage, thumb: thumbA, label: 'Front View' },
  { id: 'rear', image: imageA, thumb: thumbB, label: 'Rear Form' },
  { id: 'profile', image: imageB, thumb: thumbC, label: 'Profile Detail' },
];

const highlights = [
  {
    eyebrow: 'Camera System',
    title: 'A bold visual section designed for product-first storytelling.',
    copy:
      'Large imagery, measured text blocks, and generous spacing let the product carry the page instead of forcing the copy to do all the work.',
    image: imageC,
  },
  {
    eyebrow: 'Display & Build',
    title: 'Tighter structure, cleaner rhythm, sharper hierarchy.',
    copy:
      'This route is intentionally built like a modern consumer product page: top decision panel, guided gallery, feature-led sections, and media moments in sequence.',
    image: imageD,
  },
];

const mediaBands = [
  { title: 'Full-width product storytelling block', image: imageE },
  { title: 'Secondary feature frame with room for motion or copy', image: imageF },
  { title: 'Third feature image ready for replacement content', image: imageG },
];

const keyStats = [
  { value: '50 MP', label: 'Main camera' },
  { value: '6.7"', label: 'AMOLED display' },
  { value: '5000 mAh', label: 'Battery size' },
  { value: '120 Hz', label: 'Refresh rate' },
];

export default function ShowcaseModeV1() {
  const [selectedColour, setSelectedColour] = useState(productOptions.colours[0]);
  const [selectedCapacity, setSelectedCapacity] = useState(productOptions.capacities[0]);
  const [selectedImage, setSelectedImage] = useState(gallery[0]);

  return (
    <main className='showcase-page'>
      <section className='showcase-product-shell'>
        <div className='showcase-product-grid'>
          <motion.div className='showcase-gallery-column' variants={reveal} initial='hidden' animate='visible'>
            <div className='showcase-breadcrumb'>Mode 02 / Product Detail / Aura Device Placeholder</div>
            <div className='showcase-main-visual'>
              <img src={selectedImage.image} alt={selectedImage.label} className='showcase-main-product-image' />
            </div>

            <div className='showcase-thumb-row'>
              {gallery.map((item) => (
                <button
                  key={item.id}
                  type='button'
                  className={`showcase-thumb ${selectedImage.id === item.id ? 'active' : ''}`}
                  onClick={() => setSelectedImage(item)}
                >
                  <img src={item.thumb} alt={item.label} />
                </button>
              ))}
            </div>

            <div className='showcase-hero-caption'>
              <span>Image direction placeholder</span>
              <p>These can be swapped out later for the client’s own product renders, campaign stills, and detail shots.</p>
            </div>
          </motion.div>

          <motion.aside
            className='showcase-buy-panel'
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.08 }}
          >
            <p className='showcase-mini-label'>New launch direction</p>
            <h1>Aura Device</h1>
            <p className='showcase-price'>Rs. 24,999.00</p>
            <p className='showcase-tax-note'>Illustrative pricing only. Final commercial details can be replaced later.</p>

            <div className='showcase-config-group'>
              <div className='showcase-config-head'>
                <span>Colour</span>
                <strong>{selectedColour}</strong>
              </div>
              <div className='showcase-chip-row'>
                {productOptions.colours.map((colour) => (
                  <button
                    key={colour}
                    type='button'
                    className={`showcase-chip ${selectedColour === colour ? 'active' : ''}`}
                    onClick={() => setSelectedColour(colour)}
                  >
                    {colour}
                  </button>
                ))}
              </div>
            </div>

            <div className='showcase-config-group'>
              <div className='showcase-config-head'>
                <span>Capacity</span>
                <strong>{selectedCapacity}</strong>
              </div>
              <div className='showcase-chip-row'>
                {productOptions.capacities.map((capacity) => (
                  <button
                    key={capacity}
                    type='button'
                    className={`showcase-chip ${selectedCapacity === capacity ? 'active' : ''}`}
                    onClick={() => setSelectedCapacity(capacity)}
                  >
                    {capacity}
                  </button>
                ))}
              </div>
            </div>

            <button type='button' className='showcase-buy-cta'>
              Buy now
            </button>

            <div className='showcase-panel-meta'>
              <p>Clean product presentation</p>
              <p>Large media blocks</p>
              <p>Reduced content density</p>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className='showcase-stat-strip'>
        <div className='showcase-stat-inner'>
          {keyStats.map((item) => (
            <article key={item.label} className='showcase-stat-card'>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className='showcase-feature-sections'>
        {highlights.map((item, index) => (
          <motion.article
            key={item.title}
            className={`showcase-feature-section ${index % 2 === 1 ? 'reverse' : ''}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div className='showcase-feature-text'>
              <p className='showcase-mini-label'>{item.eyebrow}</p>
              <h2>{item.title}</h2>
              <p>{item.copy}</p>
            </div>
            <div className='showcase-feature-image-wrap'>
              <img src={item.image} alt={item.eyebrow} className='showcase-feature-image' />
            </div>
          </motion.article>
        ))}
      </section>

      <section className='showcase-video-section'>
        <div className='showcase-video-copy'>
          <p className='showcase-mini-label'>Motion Section</p>
          <h2>Video-led moment can drop here when the final asset arrives.</h2>
          <p>
            The reference page uses motion to break up the rhythm. For now this block is ready with a placeholder media
            treatment, and it can be replaced by the client video as soon as you have it.
          </p>
        </div>
        <div className='showcase-video-frame'>
          <img src={cameraMotion} alt='Placeholder motion panel' className='showcase-video-media' />
          <span className='showcase-video-badge'>Video Placeholder</span>
        </div>
      </section>

      <section className='showcase-media-stack'>
        {mediaBands.map((item, index) => (
          <motion.article
            key={item.title}
            className='showcase-media-panel'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.04 }}
          >
            <img src={item.image} alt={item.title} className='showcase-media-image' />
            <div className='showcase-media-overlay'>
              <span>{item.title}</span>
            </div>
          </motion.article>
        ))}
      </section>

      <section className='showcase-bottom-cta'>
        <div className='showcase-bottom-shell'>
          <div>
            <p className='showcase-mini-label'>Build Ready</p>
            <h2>This page can now be repopulated with your own product content.</h2>
            <p>
              The structure is in place: sticky decision area, gallery, stats, editorial feature sections, large media
              panels, and a motion-ready slot.
            </p>
          </div>
          <a href='/#contact' className='showcase-bottom-button'>
            Continue with this direction
          </a>
        </div>
      </section>
    </main>
  );
}
