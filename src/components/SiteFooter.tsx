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
        <div className="relative z-10 mx-auto grid max-w-5xl gap-6 px-5 py-10 sm:grid-cols-3 sm:gap-10">
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
                  Eat & walk
                </a>
              </li>
              <li>
                <a href="#list-event" className="ghost-link cursor-pointer hover:text-gold">
                  Add event
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
        <div className="relative z-10 mx-auto max-w-5xl border-t border-white/15 px-5 py-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] tracking-[0.18em] text-white/55 uppercase">
                Built with
                <span className="mx-1 inline-block text-[12px] leading-none tracking-normal text-flare" aria-hidden>
                  ♥
                </span>
                love
                <span className="font-deva ml-2 normal-case tracking-normal">
                  · प्रेम से
                </span>
              </p>
              <div className="mt-3 flex items-center gap-3">
                <img
                  src="/images/partners/maharashtra-dao.png"
                  alt=""
                  className="h-14 w-14 rounded-full object-cover"
                />
                <p className="text-sm text-white/85">Maharashtra DAO</p>
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.18em] text-white/55 uppercase">
                Partners
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-5">
                <img
                  src="/images/partners/bi.png"
                  alt="Bi"
                  className="h-10 w-10 object-contain"
                />
                <img
                  src="/images/partners/coinscapture.png"
                  alt="CoinsCapture"
                  className="h-7 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
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
