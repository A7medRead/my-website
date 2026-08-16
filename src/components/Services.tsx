import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="bg-console px-6 py-24 sm:py-32 lg:pl-24 lg:pr-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal>
          <span className="eyebrow text-wire">05 — Services</span>
          <h2 className="mt-4 font-display text-display-1 font-semibold text-paper">
            Ways to work together.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div className="group grid gap-3 border-t hairline-dark py-8 last:border-b sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-6">
                <span className="font-mono-ui text-[0.75rem] tracking-[0.1em] text-wire">
                  {service.index}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-paper decoration-signal underline-offset-4 transition-colors group-hover:underline sm:text-xl">
                    {service.title}
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
