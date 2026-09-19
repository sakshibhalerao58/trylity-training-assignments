import {
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e2e2ea] text-[#273044]"
        aria-label="Toggle menu"
      >
        {open ? (
          <X size={20} />
        ) : (
          <Menu size={20} />
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-12 w-52 rounded-xl border border-[#e8e8ef] bg-white p-3 shadow-xl">

          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-3 text-sm font-medium text-[#273044] hover:bg-[#f7f5ff]"
          >
            Home
          </a>

          <a
            href="#features"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-3 text-sm font-medium text-[#273044] hover:bg-[#f7f5ff]"
          >
            Features
          </a>

          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-3 text-sm font-medium text-[#273044] hover:bg-[#f7f5ff]"
          >
            Pricing
          </a>

          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-3 text-sm font-medium text-[#273044] hover:bg-[#f7f5ff]"
          >
            About Us
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block rounded-lg px-4 py-3 text-sm font-medium text-[#273044] hover:bg-[#f7f5ff]"
          >
            Contact
          </a>

          <div className="mt-2 border-t border-[#eeeeF4] pt-2">

            <a
              href="#login"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-[#273044] hover:bg-[#f7f5ff]"
            >
              Login
            </a>

            <a
              href="#get-started"
              className="mt-1 block rounded-lg bg-[#5b45e8] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Get Started
            </a>

          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;