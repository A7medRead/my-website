import { Reveal } from "@/components/Reveal";
import { CopyButton } from "@/components/CopyButton";
import { contact, identity } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="bg-console px-6 py-24 sm:py-32 lg:pl-24 lg:pr-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal>
          <span className="eyebrow text-wire">06 — Contact</span>
          <h2 className="mt-4 font-display text-display-1 font-semibold text-paper">
            {contact.heading}
          </h2>
          <p className="measure mt-5 text-base leading-relaxed text-paper/65 sm:text-lg">
            {contact.subhead}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <a
            href={`mailto:${identity.email}`}
            className="mt-12 block break-all font-display text-3xl font-semibold text-paper transition-colors hover:text-signal sm:text-5xl"
          >
            {identity.email}
          </a>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-col divide-y hairline-dark border-y hairline-dark sm:max-w-md">
            {contact.channels.map((channel) => (
              <div key={channel.label} className="flex items-center justify-between gap-4 py-4">
                <span className="font-mono-ui text-[0.72rem] tracking-[0.1em] text-wire uppercase">
                  {channel.label}
                </span>
                <div className="flex items-center gap-4">
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    className="font-mono-ui text-[0.85rem] text-paper/80 transition-colors hover:text-signal"
                  >
                    {channel.value}
                  </a>
                  {channel.label === "Email" && <CopyButton value={identity.email} />}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
