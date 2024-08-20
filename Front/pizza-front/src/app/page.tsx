import Image from "next/image";
import styles from "./page.module.scss";
import logo from "/public/logo.svg";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <div className={styles.containerCenter}>
      <Image src={logo} alt={"logo2"}></Image>

      <section className={styles.login}>
        <form>
          <input
          type="email"
          required
          name="email:"
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

          >Acessar</button>
          <Link href="/register"> 
          Não possui uma conta? Cadastre-se
          </Link>
        </form>
      </section>
      </div>
    </>
  );
}
