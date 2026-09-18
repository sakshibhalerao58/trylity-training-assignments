interface NavItemProps {
  label: string;
  href: string;
  onClick?: () => void;
}

const NavItem = ({ label, href, onClick }: NavItemProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-indigo-600"
    >
      {label}
    </a>
  );
};

export default NavItem;