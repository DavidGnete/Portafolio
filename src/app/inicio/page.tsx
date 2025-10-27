"use client";
import styles from "../../../styles/inicio.module.css"
import FoxLogo from "../componentes/foxlogo"
import Background from "../componentes/fondo";
import Cards from "../componentes/cartas";


export default function Casita () {
    return (
        <main>
        <div>
            <Background />
            <h1 className={styles.titulo}>welcome</h1>
        </div>

    <div className={styles.contenedor}>
        <Cards img="/avatar.jpg" name="about me" link="/about">
            Conoce acerca de mi 
        </Cards>
        <Cards img="/proyectos.jpg" name="projects" link="/project">
            Mis proyectos
        </Cards>
        <Cards img="/email.jpg" name="Contact Me" link="/formulario">
            Contactame
        </Cards>

        < FoxLogo className={styles.zorrito}/>
        </div>
    </main>

    )

}