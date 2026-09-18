function HeroButtons() {
  return (
    <div className="mt-6 flex flex-wrap gap-3">

      <a
        href="#get-started"
        className="inline-flex h-[48px] items-center justify-center gap-3 rounded-[7px] bg-[#5844df] px-6 text-[13px] font-semibold text-white shadow-[0_8px_20px_rgba(88,68,223,0.18)] transition hover:bg-[#4e3bd1]"
      >
        Get Started Free

        <span className="text-[18px]">
          →
        </span>
      </a>

      <a
        href="#features"
        className="inline-flex h-[48px] items-center justify-center gap-3 rounded-[7px] border border-[#dce0e8] bg-white px-6 text-[13px] font-semibold text-[#172033] shadow-sm transition hover:border-[#bdb4f5] hover:text-[#5b45df]"
      >
        See Features

        <svg
          viewBox="0 0 24 24"
          className="h-[14px] w-[14px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect
            x="4"
            y="4"
            width="6"
            height="6"
            rx="1"
          />

          <rect
            x="14"
            y="4"
            width="6"
            height="6"
            rx="1"
          />

          <rect
            x="4"
            y="14"
            width="6"
            height="6"
            rx="1"
          />

          <rect
            x="14"
            y="14"
            width="6"
            height="6"
            rx="1"
          />
        </svg>

      </a>

    </div>
  );
}

export default HeroButtons;