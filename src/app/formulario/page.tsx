"use client";
import styles from "../../../styles/Form.module.css";
import { useState } from "react";
import axios from "axios";
import { notify } from "../utils/notificatios";
import { contactSchema } from "../utils/validations";
import * as Yup from "yup";
import { useTranslation } from "next-i18next";

export default function ContactFuction() {
  const { t } = useTranslation("common");

  const [data, setdata] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [alert, setalert] = useState("");
  const [color, setcolor] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await contactSchema.validate(data, { abortEarly: false });

      await axios.post("/api", data);
      notify("Dates send usseful", "success");
    } catch (err: any) {
      if (err instanceof Yup.ValidationError) {
        notify(err.errors[0], "error");
      } else {
        notify("mistake sending the datas", "error");
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <div className={styles.heroText}>
          <h1>{t("titles.hello")}</h1>
        </div>
        <img src="/floting.jpg" alt="MetaMask Fox" className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.heroText}>
          <h1>{t("titles.contact")}</h1>
        </div>
        <form className={styles.form} onSubmit={handleForm}>
          <h2>{t("titles.formTitle")}</h2>
          <input
            type="text"
            name="name"
            placeholder={t("placeholders.name")}
            onChange={handleChange}
            value={data.name}
          />
          <input
            type="email"
            name="email"
            placeholder={t("placeholders.email")}
            required
            onChange={handleChange}
            value={data.email}
          />
          <input
            type="text"
            name="message"
            placeholder={t("placeholders.message")}
            required
            onChange={handleChange}
            value={data.message}
          />
          <button type="submit" className={styles.button}>
            {t("buttons.send")}
          </button>
        </form>
      </div>
    </div>
  );
}
