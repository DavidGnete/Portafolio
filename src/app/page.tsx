"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import Background from "./componentes/fondo";
import FoxLogo from "./componentes/foxlogo";
import AnimatedText from "./componentes/animacion";
import { SiGithub, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Home() {
  const router = useRouter();
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(true);

    
    setTimeout(() => {
      router.push("/inicio"); 
    }, 1000); // duración de la animación
  };

  return (
    <main className="relative h-screen w-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

    
      <div className="relative z-10 flex flex-col justify-center items-center gap-20 h-screen w-screen">
      
        <AnimatePresence>
          {!expand && (
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              exit={{ scale: 10, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <FoxLogo className=""/>
            </motion.div>
          )}
        </AnimatePresence>

        
        <div className="flex flex-col justify-center items-center gap-10">
          <AnimatedText text="David Agudelo Ocampo" />
          <h1 className="text-6xl font-serif font-bold">Portfolio</h1>

        
          <button
            onClick={handleClick}
            className="px-12 py-2 bg-orange-200 text-black hover:bg-blue-800 transition cursor-pointer rounded-xl"
          >
            Go
          </button>


          <div className="flex gap-9 text-3xl items-center">
            <SiGithub className="transform transition duration-300 hover:scale-125 cursor-pointer" />
            <SiInstagram className="transform transition duration-300 hover:scale-125 cursor-pointer" />
            <SiFacebook className="transform transition duration-300 hover:scale-125 cursor-pointer" />
            <SiLinkedin className="transform transition duration-300 hover:scale-125 cursor-pointer" />
          </div>
        </div>
      </div>
    </main>
  );
}
