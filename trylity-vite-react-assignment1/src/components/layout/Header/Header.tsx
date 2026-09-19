import Logo from "./Logo";
import Navigation from "./Navigation";
import HeaderButtons from "./HeaderButtons";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 h-20 border-b border-[#e8e8ef] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1450px] items-center justify-between px-6 sm:px-8 xl:px-10">

        <Logo />

        <Navigation />

        <HeaderButtons />

        <MobileMenu />

      </div>
    </header>
  );
};

export default Header;