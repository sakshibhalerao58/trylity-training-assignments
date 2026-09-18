interface NavItemProps {
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({
  label,
  href,
  active = false,
  onClick,
}: NavItemProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative px-3 py-2 text-[14px] font-medium transition-colors ${
        active
          ? "text-[#5b45df]"
          : "text-[#172033] hover:text-[#5b45df]"
      }`}
    >
      {label}

      {active && (
        <span className="absolute bottom-[-8px] left-3 right-3 h-[2px] rounded-full bg-[#5b45df]" />
      )}
    </a>
  );
}

export default NavItem;