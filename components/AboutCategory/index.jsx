import Image from "next/image";
import styles from "./AboutCategory.module.css";

export default function AboutCategory({ icon, title, text }) {
    return (
        <section className={styles.about}>
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.icon}>
                        <Image
                            src={`/svgs/${icon}.svg`}
                            alt={title}
                            height={260}
                            width={260}
                            priority={true}
                        />

                        <div className={styles.circle}>
                            <strong>10</strong>
                            <span>anos</span>
                            <small>de validade*</small>
                        </div>
                    </div>

                    <h1 className={styles.title}>{title}</h1>

                    <h2 className={styles.text}>{text}</h2>

                    <p className={styles.subtext}>
                        *Validade do CR é de 10 anos para os registros
                        concedidos ou revalidados após a data da publicação do
                        Decreto 9.846/19
                    </p>
                </div>
            </div>
        </section>
    );
}
