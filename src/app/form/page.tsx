"use client";
import { setServers } from "dns";
import styles from "../../../styles/Form.module.css";
import {useState} from "react";
import axios from "axios";


export default function Datos (){
    const [form, setform] = useState({nombre:"", email: "", mensaje:""}); // aca empiezo el form desde 0 osea con los espacios vacios
    const [status, setstatus] = useState(""); // aca defino mis campos estaran vacios

    const handleChange= (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setform({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res= await axios.post("/api", form);
            if (res.data.ok) {
                setstatus("enviado correctamente");
                setform({nombre:"", email:"",mensaje:""});
            }
        }catch(err){
            setstatus("error al enviar en post")
            console.error(err);
        }  
    };


return (
    <form className={styles.form}>
       <input type="text" placeholder="nombre"></input>
       <input type="email" placeholder="correo" required></input>
       <input type="text" placeholder="mensaje" required></input>

    </form>
)
}