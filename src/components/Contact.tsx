import { Reveal } from "@/components/Reveal";
import { CopyButton } from "@/components/CopyButton";
import { ContactForm } from "@/components/ContactForm";
import { contact, identity } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="bg-console px-6 py-24 sm:py-32 lg:pl-24 lg:pr-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal>
          <span className="section-label eyebrow text-wire">LOG 07 — Contact</span>
          <div className="mt-5 grid gap-6 border-b hairline-dark pb-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.65fr)] lg:items-end lg:gap-12">
            <h2 className="max-w-[15ch] font-display text-[clamp(2.6rem,6vw,5.6rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-paper">
              {contact.heading}
            </h2>
            <div className="lg:border-l lg:border-signal/50 lg:pl-6">
              <p className="font-mono-ui text-[0.65rem] tracking-[0.14em] text-signal uppercase">Have a system to improve?</p>
              <p className="mt-3 max-w-[42ch] text-base leading-relaxed text-paper/65 sm:text-lg">
                {contact.subhead}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
          <Reveal delay={0.08}>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contact.channels.map((channel) => (
                <article
                  key={channel.label}
                  className={`editorial-card group min-h-24 items-center gap-x-4 gap-y-2 rounded-2xl border hairline-dark bg-console-2/35 p-4 transition-colors duration-200 hover:border-signal/40 hover:bg-console-2/70 sm:min-h-28 sm:p-5 ${channel.label === "Email" ? "grid grid-cols-[3rem_minmax(0,1fr)] sm:col-span-2 sm:flex sm:flex-wrap lg:col-span-1" : "flex"}`}
                >
                  <span aria-hidden="true" className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-paper/10 bg-console font-mono-ui text-sm text-signal transition-colors group-hover:border-signal/40 ${channel.label === "Email" ? "row-span-2 sm:row-span-1" : ""}`}>
                    {channel.label === "Email" ? "@" : channel.label === "LinkedIn" ? "in" : "↗"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="font-mono-ui text-[0.65rem] tracking-[0.14em] text-wire uppercase">
                      {channel.label}
                    </span>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                    className={`mt-1 block font-mono-ui text-xs text-paper/85 transition-colors hover:text-signal sm:text-sm lg:text-base ${channel.label === "Email" ? "break-all sm:min-w-0 sm:flex-1 sm:break-normal" : "break-all"}`}
                    >
                      {channel.value}
                    </a>
                  </div>
                  {channel.label === "Email" && <div className="col-start-2 justify-self-end sm:ml-auto"><CopyButton value={identity.email} /></div>}
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="rounded-[1.5rem] border hairline-dark bg-console-2/35 p-5 sm:p-7 lg:p-8">
              <div className="flex items-center justify-between gap-4 border-b hairline-dark pb-4">
                <span className="font-mono-ui text-[0.68rem] tracking-[0.12em] text-paper/75 uppercase">Message terminal</span>
                <span className="font-mono-ui text-[0.58rem] tracking-[0.1em] text-wire uppercase">Form 01 <span aria-hidden="true" className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[#9bd4a5]" /></span>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
