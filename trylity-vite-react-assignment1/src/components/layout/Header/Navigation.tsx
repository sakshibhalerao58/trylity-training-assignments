import NavItem from "./NavItem";

const navigation = [
  {
    label: "Home",
    href: "#home",
    active: true,
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

const Navigation = () => {
  return (
    <nav className="hidden items-center gap-9 lg:flex">
      {navigation.map((item) => (
        <NavItem
          key={item.label}
          {...item}
        />
      ))}
    </nav>
  );
};

export default Navigation;