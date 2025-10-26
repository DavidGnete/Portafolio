"use client";
import styles from "../../../styles/Form.module.css";
import {useState} from "react";
import axios from "axios";
import { notify } from "../utils/notificatios";




export default function ContactFuction (){
    const [data, setdata]=useState({
    name:"",
    email:"",
    number:"",
    message:"",
    })
    const [alert, setalert]=useState("");
    const [color, setcolor]=useState("");

const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
    const {name, value} = e.target;
    setdata({
        ...data, [name]: value,
    });
};


const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    await axios.post("/api", data);
    notify("Dates send usseful","success");
    } catch (err:any) {
    notify("mistake sending the datas","error")
      };
    }


return (
    <div className={styles.content}>
    <div className={styles.title}>
        <h1>Contact me</h1>
    </div>
    <form  className={styles.form} onSubmit={handleForm}>
        <h2>Contact me always that you can</h2>
       <input type="text" name="name"     placeholder="Enter you name" onChange={handleChange} value={data.name}></input>
       <input type="email" name="email"   placeholder="Enter you email" required onChange={handleChange} value={data.email}></input>
       <input type="text"  name="message" placeholder="Enter you message" required onChange={handleChange} value={data.message}></input>
       <button type="submit" className={styles.button} >Send</button>
    </form>
    </div>
)
}
