"use client";
import Link from "next/link";
import Cards from "../componentes/cartas";
import styles from "../../../styles/project.module.css";
import { useTranslation } from "next-i18next";

export default function About() {
    const { t } = useTranslation("common");

    return (
        <main>
            <div className={styles.contenedor}>
                <Cards img="/sanluisP.jpg" name="" link="/project/sanluis">
                    <Link href="/project/sanluis">
                        <button className={styles.button}>{t("go_project")}</button>
                    </Link>
                </Cards>

                <div className={styles.minicontain}>
                    <h1 className="font-serif text-4xl font-bold">{t("web3_title")}</h1>
                    <p>{t("web3_description")}</p>
                </div>
            </div>

            <div className={styles.contenedor}>
                <Cards img="/chat.png" name="" link="">
                    <Link href="/project/chat">
                        <button className={styles.button}>{t("go_project")}</button>
                    </Link>
                </Cards>

                <div className={styles.minicontain}>
                    <h1 className="font-serif text-4xl font-bold">{t("chat_title")}</h1>
                    <p>{t("chat_description")}</p>
                </div>
            </div>
        </main>
    );
}
