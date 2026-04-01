import { Link } from 'react-router-dom';

export default function ServiceHero({ eyebrow, title, subtitle, ctaLabel, ctaHref, image, imageAlt }) {
  return (
    <section className='service-page-section service-hero'>
      <div className='service-hero-media-shell'>
        <img src={image} alt={imageAlt} className='service-hero-image' />
      </div>

      <div className='service-hero-copy-shell'>
        <p className='service-page-eyebrow'>{eyebrow}</p>
        <h1>{title}</h1>
        <p className='service-page-lead'>{subtitle}</p>
        <div className='service-hero-actions'>
          <a href={ctaHref} className='btn-accent-glow service-page-button'>
            {ctaLabel}
            <span className='chip-pill'>GO</span>
          </a>
          <Link to='/#contact' className='service-page-link'>
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
