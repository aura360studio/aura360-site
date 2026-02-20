import { motion } from 'framer-motion';

const sectionReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.08,
    },
  },
};

const itemReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const services = [
  {
    title: 'AI-Powered Ads',
    positioning: 'Creativity amplified by intelligence.',
    text: `We combine data-driven insights with high-impact visuals to craft adaptive campaigns that reach the right audience at the right moment.
Smarter targeting. Sharper execution. Measurable performance.`,
    cta: 'Explore AI Advertising',
    href: '#contact',
    featured: true,
  },
  {
    title: 'Product Photography',
    positioning: 'Precision. Presence. Performance.',
    text: `We craft product imagery that does more than showcase - it sells.
Through controlled lighting, refined composition, and meticulous detail, we position your products to command attention and drive conversion.
Every frame is designed to elevate perceived value and strengthen brand authority.`,
    cta: 'Explore Product Photography',
    href: '#contact',
  },
  {
    title: '360 Photography',
    positioning: 'Immersion builds trust.',
    text: `We create interactive 360 visuals that allow customers to explore with confidence.
By revealing every angle and detail, we reduce hesitation and increase engagement across digital platforms.
Designed for brands that want transparency, depth, and distinction.`,
    cta: 'Explore 360 Photography',
    href: '#contact',
    featured: true,
  },
  {
    title: 'Walkthrough and Visual Experience',
    positioning: 'Movement with purpose.',
    text: `We produce cinematic walkthroughs that transform environments into compelling visual narratives.
From real estate to experiential spaces, we design motion-led storytelling that captivates and converts.
Built to communicate scale, atmosphere, and impact.`,
    cta: 'Explore Visual Experiences',
    href: '#contact',
  },
];

export default function Services() {
  return (
    <motion.section
      id='services'
      className='section services-section'
      variants={sectionReveal}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className='container services-panel'>
        <motion.div className='services-shell glass section-panel' variants={staggerContainer}>
          <motion.h2 variants={itemReveal}>Services</motion.h2>
          <motion.div className='services-grid' variants={staggerContainer}>
            {services.map((service) => (
              <motion.article
                key={service.title}
                className={`service-card glass ${service.featured ? 'service-card-featured' : ''}`}
                variants={itemReveal}
              >
                <h3>{service.title}</h3>
                <p className='service-positioning'>{service.positioning}</p>
                <p>{service.text}</p>
                <a href={service.href} className='service-card-cta'>
                  <span>{service.cta}</span>
                  <span className='service-cta-arrow' aria-hidden='true'>-&gt;</span>
                </a>
              </motion.article>
            ))}
          </motion.div>
          <motion.div className='services-footer-cta' variants={itemReveal}>
            <p>Ready to elevate your brand experience?</p>
            <a href='#contact' className='btn-accent-glow'>
              Start Your Project
              <span className='chip-pill'>GO</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
