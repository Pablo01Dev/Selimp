import styles from './home.module.css';
import fundo from "../../assets/fundo.png";
import person from "../../assets/person.png";

function Home() {
  return (
    <section id="home">
      <div className={styles.containerBanner}>
        <img src={fundo} alt="Fundo" className={styles.backgroundImage} />
        <div className={styles.textContent}>
          <h1>Soluções inteligentes para condomínios!</h1>
          <h2>Conheça nossos serviços!</h2>
        </div>
        <img src={person} alt="Pessoa" className={styles.personImage} />
      </div>
    </section> 
  );
}

export default Home;
