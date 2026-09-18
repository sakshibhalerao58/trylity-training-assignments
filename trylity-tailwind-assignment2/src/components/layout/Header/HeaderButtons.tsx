interface HeaderButtonsProps {
  onAction?: () => void;
}

function HeaderButtons({
  onAction,
}: HeaderButtonsProps) {
  return (
    <div className="flex items-center gap-4">
      <a
        href="#login"
        onClick={onAction}
        className="inline-flex h-[40px] min-w-[91px] items-center justify-center rounded-[8px] border border-[#dfe2e9] bg-white px-5 text-[14px] font-medium text-[#172033] transition hover:border-[#bdb4f5] hover:text-[#5b45df]"
      >
        Login
      </a>

      <a
        href="#get-started"
        onClick={onAction}
        className="inline-flex h-[40px] min-w-[121px] items-center justify-center rounded-[8px] bg-[#5b45df] px-5 text-[14px] font-semibold text-white shadow-[0_5px_12px_rgba(91,69,223,0.18)] transition hover:bg-[#4f3bd0]"
      >
        Get Started
      </a>
    </div>
  );
}

export default HeaderButtons;