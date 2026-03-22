import { useEffect, useRef } from 'react';
import 'pannellum/build/pannellum';
import 'pannellum/build/pannellum.css';

export default function ShowcasePanoramaViewer({ panorama, ariaLabel }) {
  const viewerElementRef = useRef(null);
  const viewerInstanceRef = useRef(null);

  useEffect(() => {
    if (!viewerElementRef.current || !window.pannellum) return undefined;

    viewerInstanceRef.current = window.pannellum.viewer(viewerElementRef.current, {
      type: 'equirectangular',
      panorama,
      autoLoad: true,
      showControls: false,
      showZoomCtrl: true,
      mouseZoom: true,
      draggable: true,
      pitch: 0,
      yaw: 180,
      hfov: 110,
    });

    return () => {
      viewerInstanceRef.current?.destroy?.();
      viewerInstanceRef.current = null;
    };
  }, [panorama]);

  return (
    <div
      ref={viewerElementRef}
      className='showcase-media-image showcase-panorama-viewer'
      role='img'
      aria-label={ariaLabel}
    />
  );
}
