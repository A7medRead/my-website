import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="bg-console px-6 py-24 sm:py-32 lg:pl-24 lg:pr-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal>
          <span className="section-label eyebrow text-wire">LOG 05 — Services</span>
          <h2 className="mt-4 font-display text-display-1 font-semibold text-paper">
            Ways to work together.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div className="group grid gap-3 border-t hairline-dark py-7 transition-colors hover:bg-console-2/35 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-6 sm:py-8">
                <span className="flex h-9 w-12 items-center justify-center rounded-lg border border-paper/10 bg-console-2/60 font-mono-ui text-[0.68rem] tracking-[0.1em] text-wire transition-colors group-hover:border-signal/35 group-hover:text-signal">
                  {service.index}
                </span>
                <div>
                  <h3 className="group/title inline-flex font-display text-lg font-semibold text-paper transition-colors group-hover:text-signal sm:text-xl">
                    <span className="relative inline-block pb-1">
                      {service.title}
                      <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-signal transition-transform duration-300 ease-out group-hover/title:scale-x-100 motion-reduce:transition-none" />
                    </span>
                  </h3>
                  <p className="measure mt-3 text-[0.95rem] leading-relaxed text-paper/70">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
