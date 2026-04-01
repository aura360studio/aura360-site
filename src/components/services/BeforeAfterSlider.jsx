import { useId, useRef, useState } from 'react';

export default function BeforeAfterSlider({
  title,
  copy,
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
}) {
  const [position, setPosition] = useState(58);
  const sliderId = useId();
  const mediaRef = useRef(null);

  const updatePositionFromClientX = (clientX) => {
    const media = mediaRef.current;
    if (!media) return;

    const rect = media.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, nextPosition)));
  };

  const handlePointerMove = (event) => {
    if (!(event.buttons & 1)) return;
    updatePositionFromClientX(event.clientX);
  };

  const handlePointerDown = (event) => {
    event.preventDefault();
    updatePositionFromClientX(event.clientX);
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  return (
    <section className='service-page-section service-before-after'>
      <div className='service-page-heading'>
        <p className='service-page-eyebrow'>Editing Transformation</p>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>

      <div className='before-after-stage'>
        <div
          ref={mediaRef}
          className='before-after-media'
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
        >
          <img src={beforeImage} alt={`${beforeLabel} product capture`} className='before-after-base-image' />
          <div className='before-after-overlay' style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
            <img src={afterImage} alt={`${afterLabel} product capture`} className='before-after-top-image' />
          </div>
          <div className='before-after-divider' style={{ left: `${position}%` }}>
            <button
              type='button'
              className='before-after-handle'
              aria-label='Drag to compare before and after'
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
            />
          </div>
          <div className='before-after-chip before-chip'>{beforeLabel}</div>
          <div className='before-after-chip after-chip'>{afterLabel}</div>
        </div>

        <label htmlFor={sliderId} className='before-after-slider-label'>
          Drag to compare
        </label>
        <input
          id={sliderId}
          type='range'
          min='0'
          max='100'
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className='before-after-slider'
        />
      </div>
    </section>
  );
}
