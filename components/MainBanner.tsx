export default function MainBanner() {
  return (
    <section className="relative w-full h-screen">
      {/* IMAGEM FULLSCREEN */}
      <img
        src="/assets/Mainbanner.png"
        alt="MATIBOM Banner"
        className="w-full h-full object-cover"
      />

      {/* overlay escuro suave */}
      <div className="absolute inset-0" />
    </section>
  );
}
