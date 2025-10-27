"use client";
import styles from "../../../styles/About.module.css";
import { useTranslation, UseTranslation } from "next-i18next";

//libreria motion-iconos

import {color, motion, type Variants} from "framer-motion"
import React, { ReactNode } from "react";
import { IoLogoReact,IoLogoHtml5,IoLogoJavascript,IoLogoCss3 } from "react-icons/io5";
import Image from "next/image";



export default function About (){
const { t } = useTranslation("common");

    return (
    <main>
    <div className={styles.contenedor}>
        <div className={styles.imageCard}>
        <img src="/me.jpeg" alt="Me" className={styles.image}/>
        <p className={styles.devTag}>{t("developer_tag")}</p>
</div>

        

        <div className={styles.minicontain}>
        <h1 className="font-serif text-4xl font-bold">{t("about_title")}</h1>

    <p>{t("about_description")}</p>
        </div>
    </div>
    <div className={styles.titulo}>
        <h1>{t("technologies_title")}</h1>
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
