import { motion } from 'framer-motion';

const sectionReveal = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

const labs = [
  {
    name: 'Visual Intelligence',
    tag: 'Experiment 01',
    copy:
      'A testing space for AI-assisted campaign concepts, motion studies, and format exploration before they enter client production.',
  },
  {
    name: 'Immersive Commerce',
    tag: 'Experiment 02',
    copy:
      'Rapid prototypes for 360 product storytelling, guided walkthroughs, and conversion-focused interactive experiences.',
  },
  {
    name: 'Narrative Systems',
    tag: 'Experiment 03',
    copy:
      'A concept stream for blending brand voice, image systems, and interface behaviors into sharper digital storytelling.',
  },
];

export default function LabsPage() {
  return (
    <>
      <main className='labs-page'>
        <motion.section
          className='section labs-hero'
          variants={sectionReveal}
          initial='hidden'
          animate='visible'
        >
          <div className='container glass section-panel labs-hero-panel'>
            <p className='eyebrow'>Aura Labs</p>
            <h1>Experiments in image, interaction, and attention.</h1>
            <p className='labs-hero-copy'>
              Aura Labs is where we test future-facing ideas before they become client-ready systems. It is a working
              surface for bolder creative technology, sharper storytelling, and more immersive brand experiences.
            </p>
            <div className='labs-actions'>
              <a href='#labs-grid' className='btn-accent-glow hero-cta'>
                Explore Concepts
                <span className='chip-pill'>GO</span>
              </a>
              <a href='/#contact' className='labs-secondary-link'>
                Bring an idea to us
              </a>
            </div>
          </div>
        </motion.section>

        <section id='labs-grid' className='section labs-grid-section'>
          <div className='container section-panel'>
            <div className='labs-grid'>
              {labs.map((lab, index) => (
                <motion.article
                  key={lab.name}
                  className='glass labs-card'
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                >
                  <span className='labs-card-tag'>{lab.tag}</span>
                  <h2>{lab.name}</h2>
                  <p>{lab.copy}</p>
                </motion.article>
              ))}
            </div>

            <motion.div
              className='glass labs-cta-panel'
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <div>
                <p className='eyebrow'>Open Direction</p>
                <h2>Have a concept worth prototyping?</h2>
                <p>
                  We can turn emerging ideas into sharp visual demos, interactive proofs, and branded motion studies.
                </p>
              </div>
              <a href='/#contact' className='btn-accent-glow'>
                Start a Lab Conversation
                <span className='chip-pill'>-&gt;</span>
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
