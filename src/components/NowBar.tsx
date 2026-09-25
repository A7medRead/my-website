import { Reveal } from "@/components/Reveal";
import { now } from "@/lib/content";

export function NowBar() {
  return (
    <div className="border-b border-ink/35 bg-report px-6 py-6 text-ink sm:py-8 lg:px-10">
      <Reveal>
        <div className="mx-auto grid w-full max-w-[1600px] gap-6 lg:grid-cols-[120px_minmax(0,1fr)_minmax(260px,0.85fr)_180px] lg:items-center lg:gap-8">
          <span className="font-display text-5xl font-bold uppercase leading-none tracking-[-0.06em] text-ink sm:text-6xl">{now.eyebrow}<span className="text-signal">.</span></span>
          <div className="border-l-2 border-signal/70 pl-5">
            <span className="section-label font-mono-ui text-[0.65rem] tracking-[0.14em] text-wire uppercase">Currently building</span>
            <p className="mt-2 max-w-[52ch] font-display text-base leading-relaxed text-ink/85 sm:text-lg">{now.text}</p>
          </div>
          <ul className="flex flex-col gap-2 border-l border-ink/20 pl-5 font-mono-ui text-[0.7rem] leading-relaxed text-ink/75">
            <li><span className="mr-3 text-signal">●</span>Automating campaign workflows</li>
            <li><span className="mr-3 text-signal">●</span>Expanding sending infrastructure</li>
            <li><span className="mr-3 text-signal">●</span>Building what’s next</li>
          </ul>
          <div className="border-t border-ink/25 pt-3 font-mono-ui text-[0.65rem] leading-relaxed tracking-[0.12em] text-ink/55 uppercase lg:border-l lg:border-t-0 lg:py-2 lg:pl-5">Same mission.<br />A more scalable<br />tomorrow.<span className="mt-2 block text-[0.55rem] tracking-normal normal-case text-ink/40">{now.updated}</span></div>
        </div>
      </Reveal>
    </div>
  );
}
