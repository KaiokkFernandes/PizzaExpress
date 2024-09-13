"use client"; // Adicione esta linha no topo do arquivo

import Image from "next/image";
import styles from "../page.module.scss";        
import logo from "/public/logo.svg";
import Link from "next/link";
import {api} from '@/services/api';
import { Redirect } from "next";
import { redirect } from "next/dist/server/api-utils";

export default function Signup() {
    
    async function handleRegister(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name") as string; 
        const email = formData.get("email") as string;  
        const password = formData.get("password") as string; 
        
        if(name === "" || email === "" || password === ""){
            alert("Preencha todos os campos");
            return; 
        }   
        try {
            await api.post("/users", {
                name,
                email,
                password
            });
        } catch {
            alert("Erro ao cadastrar usuário");
        }

    }

    return (
        <>
        <div className={styles.containerCenter}>
          <Image src={logo} alt={"logo2"}></Image>
    
          <section className={styles.login}>
            <h1>Pagina de cadastro</h1>
            <form onSubmit={handleRegister}>
            <input
              
              type="text"
              required
              name="name"
              placeholder="Digite seu nome"  
              className={styles.input}
              />
             
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
              <Link href="/"> 
               já possui uma conta? Acesse 
              </Link>
            </form>
          </section>
          </div>
        </>
      );
}
