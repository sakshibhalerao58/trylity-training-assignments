const HeaderButtons = () => {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <a
        href="#login"
        className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
      >
        Login
      </a>

      <a
        href="#get-started"
        className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700 hover:shadow-lg"
      >
        Get Started
      </a>
    </div>
  );
};

export default HeaderButtons;