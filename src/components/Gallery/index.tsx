import galeriaHomem from "../../assets/images/galeria-homem.jpg";
import galeriaTenisRoxo from "../../assets/images/galeria-tenis-roxo.jpg";
import galeriaModelo from "../../assets/images/galeria-modelo.jpg";
import galeriaTenisColorido from "../../assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisBrancoPeto from "../../assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "../../assets/images/galeria-tenis-cinza.jpg";
import styles from "./Gallery.module.css";

export const Gallery = () => {
  return (
    <section className="container">
      <ul className={styles.galleryGrid}>
        <li className={`${styles.imageCard} ${styles.highlight}`}>
          <figure>
            <img
              src={galeriaHomem}
              alt="Krypton One - Estilo urbano com atitude"
            />
            <figcaption className={styles.overlay}>
              <div className={styles.textContent}>
                <h2 className={styles.productName}>Krypton One</h2>
                <p className={styles.productDescription}>
                  Estilo urbano com atitude
                </p>
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.button}>Feminino</button>
                <button className={styles.button}>Masculino</button>
              </div>
            </figcaption>
          </figure>
        </li>

        <li className={`${styles.imageCard} ${styles.sneakerPurple}`}>
          <img src={galeriaTenisRoxo} alt="Tênis Roxo" />
        </li>

        <li className={`${styles.imageCard} ${styles.model}`}>
          <img src={galeriaModelo} alt="Modelo Feminina" />
        </li>

        <li className={`${styles.imageCard} ${styles.sneakerColor}`}>
          <img src={galeriaTenisColorido} alt="Tênis Colorido" />
        </li>

        <li className={`${styles.imageCard} ${styles.sneakerWhite}`}>
          <img src={galeriaTenisBrancoPeto} alt="Tênis Branco e Preto" />
        </li>

        <li className={`${styles.imageCard} ${styles.sneakerSilver}`}>
          <img src={galeriaTenisCinza} alt="Tênis Cinza" />
        </li>
      </ul>
    </section>
  );
};
