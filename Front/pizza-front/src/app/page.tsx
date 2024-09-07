 "use client";
import Image from "next/image";
import styles from "./page.module.scss";
import logo from "/public/logo.svg";
import Link from "next/link";
import { api } from "@/services/api";
import { redirect } from "next/navigation";

export default function Home() {
  
   async function handleLogin(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;  
    const password = formData.get("password") as string;  

    if(email === "" || password === ""){ 
      return;
    }
    try {
      const response = await api.post("/session", {
        email,
        password
      });
    } catch {
      alert("Erro ao logar");
      return;
    };
    redirect("/dashboard");
   }

  return (
    <>
    <div className={styles.containerCenter}>
      <Image src={logo} alt={"logo2"}></Image>

      <section className={styles.login}>
        <form onSubmit={handleLogin}>
          <input
          type="email"
          required
          name="email"
          placeholder="Digite seu email"  
          className={styles.input}
          />
          <input
          type="password" 
          required  
          name="password" 
          placeholder="Digite sua senha"  
          className={styles.input}  
          />
          <button type="submit"
           className={styles.button}
          >Acessar</button>
          <Link href="/signup"> 
          Não possui uma conta? Cadastre-se
          </Link>
        </form>
      </section>
      </div>
    </>
  );
}