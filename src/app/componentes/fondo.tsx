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
        fullScreen:{enable:true, zIndex:-1,},
      background: { color: "#010002ff" },
      particles: {
        number: { value: 120 },
        size: { value: 1 },
        move: { enable:true, speed: 4 },
        color: { value: "#e4d2d2ff" },
    
      },
    }),
    []
  );

return (
    <div>
      <Particles id="particulas" options={options} />
    </div>
  );
}

