import { motion } from 'framer-motion';

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
    transition: { duration: 0.7, ease: 'easeOut', delay: index * 0.08 },
  }),
};

export default function Additional() {
  const capabilities = [
    'Creative Direction',
    'Brand Identity Systems',
    'Motion & Video Production',
    'Social Media & Campaign Assets',
    'Post-Production & Editing',
    'Launch & Deployment Support',
  ];

  return (
    <motion.section
      id='additional'
      className='section'
      variants={sectionReveal}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.22 }}
    >
      <div className='container glass section-panel additional-panel'>
        <div className='additional-grid'>
          <motion.div className='additional-narrative' variants={itemReveal} custom={0}>
            <h2 className='additional-heading'>From Spark to Spotlight.</h2>
            <p className='additional-copy'>We understand that every brand’s needs are different.</p>
            <p className='additional-copy'>
              While we specialize in focused services, our expertise extends across the entire multimedia journey —
              from concept and creative direction to production, post-production, and launch.
            </p>
            <p className='additional-copy'>
              Whether you need a single deliverable or end-to-end support, we adapt to your vision and scale with your
              ambition.
            </p>
            <p className='additional-copy'>Let’s explore what’s possible together.</p>
            <a href='#contact' className='additional-cta'>
              <span>Discuss Your Project</span>
              <span className='additional-cta-arrow' aria-hidden='true'>
                -&gt;
              </span>
            </a>
          </motion.div>

          <motion.aside
            className='additional-capability-panel'
            aria-label='Expanded multimedia support'
            variants={itemReveal}
            custom={1}
          >
            <h3>Expanded Multimedia Support</h3>
            <ul>
              {capabilities.map((item) => (
                <li key={item}>
                  <span className='capability-dot' aria-hidden='true'>
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </motion.section>
  );
}
