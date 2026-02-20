import { useEffect, useRef, useState } from 'react';
import useMousePosition from '../hooks/useMousePosition';

export default function Hero() {
  const { x, y } = useMousePosition();
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const [interactionDisabled, setInteractionDisabled] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [autoRevealComplete, setAutoRevealComplete] = useState(false);

  useEffect(() => {
    if (!hasInteracted || interactionDisabled) return;
    const timerId = window.setTimeout(() => {
      setAutoRevealComplete(true);
    }, 10000);
    return () => window.clearTimeout(timerId);
  }, [hasInteracted, interactionDisabled]);

  useEffect(() => {
    const heroEl = heroRef.current;
    const contentEl = heroContentRef.current;
    if (!heroEl) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
    const shouldDisableInteraction = prefersReducedMotion || isCoarsePointer || isSmallScreen;

    if (shouldDisableInteraction) {
      setInteractionDisabled(true);
      setAutoRevealComplete(true);
      return;
    }

    setInteractionDisabled(false);

    let rafId = 0;
    const ease = 0.16;
    const heroRect = heroEl.getBoundingClientRect();
    const current = { x: heroRect.width * 0.5, y: heroRect.height * 0.5 };
    const target = { x: current.x, y: current.y };

    const updateRevealPoint = () => {
      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;
      heroEl.style.setProperty('--reveal-x', `${current.x}px`);
      heroEl.style.setProperty('--reveal-y', `${current.y}px`);
      rafId = window.requestAnimationFrame(updateRevealPoint);
    };

    const handlePointerMove = (event) => {
      const rect = heroEl.getBoundingClientRect();
      target.x = event.clientX - rect.left;
      target.y = event.clientY - rect.top;
    };

    const handleContentInteraction = () => {
      if (!hasInteracted) setHasInteracted(true);
    };

    heroEl.addEventListener('pointermove', handlePointerMove);
    contentEl?.addEventListener('pointermove', handleContentInteraction);
    rafId = window.requestAnimationFrame(updateRevealPoint);

    return () => {
      heroEl.removeEventListener('pointermove', handlePointerMove);
      contentEl?.removeEventListener('pointermove', handleContentInteraction);
      window.cancelAnimationFrame(rafId);
    };
  }, [hasInteracted]);

  return (
    <section
      ref={heroRef}
      id='home'
      className={`section hero ${interactionDisabled ? 'hero-reveal-disabled' : ''} ${
        autoRevealComplete ? 'hero-reveal-complete' : hasInteracted ? 'hero-reveal-active' : 'hero-reveal-inactive'
      }`}
      style={{
        '--spotlight-x': `${x}px`,
        '--spotlight-y': `${y}px`,
      }}
    >
      <div className='hero-spotlight' />
      <div
        ref={heroContentRef}
        className={`container glass hero-content ${!interactionDisabled ? 'hero-content-base' : ''}`}
      >
        <p className='eyebrow'>Aura 360 Studio</p>
        <h1>Your Brand Deserves to Be Seen.</h1>
        <p className='hero-copy'>
          We design visibility.
          <br />
          <br />
          Through crafted visuals, motion, and immersive storytelling, we help brands stand out with clarity and
          intent.
        </p>
        <a href='#contact' className='btn-accent-glow hero-cta'>
          Start Your Project
          <span className='chip-pill'>-&gt;</span>
        </a>
      </div>

      {!interactionDisabled ? (
        <>
          <div className='hero-blur-overlay' aria-hidden='true'>
            <div className='container glass hero-content hero-content-blur'>
              <p className='eyebrow'>Aura 360 Studio</p>
              <h1>Your Brand Deserves to Be Seen.</h1>
              <p className='hero-copy'>
                We design visibility.
                <br />
                <br />
                Through crafted visuals, motion, and immersive storytelling, we help brands stand out with clarity and
                intent.
              </p>
              <a href='#contact' className='btn-accent-glow hero-cta'>
                Start Your Project
                <span className='chip-pill'>-&gt;</span>
              </a>
            </div>
          </div>

          <div className='hero-cursor-glow' aria-hidden='true' />
        </>
      ) : null}
    </section>
  );
}
