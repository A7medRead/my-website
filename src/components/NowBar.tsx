import { Reveal } from "@/components/Reveal";
import { getContent, type Locale } from "@/lib/i18n";

export function NowBar({ locale = "en" }: { locale?: Locale }) {
  const { now, ui } = getContent(locale);
  return (
    <div className="border-b border-ink/35 bg-report px-6 py-6 text-ink sm:py-8 lg:px-10">
      <Reveal>
        <div className="mx-auto grid w-full max-w-[1600px] gap-6 lg:grid-cols-[120px_minmax(0,1fr)_minmax(260px,0.85fr)_180px] lg:items-center lg:gap-8">
          <span className="font-display text-5xl font-bold uppercase leading-none tracking-[-0.06em] text-ink sm:text-6xl">{now.eyebrow}<span className="text-signal">.</span></span>
          <div className="border-s-2 border-signal/70 ps-5">
            <span className="section-label font-mono-ui text-[0.65rem] tracking-[0.14em] text-wire uppercase">{ui.now.label}</span>
            <p className="mt-2 max-w-[52ch] font-display text-base leading-relaxed text-ink/85 sm:text-lg">{now.text}</p>
          </div>
          <ul className="flex flex-col gap-2 border-s border-ink/20 ps-5 font-mono-ui text-[0.7rem] leading-relaxed text-ink/75">
            {ui.now.items.map((item) => (
              <li key={item}><span aria-hidden="true" className="me-3 text-signal">●</span>{item}</li>
            ))}
          </ul>
          <div className="border-t border-ink/25 pt-3 font-mono-ui text-[0.65rem] leading-relaxed tracking-[0.12em] text-ink/55 uppercase lg:border-s lg:border-t-0 lg:py-2 lg:ps-5">{ui.now.closing[0]}<br />{ui.now.closing[1]}<br />{ui.now.closing[2]}<span className="mt-2 block text-[0.55rem] tracking-normal normal-case text-ink/40">{now.updated}</span></div>
        </div>
      </Reveal>
    </div>
  );
}
