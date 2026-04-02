import { useEffect } from 'react';
import ServiceProcess from '../components/services/ServiceProcess';
import BeforeAfterSlider from '../components/services/BeforeAfterSlider';
import MasonryGallery from '../components/services/MasonryGallery';
import ServiceCTA from '../components/services/ServiceCTA';
import useShowcaseFloatingCard from '../hooks/useShowcaseFloatingCard';
import beforeImage from '../assets/Product Photography/hour glass before.webp';
import afterImage from '../assets/Product Photography/hour glass after.webp';
import galleryAuroraVodka from '../assets/Product Photography/gallery/Aurora vodka.webp';
import galleryCreamAndHoney from '../assets/Product Photography/gallery/Cream and honey.webp';
import galleryCreative from '../assets/Product Photography/gallery/creative.webp';
import galleryDish from '../assets/Product Photography/gallery/dish.webp';
import galleryDrinkJuce from '../assets/Product Photography/gallery/drink juce.webp';
import galleryDrinksAl from '../assets/Product Photography/gallery/drinks al.webp';
import galleryEnergyDrink from '../assets/Product Photography/gallery/energy drink.webp';
import galleryJecket from '../assets/Product Photography/gallery/jecket.webp';
import galleryLifeStyle from '../assets/Product Photography/gallery/life style.webp';
import galleryModel from '../assets/Product Photography/gallery/Model.webp';
import galleryMyBag from '../assets/Product Photography/gallery/my bag.webp';
import galleryToy1 from '../assets/Product Photography/gallery/toy 1.webp';
import galleryToy2 from '../assets/Product Photography/gallery/toy 2.webp';
import galleryToy3 from '../assets/Product Photography/gallery/toy 3.webp';
import galleryToy4 from '../assets/Product Photography/gallery/toy 4.webp';
import galleryToy5 from '../assets/Product Photography/gallery/toy 5.webp';
import productImage from '../assets/product.png';
import productHeroImage from '../assets/Product Photography/PP hero.webp';

const processSteps = [
  {
    title: 'Requirement Discussion',
    copy: 'We connect with you to understand the product, purpose, platform, and style requirements.',
    icon: 'forum',
  },
  {
    title: 'Planning & Proposal',
    copy: 'We plan the shoot, backgrounds, props, lighting style, and share the quotation and timeline.',
    icon: 'edit_note',
  },
  {
    title: 'Studio / Location Setup',
    copy: 'We set up the studio or prepare the location for the shoot.',
    icon: 'tune',
  },
  {
    title: 'Photoshoot',
    copy: 'We capture the product using professional lighting and camera setup.',
    icon: 'photo_camera',
  },
  {
    title: 'Editing & Review',
    copy: 'We edit, retouch, and enhance the images and share previews for review.',
    icon: 'auto_fix_high',
  },
  {
    title: 'Final Delivery',
    copy: 'We deliver the final high-resolution images in required formats.',
    icon: 'local_shipping',
  },
];

const galleryImages = [
  { src: galleryToy1, alt: 'Toy product photography frame one', caption: 'Toy Series 01', ratioClass: 'is-portrait-medium' },
  { src: galleryCreative, alt: 'Creative product photography concept frame', caption: 'Creative Concept', ratioClass: 'is-portrait-wide' },
  { src: galleryToy3, alt: 'Toy product photography frame three', caption: 'Toy Series 03', ratioClass: 'is-tall' },
  { src: galleryDrinkJuce, alt: 'Juice drink product photography frame', caption: 'Juice Pour', ratioClass: 'is-portrait-xl' },
  { src: galleryMyBag, alt: 'Bag product photography frame', caption: 'Bag Feature', ratioClass: 'is-portrait-wide' },
  { src: galleryAuroraVodka, alt: 'Aurora vodka product photography frame', caption: 'Aurora Vodka', ratioClass: 'is-tall' },
  { src: galleryJecket, alt: 'Jacket product photography frame', caption: 'Jacket Detail', ratioClass: 'is-portrait-slim' },
  { src: galleryCreamAndHoney, alt: 'Cream and honey product photography frame', caption: 'Cream and Honey', ratioClass: 'is-portrait-medium' },
  { src: galleryToy5, alt: 'Toy product photography frame five', caption: 'Toy Series 05', ratioClass: 'is-portrait-xl' },
  {
    src: galleryLifeStyle,
    alt: 'Lifestyle product photography frame',
    caption: 'Lifestyle Story',
    ratioClass: 'is-portrait-hero',
    imageClass: 'is-lifestyle-frame',
  },
  { src: galleryEnergyDrink, alt: 'Energy drink product photography frame', caption: 'Energy Drink', ratioClass: 'is-tall' },
  { src: galleryDish, alt: 'Styled dish product photography frame', caption: 'Styled Dish', ratioClass: 'is-portrait-medium' },
  { src: galleryModel, alt: 'Model-led product photography frame', caption: 'Model Focus', ratioClass: 'is-portrait-slim' },
  { src: galleryToy2, alt: 'Toy product photography frame two', caption: 'Toy Series 02', ratioClass: 'is-portrait-medium' },
  { src: galleryDrinksAl, alt: 'Drinks product photography arrangement', caption: 'Drinks Arrangement', ratioClass: 'is-portrait-wide' },
  { src: galleryToy4, alt: 'Toy product photography frame four', caption: 'Toy Series 04', ratioClass: 'is-tall' },
];

export default function ProductPhotography() {
  const isFloatingCardHidden = useShowcaseFloatingCard();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const scrollToGallery = (event) => {
    event.preventDefault();
    const gallerySection = document.getElementById('gallery');
    if (!gallerySection) return;

    gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className='service-page service-page-showcase'>
      <aside
        className={`showcase-buy-panel showcase-service-panel showcase-floating-card ${
          isFloatingCardHidden ? 'showcase-floating-card-hidden' : ''
        } service-page-floating-card`}
      >
        <p className='showcase-mini-label'>Service Highlight</p>
        <div className='showcase-service-heading'>
          <div>
            <h1>Product Photography</h1>
            <p className='showcase-buy-copy'>
              We create high-quality product photographs that help brands showcase their products professionally for
              websites, e-commerce platforms, catalogs, and social media.
            </p>
          </div>
          <img src={productImage} alt='Product photography service sample' className='showcase-service-product' />
        </div>

        <a href='#gallery' className='showcase-buy-cta showcase-service-cta' onClick={scrollToGallery}>
          Explore Our Work
        </a>
      </aside>

      <section id='home' className='showcase-product-shell showcase-anchor-section service-page-showcase-hero'>
        <div className='showcase-gallery-column showcase-floating-stage'>
          <div className='showcase-main-visual showcase-service-visual'>
            <img src={productHeroImage} alt='Product photography hero visual' className='showcase-main-product-image' />
          </div>
        </div>
      </section>

      <ServiceProcess
        id='process'
        title='Our Process'
        intro='We follow a simple and structured workflow to ensure every product is photographed professionally and delivered on time.'
        steps={processSteps}
      />

      <BeforeAfterSlider
        id='before-after'
        title='Before & After Editing'
        copy='See how we transform raw images into professional product photographs through editing, color correction, background cleanup, and retouching.'
        beforeImage={beforeImage}
        afterImage={afterImage}
      />

      <MasonryGallery
        id='gallery'
        title='Our Works'
        copy='While we focus primarily on product photography, we also work on events, lifestyle photography, corporate shoots, and weddings based on client requirements. Below are some of our selected works.'
        images={galleryImages}
      />

      <ServiceCTA
        id='contact'
        title='Let’s Discuss Your Requirement'
        copy='We focus mainly on product photography, helping brands and businesses present their products professionally. However, we also accommodate different types of photography such as events, lifestyle, weddings, and corporate shoots based on customer requirements. If you have a requirement, let’s discuss and plan the shoot together.'
        buttonLabel='Let’s Discuss'
        buttonHref='/#contact'
      />
    </main>
  );
}
