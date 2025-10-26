"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "../../../../styles/sanluis.module.css";
import FoxLogo from "@/app/componentes/foxlogo";
import { projects } from "../projectdata";

export default function ProjectPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug; // asegurar que sea string

  if (!slug || !(slug in projects)) {
    return <p>Project not found</p>;
  }

  const project = projects[slug as keyof typeof projects]; // forzar el tipo a las keys de projects

  return (
    <main>
      <div className={styles.contenedor}>
        <div>
          <FoxLogo /> 
          <img src={project.image} alt={slug} className={styles.imagen} />
        </div>

        <div className={styles.minicontain}>
          <h1 className="font-serif text-4xl font-bold">{project.title}</h1>
          <p>{project.description}</p>

          <div className={styles.botonesContainer}>
            <Link href={project.web} target="_blank" className={styles.boton}>
              Go Web
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
