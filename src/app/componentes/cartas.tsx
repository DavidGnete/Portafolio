import Link from "next/link";
import styles from "../../../styles/cartas.module.css";
import Images from 'next/image';
import { ReactNode } from "react";

type CardProps ={
    img:string;
    name:string;
    link:string;
    children?:ReactNode;
}

export default function Cards({img, name,link, children}: CardProps){
    return (
        <div className={styles.fotocard}>
            <Link href={link}>
            <img src={img} className={styles.foto}></img>
            </Link>
            <h2 className={styles.titulo}>{name}</h2>
            <p className={styles.text}>{children}</p>
        </div>
    )
}