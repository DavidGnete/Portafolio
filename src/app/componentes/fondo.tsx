"use client";
import { useEffect, useMemo } from "react";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Background() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },
      background: { color: "#0b0b0b" },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" as const },
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        number: { value: 80, density: { enable: true, area: 800 } },
        color: { value: ["#ff9f43", "#ffaa33", "#ffffff"] },
        shape: { type: "circle" },
        opacity: {
          value: 0.8,
          random: true,
          animation: { enable: true, speed: 1, minimumValue: 0.4, sync: false },
        },
        size: {
          value: { min: 1, max: 3 },
          animation: { enable: true, speed: 2, minimumValue: 0.5, sync: false },
        },
        links: {
          enable: true,
          color: "#ff9f43",
          distance: 120,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none" as const,
          outModes: { default: "out" as const }, // ← corregido
        },
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id="particulas" options={options} />;
}
