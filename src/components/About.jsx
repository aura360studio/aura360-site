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
