
import { useEffect, useRef, useState } from "react";

function MouseTracker() {
  const [enabled, setEnabled] = useState(false);

  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(any-pointer: fine)");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateEnabled = () => {
      setEnabled(finePointer.matches && !reducedMotion.matches);
    };

    updateEnabled();

    finePointer.addEventListener("change", updateEnabled);
    reducedMotion.addEventListener("change", updateEnabled);

    return () => {
      finePointer.removeEventListener("change", updateEnabled);
      reducedMotion.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    const glow = glowRef.current;

    if (!ring || !dot || !glow) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let glowX = -100;
    let glowY = -100;
    let animationFrame;
    let visible = false;

    const interactiveSelector =
      "a, button, [role='button'], input, textarea, select, label";

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (!visible) {
        visible = true;
        ring.style.opacity = "1";
        dot.style.opacity = "1";
        glow.style.opacity = "1";

        ringX = mouseX;
        ringY = mouseY;
        glowX = mouseX;
        glowY = mouseY;
      }

      const target =
        event.target instanceof Element
          ? event.target.closest(interactiveSelector)
          : null;

      ring.classList.toggle("cursor-hover", Boolean(target));
      glow.classList.toggle("glow-hover", Boolean(target));
    };

    const handleMouseLeave = () => {
      visible = false;
      ring.style.opacity = "0";
      dot.style.opacity = "0";
      glow.style.opacity = "0";
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.28;
      ringY += (mouseY - ringY) * 0.28;

      glowX += (mouseX - glowX) * 0.1;
      glowY += (mouseY - glowY) * 0.1;

      ring.style.transform =
        `translate3d(${ringX - 17}px, ${ringY - 17}px, 0)`;

      dot.style.transform =
        `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;

      glow.style.transform =
        `translate3d(${glowX - 45}px, ${glowY - 45}px, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });
    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave
    );
    document.documentElement.addEventListener(
      "mouseenter",
      () => {
        visible = false;
      }
    );

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      cancelAnimationFrame(animationFrame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <style>{`
        .cursor-hover {
          width: 42px !important;
          height: 42px !important;
          margin: -4px;
          border-color: #a5f3fc !important;
          background: rgba(34, 211, 238, 0.12);
          box-shadow: 0 0 24px rgba(34, 211, 238, 0.65);
        }

        .glow-hover {
          opacity: 0.9 !important;
        }
      `}</style>

      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-[90px] w-[90px] rounded-full bg-cyan-400/10 opacity-0 blur-2xl transition-opacity duration-200"
      />

      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-[34px] w-[34px] rounded-full border border-cyan-300/80 bg-cyan-400/[0.04] opacity-0 shadow-[0_0_18px_rgba(34,211,238,0.5)] transition-[width,height,background-color,border-color] duration-200"
      />

      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-[6px] w-[6px] rounded-full bg-cyan-200 opacity-0 shadow-[0_0_12px_rgba(34,211,238,1)]"
      />
    </>
  );
}

export default MouseTracker;
