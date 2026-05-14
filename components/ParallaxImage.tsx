"use client";

import { useEffect, useState } from "react";

export default function ParallaxImage() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setOffset(window.scrollY * (isMobile ? 0.08 : 0.18));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-cover
        bg-no-repeat
        mt-25
        h-[420px]
        md:h-[650px]
        grayscale-0 md:grayscale
      "
      style={{
        backgroundImage: "url('/assets/parallax.jpg')",
        backgroundSize: "cover",
        backgroundPosition: isMobile ? "center 40%" : "center 80%",
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
}
