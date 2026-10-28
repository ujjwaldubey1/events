export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden">
      <div className="relative text-white">
        <img
          src="/images/footer-bg-mumbai.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[center_70%]"
        />
        <div className="absolute inset-0 bg-ink/72" />
        <div className="relative z-10 mx-auto grid max-w-5xl gap-6 px-5 py-8 sm:grid-cols-3 sm:gap-10">
          <div>
            <p className="font-display text-lg italic leading-none">Circuit</p>
            <p className="font-deva mt-1 text-sm text-white/80">मुंबई सर्किट</p>
            <p className="mt-2 max-w-[16rem] text-xs leading-relaxed text-white/70">
              Crypto, blockchain and AI in this city only.
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.18em] text-white/55 uppercase">
              On the page
            </p>
            <ul className="mt-2 space-y-1 text-xs">
              <li>
                <a href="#week" className="ghost-link cursor-pointer hover:text-gold">
                  Events
                </a>
              </li>
              <li>
                <a href="#around" className="ghost-link cursor-pointer hover:text-gold">
                  After the room
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.18em] text-white/55 uppercase">
              The city
            </p>
            <p className="font-deva mt-2 text-xl leading-none text-gold">एक शहर</p>
            <p className="mt-1.5 text-xs leading-relaxed text-white/70">
              Gateway, Sea Link, CST, Haji Ali.
            </p>
          </div>
        </div>
        <p className="relative z-10 px-5 pb-2 text-center text-[10px] tracking-wide text-white/35">
          Marine Drive · Unsplash
        </p>
      </div>
      <div className="overflow-hidden bg-cream leading-none" aria-hidden>
        <img
          src="/images/footer-mumbai-monuments.jpg"
          alt=""
          className="mx-auto block h-auto w-full max-w-md -mt-[25%]"
        />
      </div>
    </footer>
  );
}
