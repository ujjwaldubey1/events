import { AroundTown } from "@/components/AroundTown";
import { DayList } from "@/components/DayList";
import { HeroActions } from "@/components/HeroActions";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-full bg-cream text-ink">
      <section className="relative overflow-hidden text-white">
        <img
          src="/images/hero-mumbai-monuments.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom"
        />
        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5">
          <p className="font-display text-2xl italic">
            Circuit
            <span className="font-deva ml-2 text-lg not-italic opacity-80">सर्किट</span>
          </p>
          <nav className="flex items-center gap-5 text-sm">
            <a href="#week" className="ghost-link cursor-pointer opacity-90 hover:opacity-100">
              Events
            </a>
            <a href="#around" className="ghost-link cursor-pointer opacity-90 hover:opacity-100">
              After
            </a>
          </nav>
        </header>

        <div
          id="landmarks"
          className="relative z-10 mx-auto max-w-6xl px-5 pb-40 pt-6 sm:pb-48 sm:pt-8 md:pb-56"
        >
          <p
            className="rise text-xs tracking-[0.28em] text-white/80 uppercase"
            style={{ animationDelay: "0.05s" }}
          >
            1 to 8 November 2026 · Mumbai
            <span className="font-deva ml-2 normal-case tracking-normal">
              · १–८ नोव्हेंबर
            </span>
          </p>
          <h1
            className="rise mt-5 font-display text-6xl leading-[0.9] tracking-tight sm:text-8xl"
            style={{ animationDelay: "0.12s" }}
          >
            Mumbai
            <br />
            <span className="italic">Circuit</span>
          </h1>
          <p
            className="font-deva rise mt-3 text-3xl text-white/85 sm:text-4xl"
            style={{ animationDelay: "0.18s" }}
          >
            मुंबई
          </p>
          <p
            className="rise mt-6 max-w-lg text-lg leading-relaxed text-white/90"
            style={{ animationDelay: "0.24s" }}
          >
            Every crypto, blockchain and AI room in the city this November:
            India Blockchain Week, Devcon 8 and everything around them. Mumbai
            only.
          </p>
          <div className="rise" style={{ animationDelay: "0.32s" }}>
            <HeroActions />
          </div>
        </div>
      </section>

      <DayList />
      <AroundTown />
      <SiteFooter />
    </div>
  );
}
