import ShowcaseClients from './showcase/ShowcaseClients';
import ShowcaseContactSection from './showcase/ShowcaseContactSection';
import ShowcaseFeatures from './showcase/ShowcaseFeatures';
import ShowcaseHero from './showcase/ShowcaseHero';
import ShowcaseResponsiveVideo from './showcase/ShowcaseResponsiveVideo';
import ShowcaseServiceCard from './showcase/ShowcaseServiceCard';
import ShowcaseVideoSection from './showcase/ShowcaseVideoSection';
import { showcaseAssets } from './showcase/showcaseContent';
import useShowcaseFloatingCard from '../hooks/useShowcaseFloatingCard';

export default function ShowcasePage() {
  const isFloatingCardHidden = useShowcaseFloatingCard();

  return (
    <main className='showcase-page'>
      <ShowcaseServiceCard isFloatingCardHidden={isFloatingCardHidden} />
      <ShowcaseHero />
      <ShowcaseClients />
      <div className='showcase-hero-video-block'>
        <ShowcaseResponsiveVideo
          className='showcase-hero-video'
          desktopSrc={showcaseAssets.demoVideo}
          mobileSrc={showcaseAssets.demoVideoMobile}
          ariaLabel='Aura 360 Studio demo video'
        />
      </div>
      <ShowcaseFeatures />
      <ShowcaseVideoSection />
      <ShowcaseContactSection />
    </main>
  );
}
