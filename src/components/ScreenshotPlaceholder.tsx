import Image from "next/image";

export function ScreenshotPlaceholder({
  caption,
  ratio,
  index,
  src,
}: {
  caption: string;
  ratio: string;
  index: number;
  src?: string;
}) {
  return (
    <figure className="relative">
      <div
        className="relative overflow-hidden border hairline-light bg-report-2/60"
        style={{ aspectRatio: ratio, borderStyle: src ? "solid" : "dashed" }}
      >
        {src ? (
          <Image
            src={src}
            alt={caption}
            fill
            className="object-cover object-top"
            sizes="(min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <>
            <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-ink/40" />
            <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-ink/40" />
            <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-ink/40" />
            <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-ink/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
              <span className="font-mono-ui text-[0.7rem] tracking-[0.14em] text-ink/50 uppercase">
                Fig. 0{index} — image pending
              </span>
              <span className="font-mono-ui text-[0.65rem] text-ink/35">
                screenshot to be added
              </span>
            </div>
          </>
        )}
      </div>
      <figcaption className="mt-2 font-mono-ui text-[0.7rem] tracking-[0.06em] text-ink/55">
        {caption}
      </figcaption>
    </figure>
  );
}
