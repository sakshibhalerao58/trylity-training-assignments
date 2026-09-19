import HeroBadge from "./HeroBadge";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";
import HeroTrust from "./HeroTrust";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[64%] overflow-hidden bg-[#fdfdff]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-[#f0ecff] blur-[110px]" />

      <div className="relative mx-auto flex h-full max-w-[1450px] flex-col px-8 lg:px-12 xl:px-16">

        {/* HERO CONTENT */}
        <div className="grid min-h-0 flex-1 grid-cols-[0.95fr_1.05fr] items-center gap-10 xl:gap-16">

          {/* LEFT */}
          <div className="flex flex-col justify-center">

            <HeroBadge />

            <div className="mt-5">
              <HeroTitle />
            </div>

            <div className="mt-4">
              <HeroDescription />
            </div>

            <div className="mt-6">
              <HeroButtons />
            </div>

            <div className="mt-5">
              <HeroTrust />
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex h-full min-h-0 items-center justify-center">

            <div className="relative flex w-full items-center justify-center">

              {/* Image glow */}
              <div className="absolute -inset-6 rounded-[40px] bg-[#eeeaff] opacity-60 blur-3xl" />

              <img
                src="/hero_sec_img.png"
                alt="TryLity communication platform"
                className="relative z-10 block max-h-[320px] w-full max-w-[610px] object-contain"
              />

            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="shrink-0 pb-5 pt-3">
          <HeroStats />
        </div>

      </div>
    </section>
  );
};

export default Hero;