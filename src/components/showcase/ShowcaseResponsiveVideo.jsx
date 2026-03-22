import { useEffect, useRef, useState } from 'react';

const LOOP_CROSSFADE_MS = 420;
const LOOP_CROSSFADE_SECONDS = LOOP_CROSSFADE_MS / 1000;

function VideoSources({ desktopSrc, mobileSrc }) {
  return (
    <>
      {mobileSrc ? <source src={mobileSrc} media='(max-width: 767px)' type='video/mp4' /> : null}
      <source src={desktopSrc} type='video/mp4' />
    </>
  );
}

export default function ShowcaseResponsiveVideo({
  className,
  desktopSrc,
  mobileSrc,
  poster,
  ariaLabel,
  seamlessLoop = false,
}) {
  const videoRefs = [useRef(null), useRef(null)];
  const [activeIndex, setActiveIndex] = useState(0);
  const [crossfadeTargetIndex, setCrossfadeTargetIndex] = useState(null);

  useEffect(() => {
    if (!seamlessLoop) return undefined;

    const firstVideo = videoRefs[0].current;
    const secondVideo = videoRefs[1].current;
    if (!firstVideo || !secondVideo) return undefined;

    let timeoutId = 0;
    let hasStarted = false;

    const currentVideo = videoRefs[activeIndex].current;
    const nextIndex = activeIndex === 0 ? 1 : 0;
    const nextVideo = videoRefs[nextIndex].current;

    if (!currentVideo || !nextVideo) return undefined;

    const beginCrossfade = () => {
      if (hasStarted) return;
      hasStarted = true;
      setCrossfadeTargetIndex(nextIndex);

      nextVideo.currentTime = 0;
      void nextVideo.play().catch(() => {});

      timeoutId = window.setTimeout(() => {
        currentVideo.pause();
        currentVideo.currentTime = 0;
        setActiveIndex(nextIndex);
        setCrossfadeTargetIndex(null);
      }, LOOP_CROSSFADE_MS);
    };

    const handleTimeUpdate = () => {
      if (!Number.isFinite(currentVideo.duration) || currentVideo.duration <= LOOP_CROSSFADE_SECONDS) return;
      const remaining = currentVideo.duration - currentVideo.currentTime;
      if (remaining <= LOOP_CROSSFADE_SECONDS) {
        beginCrossfade();
      }
    };

    nextVideo.pause();
    nextVideo.currentTime = 0;

    if (currentVideo.paused) {
      void currentVideo.play().catch(() => {});
    }

    currentVideo.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      currentVideo.removeEventListener('timeupdate', handleTimeUpdate);
      window.clearTimeout(timeoutId);
    };
  }, [activeIndex, seamlessLoop]);

  if (!seamlessLoop) {
    return (
      <video
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload='none'
        poster={poster}
        aria-label={ariaLabel}
      >
        <VideoSources desktopSrc={desktopSrc} mobileSrc={mobileSrc} />
      </video>
    );
  }

  return (
    <div className={`${className} showcase-video-loop-stack`} aria-label={ariaLabel}>
      {[0, 1].map((index) => {
        const isActive = index === activeIndex;
        const isIncoming = index === crossfadeTargetIndex;

        return (
          <video
            key={index}
            ref={videoRefs[index]}
            className={`showcase-video-loop-layer ${isActive ? 'is-active' : ''} ${isIncoming ? 'is-incoming' : ''}`}
            autoPlay={index === 0}
            muted
            playsInline
            preload='metadata'
            poster={poster}
            aria-hidden={index === 0 ? undefined : 'true'}
          >
            <VideoSources desktopSrc={desktopSrc} mobileSrc={mobileSrc} />
          </video>
        );
      })}
    </div>
  );
}
