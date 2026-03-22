import { showcaseAssets, serviceHighlights } from './showcaseContent';

export default function ShowcaseServiceCard({ isFloatingCardHidden }) {
  return (
    <aside
      className={`showcase-buy-panel showcase-service-panel showcase-floating-card ${isFloatingCardHidden ? 'showcase-floating-card-hidden' : ''}`}
    >
      <p className='showcase-mini-label'>Service Highlight</p>
      <div className='showcase-service-heading'>
        <div>
          <h1>Product Photography</h1>
          <ul className='showcase-feature-list'>
            {serviceHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <img
          src={showcaseAssets.productImage}
          alt='Product photography service sample'
          className='showcase-service-product'
        />
      </div>

      <a href='#contact' className='showcase-buy-cta showcase-service-cta'>
        Book a Shoot
      </a>
    </aside>
  );
}
