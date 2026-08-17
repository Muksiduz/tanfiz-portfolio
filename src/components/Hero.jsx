// src/components/Hero.jsx

import heroVideo from "../assets/hero.mp4";

export default function Hero() {
  return (
    <section
      className="
        sticky
        top-0
        z-0
        h-[900px]
        min-h-[900px]
        w-full
        overflow-hidden
        bg-[#f1f1ef]
      ">
      <video
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    </section>
  );
}
