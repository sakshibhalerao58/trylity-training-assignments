import NavItem from "./NavItem";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) {
    return null;
  }

  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-lg lg:hidden">
      <nav className="flex flex-col gap-5">
        {navigationItems.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            href={item.href}
            onClick={onClose}
          />
        ))}

        <div className="flex flex-col gap-3 border-t border-slate-100 pt-4">
          <a
            href="#login"
            onClick={onClose}
            className="rounded-lg px-4 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Login
          </a>

          <a
            href="#get-started"
            onClick={onClose}
            className="rounded-lg bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Get Started
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;