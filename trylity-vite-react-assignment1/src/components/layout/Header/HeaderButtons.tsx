const HeaderButtons = () => {
  return (
    <div className="hidden items-center gap-4 md:flex">

      <a
        href="#login"
        className="flex h-10 min-w-[91px] items-center justify-center rounded-[8px] border border-[#dfe1e8] bg-white px-6 text-[14px] font-medium text-[#172033] transition hover:border-[#bdb7f7] hover:bg-[#faf9ff]"
      >
        Login
      </a>

      <a
        href="#get-started"
        className="flex h-10 min-w-[121px] items-center justify-center rounded-[8px] bg-[#5b45e8] px-5 text-[14px] font-semibold text-white shadow-[0_5px_14px_rgba(91,69,232,0.22)] transition hover:bg-[#4d38d5]"
      >
        Get Started
      </a>

    </div>
  );
};

export default HeaderButtons;