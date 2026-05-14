import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-5 flex justify-center">
      <div className="w-full max-w-none px-0 md:px-6 mt-0 flex justify-center">
        <Image
          src="/assets/mainSlogan.png"
          alt="MATIBOM Slogan"
          width={1800}
          height={900}
          priority
          className="
            w-full
            max-w-[1400px]
            h-auto
            object-contain
          "
        />
      </div>
    </section>
  );
}
