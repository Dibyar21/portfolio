import { useEffect, useRef } from "react";

function MouseTracker() {
  const ringRef = useRef(null);
  const ringInnerRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Respect reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ring = ringRef.current;
    const ringInner = ringInnerRef.current;
    const glow = glowRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let glowX = mouseX;
    let glowY = mouseY;

    let animationFrame;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e) => {
      const interactiveElement = e.target.closest(
        "a, button, [role='button'], input, textarea, select"
      );

      if (interactiveElement) {
        ringInner.classList.add("scale-150");
        ringInner.classList.add("border-cyan-200");
        ringInner.classList.add("bg-cyan-400/20");

        glow.classList.add("scale-125");
        glow.classList.add("bg-cyan-400/15");
      }
    };

    const handleMouseOut = (e) => {
      const interactiveElement = e.target.closest(
        "a, button, [role='button'], input, textarea, select"
      );

      if (
        interactiveElement &&
        (!e.relatedTarget ||
          !interactiveElement.contains(e.relatedTarget))
      ) {
        ringInner.classList.remove("scale-150");
        ringInner.classList.remove("border-cyan-200");
        ringInner.classList.remove("bg-cyan-400/20");

        glow.classList.remove("scale-125");
        glow.classList.remove("bg-cyan-400/15");
      }
    };

    const animate = () => {
      // Main ring follows mouse
      ringX += (mouseX - ringX) * 0.25;
      ringY += (mouseY - ringY) * 0.25;

      // Glow follows slightly slower
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;

      ring.style.transform = `translate3d(
        ${ringX - 14}px,
        ${ringY - 14}px,
        0
      )`;

      glow.style.transform = `translate3d(
        ${glowX - 60}px,
        ${glowY - 60}px,
        0
      )`;

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Large soft glow */}
      <div
        ref={glowRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9998]
          h-[120px]
          w-[120px]
          rounded-full
          bg-cyan-400/10
          blur-2xl
          transition-all
          duration-300
        "
        aria-hidden="true"
      />

      {/* Cursor position wrapper */}
      <div
        ref={ringRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          h-7
          w-7
        "
        aria-hidden="true"
      >
        {/* Cursor ring */}
        <div
          ref={ringInnerRef}
          className="
            relative
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            border-2
            border-cyan-300
            bg-cyan-400/10
            shadow-[0_0_15px_rgba(34,211,238,0.8)]
            transition-all
            duration-300
          "
        >
          {/* Inner dot */}
          <div
            className="
              h-2
              w-2
              rounded-full
              bg-cyan-300
              shadow-[0_0_10px_rgba(34,211,238,1)]
            "
          />
        </div>
      </div>
    </>
  );
}

export default MouseTracker;