import { useEffect } from 'react';
import ServiceProcess from '../components/services/ServiceProcess';
import BeforeAfterSlider from '../components/services/BeforeAfterSlider';
import MasonryGallery from '../components/services/MasonryGallery';
import ServiceCTA from '../components/services/ServiceCTA';
import useShowcaseFloatingCard from '../hooks/useShowcaseFloatingCard';
import beforeImage from '../assets/Ads Now Powered with AI/AI-before.webp';
import afterImage from '../assets/Ads Now Powered with AI/AI-after.webp';
import galleryBra from '../assets/Ads Now Powered with AI/gallery ai/Bra.webp';
import galleryChillMango from '../assets/Ads Now Powered with AI/gallery ai/chill mango.webp';
import galleryCream from '../assets/Ads Now Powered with AI/gallery ai/cream.webp';
import galleryDish from '../assets/Ads Now Powered with AI/gallery ai/dish.webp';
import galleryEventSocial from '../assets/Ads Now Powered with AI/gallery ai/event social media post.webp';
import galleryFrames from '../assets/Ads Now Powered with AI/gallery ai/Frames.webp';
import galleryHadetMovie from '../assets/Ads Now Powered with AI/gallery ai/HADET Movie poster.webp';
import galleryHordingAd from '../assets/Ads Now Powered with AI/gallery ai/hording ad.webp';
import galleryInsta from '../assets/Ads Now Powered with AI/gallery ai/insta.webp';
import galleryLearn from '../assets/Ads Now Powered with AI/gallery ai/learn.webp';
import galleryLumina from '../assets/Ads Now Powered with AI/gallery ai/Lumina screem.webp';
import galleryPizza from '../assets/Ads Now Powered with AI/gallery ai/pizza.webp';
import galleryProductAd from '../assets/Ads Now Powered with AI/gallery ai/product ad.webp';
import gallerySunnySide from '../assets/Ads Now Powered with AI/gallery ai/sunny side up.webp';
import galleryWatch from '../assets/Ads Now Powered with AI/gallery ai/watch.webp';
import galleryYoga from '../assets/Ads Now Powered with AI/gallery ai/yoga.webp';
import serviceHighlightImage from '../assets/Ads Now Powered with AI/Service Highlight.webp';
import heroImage from '../assets/Ads Now Powered with AI/hero.webp';

const processSteps = [
  {
    title: 'Requirement Discussion',
    copy: 'We understand your product, brand, target audience, and platform (Instagram, Facebook, posters, ads, etc.).',
    icon: 'forum',
  },
  {
    title: 'Concept & Idea Development',
    copy: 'We develop creative ideas, layouts, visual concepts, and ad direction.',
    icon: 'lightbulb',
  },
  {
    title: 'Product Photography / Asset Collection',
    copy: 'We capture product photos or collect brand assets, logos, and content.',
    icon: 'photo_library',
  },
  {
    title: 'Design & AI Creative Development',
    copy: 'We design ad creatives using graphic design, photo manipulation, typography, and AI tools.',
    icon: 'auto_awesome',
  },
  {
    title: 'Review & Revisions',
    copy: 'We share creative drafts and refine based on feedback.',
    icon: 'fact_check',
  },
  {
    title: 'Final Delivery / Campaign Support',
    copy: 'We deliver final creatives ready for social media, print, ads, and marketing campaigns.',
    icon: 'campaign',
  },
];

const galleryImages = [
  { src: gallerySunnySide, alt: 'Sunny side ad creative', caption: 'Sunny Side Up', ratioClass: 'is-portrait-wide' },
  { src: galleryLearn, alt: 'Education campaign creative', caption: 'Learning Campaign', ratioClass: 'is-portrait-hero' },
  { src: galleryBra, alt: 'Creative ad poster frame', caption: 'Bra Campaign', ratioClass: 'is-portrait-medium' },
  { src: galleryFrames, alt: 'Creative frame ad collage', caption: 'Frames Series', ratioClass: 'is-tall' },
  { src: galleryChillMango, alt: 'Chill mango ad poster frame', caption: 'Chill Mango', ratioClass: 'is-portrait-wide' },
  { src: galleryHordingAd, alt: 'Hoarding ad creative', caption: 'Hoarding Creative', ratioClass: 'is-portrait-xl' },
  { src: galleryPizza, alt: 'Pizza ad creative', caption: 'Pizza Poster', ratioClass: 'is-portrait-medium' },
  { src: galleryEventSocial, alt: 'Event social media ad frame', caption: 'Event Social', ratioClass: 'is-portrait-slim' },
  { src: galleryCream, alt: 'Cream product ad frame', caption: 'Cream Spotlight', ratioClass: 'is-portrait-xl' },
  { src: galleryInsta, alt: 'Instagram ad creative', caption: 'Insta Creative', ratioClass: 'is-portrait-medium' },
  { src: galleryLumina, alt: 'Lumina screen ad creative', caption: 'Lumina Screen', ratioClass: 'is-tall' },
  { src: galleryDish, alt: 'Dish product ad frame', caption: 'Tabletop Moment', ratioClass: 'is-portrait-medium' },
  { src: galleryWatch, alt: 'Watch campaign ad', caption: 'Watch Campaign', ratioClass: 'is-tall' },
  { src: galleryProductAd, alt: 'Product ad creative', caption: 'Product Ad', ratioClass: 'is-portrait-slim' },
  { src: galleryHadetMovie, alt: 'Movie poster ad frame', caption: 'Movie Poster', ratioClass: 'is-portrait-wide' },
  { src: galleryYoga, alt: 'Yoga lifestyle ad', caption: 'Yoga Creative', ratioClass: 'is-portrait-medium' },
];

export default function AdsNowAIPowered() {
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
            <h1>From Product to Advertisement</h1>
            <p className='showcase-buy-copy'>
              We transform your products and brand into professional advertisements using photography, graphic design,
              AI tools, and creative visual storytelling for social media, posters, banners, and marketing campaigns.
            </p>
          </div>
          <img src={serviceHighlightImage} alt='Ads service highlight' className='showcase-service-product' />
        </div>

        <a href='#gallery' className='showcase-buy-cta showcase-service-cta' onClick={scrollToGallery}>
          Explore Ad Creatives
        </a>
      </aside>

      <section id='home' className='showcase-product-shell showcase-anchor-section service-page-showcase-hero'>
        <div className='showcase-gallery-column showcase-floating-stage'>
          <div className='showcase-main-visual showcase-service-visual'>
            <img src={heroImage} alt='Ads service hero visual' className='showcase-main-product-image' />
          </div>
        </div>
      </section>

      <ServiceProcess
        id='process'
        title='Our Creative Process'
        intro='We follow a simple and structured workflow to ensure every creative is delivered with clarity and impact.'
        steps={processSteps}
      />

      <BeforeAfterSlider
        id='before-after'
        title='Before & After'
        copy='We transform simple product images into creative advertisements using design, lighting effects, typography, backgrounds, and AI tools.'
        beforeImage={beforeImage}
        afterImage={afterImage}
      />

      <MasonryGallery
        id='gallery'
        title='Ad Creatives & Campaign Works'
        copy='Selected ad creatives and campaign visuals produced for brands and launches.'
        images={galleryImages}
      />

      <ServiceCTA
        id='contact'
        title="Let's Build Your Advertisement"
        copy="We help businesses and brands create advertisements from their products using photography, design, and AI-powered creative tools. Whether you need social media creatives, posters, banners, flyers, or complete campaign visuals, we can plan and create them together. Let's discuss your requirement and build your next advertisement."
        buttonLabel="Let's Discuss"
        buttonHref='/#contact'
      />
    </main>
  );
}
