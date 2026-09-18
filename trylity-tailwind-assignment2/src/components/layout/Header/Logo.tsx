interface LogoProps {
  onClick?: () => void;
}

const Logo = ({ onClick }: LogoProps) => {
  return (
    <a
      href="#home"
      onClick={onClick}
      className="flex items-center gap-2"
      aria-label="TryLity Home"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white shadow-md shadow-indigo-200">
        T
      </div>

      <span className="text-xl font-bold tracking-tight text-slate-900">
        Try<span className="text-indigo-600">Lity</span>
      </span>
    </a>
  );
};

export default Logo;