export default function MasonryGallery({ id, title, copy, images }) {
  return (
    <section id={id || 'product-photography-gallery'} className='service-page-section service-gallery'>
      <div className='service-page-heading'>
        <p className='service-page-eyebrow'>Selected Frames</p>
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>

      <div className='service-masonry-grid'>
        {images.map((image) => (
          <figure key={image.src} className={`service-masonry-card ${image.sizeClass || ''}`.trim()}>
            <div className={`service-masonry-media ${image.ratioClass || ''}`.trim()}>
              <img
                src={image.src}
                alt={image.alt}
                className={`service-masonry-image ${image.imageClass || ''}`.trim()}
              />
            </div>
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
