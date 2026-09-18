const HeroImage = () => {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="absolute -inset-4 rounded-3xl bg-indigo-100/60 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-200/70">
        <img
          src="/hero_sec_img.png"
          alt="TryLity communication dashboard"
          className="h-auto w-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default HeroImage;