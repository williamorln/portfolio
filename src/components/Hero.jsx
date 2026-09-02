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
      {/* Portrait, kept in color. The mist background is close enough to the
          photo's own sky that the edges dissolve without needing a heavy
          dark frame. */}
      <div className="absolute inset-0 flex items-end justify-center">
        {/* Full and wide through tablet widths; only narrows to make room for
            the side-by-side tagline once there's real desktop space for it —
            switching this earlier left it a narrow column stranded in a lot
            of empty mist between ~640-1024px. */}
        <div
          ref={portraitRef}
          className="relative h-[94%] w-[min(86vw,720px)] will-change-transform lg:w-[min(52vw,720px)]"
        >
          <img
            src="/william-orlando.jpg"
            alt={`${profile.name}, portrait`}
            className="h-full w-full object-cover"
            style={{ objectPosition: '50% 18%' }}
          />
          {/* Edges dissolve into the mist background. */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, #A6A39C 0%, rgba(166,163,156,0) 14%, rgba(166,163,156,0) 78%, rgba(166,163,156,0.55) 94%, #A6A39C 100%)',
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, #A6A39C 0%, rgba(166,163,156,0) 16%, rgba(166,163,156,0) 84%, #A6A39C 100%)',
            }}
          />
        </div>
      </div>

      {/* Location pill + Jakarta clock */}
      <div
        className="absolute left-0 z-4 top-[52%] flex items-center gap-[18px] bg-paper lg:top-[44%]"
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
        className="absolute z-4 top-[17%] text-right text-paper lg:top-[46%]"
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
        className="animate-nudge absolute z-4 hidden text-[26px] text-paper lg:block"
        style={{ right: 'clamp(20px, 4vw, 56px)', top: '26%' }}
      >
        ↘
      </div>

      {/* Wordmark, bleeding off the bottom edge */}
      <div
        ref={wordmarkRef}
        className="pointer-events-none absolute inset-x-0 z-3 flex items-end will-change-transform"
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
