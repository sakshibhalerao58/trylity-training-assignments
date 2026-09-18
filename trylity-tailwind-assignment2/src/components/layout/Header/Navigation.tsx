import NavItem from "./NavItem";

const Navigation = () => {
  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigationItems.map((item) => (
        <NavItem key={item.label} label={item.label} href={item.href} />
      ))}
    </nav>
  );
};

export default Navigation;