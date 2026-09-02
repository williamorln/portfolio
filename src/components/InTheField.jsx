import { fieldwork } from '../data/content.js'

export default function InTheField() {
  return (
    <section
      className="overflow-hidden bg-ink text-paper"
      style={{ padding: 'clamp(60px,7vw,110px) 0 clamp(64px,7vw,110px)' }}
    >
      <div
        className="mx-auto flex max-w-[1320px] flex-wrap items-end justify-between gap-6"
        style={{
          padding: '0 clamp(20px,4vw,56px)',
          marginBottom: 'clamp(28px, 3.4vw, 48px)',
        }}
      >
        <h2
          className="m-0 font-display font-semibold leading-[0.98] tracking-[-0.04em]"
          style={{ fontSize: 'clamp(32px, 4.4vw, 62px)' }}
        >
          In the field.
        </h2>
        <p className="m-0 max-w-[36ch] text-[15px] leading-[1.55] text-paper/62 text-pretty">
          Brand activations, concerts, festivals, campus events. Scroll the strip →
        </p>
      </div>

      <div
        className="strip-scroll flex overflow-x-auto pb-3.5"
        style={{ gap: 'clamp(12px,1.2vw,20px)', padding: '0 clamp(20px,4vw,56px) 14px' }}
      >
        {fieldwork.map((item) => (
          <figure
            key={item.title}
            className="m-0 flex-none"
            style={{ width: 'clamp(240px, 26vw, 360px)' }}
          >
            {/* No event photography yet — the card carries the role instead of
                an empty image frame. Set `image` in content.js to use a photo. */}
            <div className="relative flex aspect-3/4 flex-col justify-end overflow-hidden rounded-md border border-paper/10 bg-[#181818] p-6">
              {item.image ? (
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.role}`}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <>
                  <span
                    aria-hidden
                    className="absolute right-5 top-5 font-display text-[13px] tracking-[0.08em] text-paper/25"
                  >
                    {item.year}
                  </span>
                  <span className="font-display text-2xl leading-[1.1] tracking-[-0.03em] text-paper/85">
                    {item.title}
                  </span>
                </>
              )}
            </div>

            <figcaption className="mt-3 flex items-baseline justify-between gap-3">
              <span className="font-display text-[16.5px] font-semibold tracking-[-0.02em]">
                {item.title}
              </span>
              <span className="whitespace-nowrap text-[12.5px] text-paper/50">{item.year}</span>
            </figcaption>
            <div className="mt-1 text-[13.5px] text-paper/60">{item.role}</div>
          </figure>
        ))}
      </div>
    </section>
  )
}
