import { Reveal } from "@/components/Reveal";
import { now } from "@/lib/content";

export function NowBar() {
  return (
    <div className="border-y hairline-dark bg-console-2 px-6 py-5 lg:pl-24 lg:pr-10">
      <Reveal>
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-baseline gap-x-4 gap-y-1">
          <span className="font-mono-ui text-[0.72rem] tracking-[0.12em] text-signal uppercase">
            {now.eyebrow} —
          </span>
          <p className="font-mono-ui text-[0.8rem] leading-relaxed text-paper/70">{now.text}</p>
          <span className="ml-auto font-mono-ui text-[0.68rem] text-paper/35">{now.updated}</span>
        </div>
      </Reveal>
    </div>
  );
}
