import { ArrowRight, Grid2X2 } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="flex items-center gap-3">

      <a
        href="#get-started"
        className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] bg-[#5b45e8] px-5 text-[13px] font-semibold text-white shadow-[0_6px_16px_rgba(91,69,232,0.22)] transition hover:bg-[#4d38d5]"
      >
        Get Started Free
        <ArrowRight size={16} />
      </a>

      <a
        href="#features"
        className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] border border-[#dedee8] bg-white px-5 text-[13px] font-semibold text-[#263044] transition hover:border-[#c8c1f4] hover:bg-[#faf9ff]"
      >
        <Grid2X2 size={15} />
        See Features
      </a>

    </div>
  );
};

export default HeroButtons;