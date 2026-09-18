function HeroBadge() {
  return (
    <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#f3f0ff] px-3.5 py-1.5 text-[12px] font-medium text-[#715bd8]">
      <svg
        viewBox="0 0 24 24"
        className="h-[14px] w-[14px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" />
      </svg>

      <span>Smart Communication Platform</span>
    </div>
  );
}

export default HeroBadge;