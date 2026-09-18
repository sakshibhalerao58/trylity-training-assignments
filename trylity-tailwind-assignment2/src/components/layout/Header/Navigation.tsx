import NavItem from "./NavItem";

interface NavigationProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

const navigationItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "About Us",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function Navigation({
  mobile = false,
  onNavigate,
}: NavigationProps) {
  return (
    <nav
      aria-label={mobile ? "Mobile navigation" : "Primary navigation"}
      className={
        mobile
          ? "flex flex-col gap-1"
          : "hidden items-center gap-5 lg:flex"
      }
    >
      {navigationItems.map((item, index) => (
        <NavItem
          key={item.label}
          label={item.label}
          href={item.href}
          active={index === 0}
          onClick={onNavigate}
        />
      ))}
    </nav>
  );
}

export default Navigation;