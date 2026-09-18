function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-2.5"
      aria-label="TryLity"
    >
      {/* Logo icon */}
      <div className="relative h-8 w-8">
        <div className="absolute left-[1px] top-[7px] h-[18px] w-[18px] rounded-[5px] bg-[#5b45df]" />

        <div className="absolute right-0 top-0 h-[18px] w-[18px] rounded-[5px] bg-[#8c7ae8]" />

        <div className="absolute left-[4px] top-[11px] h-[10px] w-[4px] rounded-full bg-[#5b45df]" />
      </div>

      <span className="text-[21px] font-bold tracking-[-0.03em] text-[#111827]">
        TryLity
      </span>
    </a>
  );
}

export default Logo;