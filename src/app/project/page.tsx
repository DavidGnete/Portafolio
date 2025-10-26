"use client";
import Link from "next/link";
import Cards from "../componentes/cartas";
import styles from "../../../styles/project.module.css";





export default function About (){
    return (
    <main>
    <div className={styles.contenedor}>
        <Cards img="/sanluisP.jpg" name="" link="/project/sanluis">
        <Link href="/project/sanluis">
        <button className={styles.button}>Go project</button>
        </Link>
        
        </Cards>

        <div className={styles.minicontain}>
        <h1 className="font-serif text-4xl font-bold">Web3 Experience</h1>

        <p>Discover San Luis like never before with our Web3-powered tourism platform.
            Enjoy seamless digital payments, blockchain security, and wallet integration while exploring top destinations.
            A modern way to plan, book, and experience travel!
        </p>
        </div>
    </div>

    <div className={styles.contenedor}>
        <Cards img="/chat.png" name="" link="">
        <Link href="/project/chat">
        <button className={styles.button}>Go project</button>
        </Link>
        
        </Cards>

        <div className={styles.minicontain}>
        <h1 className="font-serif text-4xl font-bold">Real-Time Chat Live</h1>

        <p>Join our live chat project built with Next.js and backend tech
            chat in real time with others on the same server!
        </p>
        </div>
    </div>
    </main>
    )
}
