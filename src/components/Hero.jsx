// src/components/Hero.jsx

import heroVideo from "../assets/hero.mp4";
import heroGif from "../assets/herogif.gif";

export default function Hero() {
  return (
    <section
      data-no-draw
      className="
        sticky
        top-0
        z-0
        h-[1100px]
        min-h-[1100px]
        w-full
        overflow-hidden
        bg-[#f1f1ef]
      ">
      {/* Background Video */}
      {/* <video
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
      /> */}

      {/* GIF Overlay */}
      <img
        src={heroGif}
        alt=""
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          pointer-events-none
        "
      />
    </section>
  );
}
