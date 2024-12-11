import { useEffect, useRef } from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import styles from "./description.module.css";

function Description() {
  const itemRef1 = useRef(null);
  const itemRef2 = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.1, // Trigger the animation when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible); // Add the 'visible' class when item is in view
        }
      });
    }, options);

    if (itemRef1.current) {
      observer.observe(itemRef1.current);
    }
    if (itemRef2.current) {
      observer.observe(itemRef2.current);
    }

    return () => {
      if (itemRef1.current) {
        observer.unobserve(itemRef1.current);
      }
      if (itemRef2.current) {
        observer.unobserve(itemRef2.current);
      }
    };
  }, []);

  return (
    <section id="description" className={styles.description}>
      <div ref={itemRef1} className={`${styles.item} ${styles.fadeIn}`}>
        <img
          className={styles.icon}
          src={img1}
          alt="Ícone Terceirização"
        />
        <h3>Terceirização de mão de obra</h3>
        <p>
          A SELIMP está sempre pronta para atender suas expectativas, suprindo
          toda e qualquer carência de mão de obra, oferecendo sempre serviços de
          qualidade e com rigorosa fiscalização.
        </p>
      </div>
      <div ref={itemRef2} className={`${styles.item} ${styles.fadeIn}`}>
        <img
          className={styles.icon}
          src={img2}
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
