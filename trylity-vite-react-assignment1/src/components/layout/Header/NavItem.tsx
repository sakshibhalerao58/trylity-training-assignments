interface NavItemProps {
  label: string;
  href: string;
  active?: boolean;
}

const NavItem = ({
  label,
  href,
  active = false,
}: NavItemProps) => {
  return (
    <a
      href={href}
      className={`relative py-7 text-[14px] font-medium transition-colors ${
        active
          ? "text-[#5b45e8]"
          : "text-[#1f2937] hover:text-[#5b45e8]"
      }`}
    >
      {label}

      {active && (
        <span className="absolute bottom-[15px] left-0 right-0 mx-auto h-[2px] w-full rounded-full bg-[#5b45e8]" />
      )}
    </a>
  );
};

export default NavItem;