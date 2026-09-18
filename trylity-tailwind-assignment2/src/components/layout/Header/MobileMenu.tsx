import Navigation from "./Navigation";
import HeaderButtons from "./HeaderButtons";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-lg lg:hidden">
      <Navigation
        mobile
        onNavigate={onClose}
      />

      <div className="mt-4 border-t border-slate-100 pt-4">
        <HeaderButtons onAction={onClose} />
      </div>
    </div>
  );
}

export default MobileMenu;