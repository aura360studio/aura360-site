export default function ServiceProcess({ title, intro, steps }) {
  return (
    <section className='service-page-section service-process'>
      <div className='service-page-heading'>
        <p className='service-page-eyebrow'>Structured Workflow</p>
        <h2>{title}</h2>
        <p>{intro}</p>
      </div>

      <div className='service-process-grid' role='list'>
        {steps.map((step, index) => (
          <article key={step.title} className='service-process-card' role='listitem'>
            <div className='service-process-card-top'>
              <p className='service-process-index'>{String(index + 1).padStart(2, '0')}</p>
            </div>
            <div className='service-process-card-body'>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
