import { profile } from '../data/content.js'
import { useClock } from '../hooks/useClock.js'
import { useParallax } from '../hooks/useParallax.js'

export default function Hero() {
  const clock = useClock()
  const portraitRef = useParallax(0.16)
  const wordmarkRef = useParallax(-0.1)

  return (
    <header
      id="top"
      className="relative overflow-hidden bg-mist"
      style={{ height: '100vh', minHeight: '620px' }}
    >
      {/* Portrait, cut out of its background. It sits above the wordmark
          (z-3 below) so he reads as standing in front of the page rather
          than pasted into it, and the drop-shadow follows his actual
          silhouette instead of a rectangular photo edge. */}
      <div className="absolute inset-0 z-3 flex items-end justify-center">
        <div
          ref={portraitRef}
          className="relative h-[94%] w-[min(86vw,720px)] will-change-transform sm:w-[min(52vw,720px)]"
        >
          <img
            src="/william-cutout.webp"
            alt={`${profile.name}, portrait`}
            className="h-full w-full object-contain object-bottom"
            style={{
              filter:
                'drop-shadow(0 18px 14px rgba(20,17,12,0.22)) drop-shadow(0 46px 40px rgba(20,17,12,0.24)) drop-shadow(0 90px 70px rgba(20,17,12,0.18))',
            }}
          />
        </div>
      </div>

      {/* Location pill + Jakarta clock */}
      <div
        className="absolute left-0 z-4 top-[52%] flex items-center gap-[18px] bg-paper sm:top-[44%]"
        style={{ padding: '14px 22px 14px 24px', borderRadius: '0 100px 100px 0' }}
      >
        <div className="text-[13px] font-medium leading-[1.25] tracking-[-0.01em]">
          Based in
          <br />
          Jakarta,
          <br />
          Indonesia
        </div>
        <div className="flex h-[46px] w-[46px] flex-col items-center justify-center rounded-full bg-ink text-[9px] font-semibold tracking-[0.02em] text-paper">
          <span>WIB</span>
          <span className="text-[11px] font-medium">{clock}</span>
        </div>
      </div>

      {/* Tagline. Sits high on a phone so it clears the location pill, which
          shares the same band at desktop widths. */}
      <div
        className="absolute z-4 top-[17%] text-right text-paper sm:top-[46%]"
        style={{ right: 'clamp(20px, 4vw, 56px)' }}
      >
        <div
          className="whitespace-pre-line font-display font-medium leading-[1.14] tracking-[-0.025em]"
          style={{ fontSize: 'clamp(22px, 2.5vw, 38px)' }}
        >
          {profile.tagline}
        </div>
        <div className="mt-[14px] text-[13px] text-paper/60">{profile.role}</div>
      </div>

      <div
        aria-hidden
        className="animate-nudge absolute z-4 hidden text-[26px] text-paper sm:block"
        style={{ right: 'clamp(20px, 4vw, 56px)', top: '26%' }}
      >
        ↘
      </div>

      {/* Wordmark, bleeding off the bottom edge. Sits behind the portrait
          (z-2 < z-3) so he appears to stand in front of the type. */}
      <div
        ref={wordmarkRef}
        className="pointer-events-none absolute inset-x-0 z-2 flex items-end will-change-transform"
        style={{ bottom: '-0.6vw', gap: '2vw', padding: '0 clamp(14px, 2vw, 36px)' }}
      >
        <h1
          className="m-0 font-display font-semibold leading-[0.78] tracking-[-0.05em] text-paper"
          style={{ fontSize: 'clamp(76px, 15.6vw, 252px)' }}
        >
          {profile.wordmark}
        </h1>
        <div
          className="min-w-[40px] flex-1 bg-paper"
          style={{ height: 'clamp(4px, 0.7vw, 10px)', marginBottom: 'clamp(22px, 4.4vw, 72px)' }}
        />
      </div>

      <div
        className="absolute z-5 flex items-center gap-[9px] rounded-full border border-paper/35 px-4 py-[9px] text-[12.5px] font-medium text-paper"
        style={{
          left: 'clamp(20px, 4vw, 56px)',
          bottom: 'calc(clamp(76px, 15.6vw, 252px) * 0.78 + 26px)',
        }}
      >
        <span className="h-[7px] w-[7px] rounded-full bg-accent" />
        {profile.available}
      </div>
    </header>
  )
}
