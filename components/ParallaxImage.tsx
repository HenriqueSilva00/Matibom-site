"use client";

import { useEffect, useState } from "react";

export default function ParallaxImage() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.18);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full h-[650px] mt-30 overflow-hidden">
      {/* IMAGEM */}
      <img
        src="/assets/parallax.jpg"
        alt="MATIBOM"
        className="
          absolute
          top-0
          left-0
          w-full
          h-[1100px]
          object-cover
          grayscale
          brightness-90
          contrast-90
          saturate-0
          opacity-90
        "
        style={{
          transform: `translateY(-${offset}px)`,
        }}
      />
    </section>
  );
}
