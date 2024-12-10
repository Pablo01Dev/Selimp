import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import styles from "./description.module.css"

function Description() {
  return (
    <section id="description" className={styles.description}>
      <div className={styles.item}>
        <img
          className={styles.icon}
          src={img1} // Use the imported image
          alt="Ícone Terceirização"
        />
        <h3>Terceirização de mão de obra</h3>
        <p>
          A SELIMP está sempre pronta para atender suas expectativas, suprindo
          toda e qualquer carência de mão de obra, oferecendo sempre serviços de
          qualidade e com rigorosa fiscalização.
        </p>
      </div>
      <div className={styles.item}>
        <img
          className={styles.icon}
          src={img2} // Use the imported image
          alt="Ícone Planejamento"
        />
        <h3>Planejamento e execução</h3>
        <p>
          Abordamos maneiras de implementar estratégias vencedoras que
          maximizam a redução de custos, a eficiência e a melhoria operacional
          do seu condomínio.
        </p>
      </div>
    </section>
  );
}

export default Description;

