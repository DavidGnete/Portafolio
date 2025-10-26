"use client";
import Link from "next/link";
import Cards from "../componentes/cartas";
import styles from "../../../styles/About.module.css";

//libreria motion-iconos

import {color, motion, type Variants} from "framer-motion"
import React, { ReactNode } from "react";
import { IoLogoReact,IoLogoHtml5,IoLogoJavascript,IoLogoCss3 } from "react-icons/io5";
import Image from "next/image";
import Background from "../componentes/fondo";


export default function About (){
    return (
    <main>
    <div className={styles.contenedor}>
        <Cards img="/me.jpeg" name="Me" link="">
        
        </Cards>

        <div className={styles.minicontain}>
        <h1 className="font-serif text-4xl font-bold">About Me</h1>

        <p>This is about me, my historie, how i can continue alearning about all my enviarioment and is true
            in this moment is a moment of difficultd, but no is the end, i will study every day all the days
            i promes me to finish this year different to the other year, i will cumple my goal, i wiil do exercise
            meditation, read, and be the best programing, do my better way, and tri to be the best programing, and just
            i can do it spending around of 10 or 12 hour every day, reading, drwaing, and watching tutorial,
            i will be in mod hardcord the rest of this year !!!
        </p>
        </div>
    </div>
    <div className={styles.titulo}>
        <h1 className="text-5xl font-bond">Tecnologies</h1>
    </div>
    <ScrollTriggered />
    </main>
    )
}
function ScrollTriggered() {
    return (
    
        <div className={styles.container}>
            {food.map((item, i) => (
                <Card key={i} i={i} content={item}  />
            ))}
        </div>
    )
}

interface CardProps {
    content: ReactNode
    i: number
}

function Card({ content,i }: CardProps) {

    return (
        <motion.div
            className={`${styles.cardContainer} card-container-${i}`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div className={styles.splash} />
            <motion.div  variants={cardVariants} className={styles.card}>
                {content}
            </motion.div>
        </motion.div>
        
    )
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 40,
        opacity: 5,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const food: [ReactNode][] = [
    [<Image src="/metamask.svg" alt="logo" width={90} height={45}></Image>],
    [<IoLogoReact color="#08e6c1ff" className="bg-black/90 rounded-md"/>],
    [<IoLogoHtml5 color="#e66808ff" className="rounded-md" />],
    [<IoLogoJavascript color="#f6ff00ff" className="rounded-md"/>],
    [<IoLogoCss3 color="#08e6c1ff" className="bg-black/90 rounded-md"/>],

]
