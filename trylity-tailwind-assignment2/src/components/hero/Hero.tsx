import HeroBadge from "./HeroBadge";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-white via-[#faf9ff] to-white"
    >
      <div className="mx-auto max-w-[1376px] px-6 pt-7 pb-5 lg:px-10 lg:pt-8 lg:pb-5">

        {/* Hero content */}
        <div className="grid items-center gap-7 lg:grid-cols-[0.88fr_1.12fr] lg:gap-7">

          {/* LEFT */}
          <div>
            <HeroBadge />

            <HeroTitle />

            <HeroDescription />

            <HeroButtons />

            {/* Benefits */}
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-medium text-[#596477]">
              
              <span className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-[#5b45df]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8 12 2.5 2.5L16 9" />
                </svg>
                14-Day Free Trial
              </span>

              <span className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-[#5b45df]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8 12 2.5 2.5L16 9" />
                </svg>
                No Credit Card
              </span>

              <span className="flex items-center gap-1.5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-[#5b45df]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8 12 2.5 2.5L16 9" />
                </svg>
                Easy Setup
              </span>

            </div>
          </div>

          {/* RIGHT */}
          <HeroImage />

        </div>

        {/* STATS */}
        <div className="mt-5">
          <HeroStats />
        </div>

      </div>
    </section>
  );
}

export default Hero;