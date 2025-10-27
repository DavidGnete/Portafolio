"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "../../../../styles/sanluis.module.css";
import FoxLogo from "@/app/componentes/foxlogo";
import { projects } from "../projectdata";
import { useTranslation } from "next-i18next";

export default function ProjectPage() {
  const { t } = useTranslation("common"); 
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  if (!slug || !(slug in projects)) {
    return <p>{t("project_not_found")}</p>; // clave que debes agregar a tu JSON
  }

  const project = projects[slug as keyof typeof projects];

  return (
    <main>
      <div className={styles.contenedor}>
        <div>
          <FoxLogo />
          <img src={project.image} alt={slug} className={styles.imagen} />
        </div>

        <div className={styles.minicontain}>
          <h1 className="font-serif text-4xl font-bold">{t(`projects.${slug}.title`)}</h1>
          <p>{t(`projects.${slug}.description`)}</p>

          <div className={styles.botonesContainer}>
            <Link href={project.web} target="_blank" className={styles.boton}>
              {t("go_project")}
            </Link>
            <Link href={project.github} target="_blank" className={styles.boton}>
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

