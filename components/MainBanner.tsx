export default function MainBanner() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* IMAGEM DESKTOP */}
      <img
        src="/assets/Mainbanner.png"
        alt="MATIBOM Banner"
        className="hidden md:block w-full h-full object-cover"
      />

      {/* IMAGEM MOBILE */}
      <img
        src="/assets/Mainbanner-mobile.png"
        alt="MATIBOM Banner Mobile"
        className="block md:hidden w-full h-full object-cover"
      />
    </section>
  );
}
