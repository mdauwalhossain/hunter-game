import styles from './Banner.module.css'

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className="container">
                <div className={styles.content}>

                    <div className={styles.title}>
                        <span>QUER TER</span>
                        <strong>SUA ARMA</strong>
                        <span>DE FORMA LEGALIZADA</span>
                        <span>E <div>NÃO SABE COMO</div>?</span>
                    </div>

                    <button className={styles.btn} title="Garanta seu Certificado">
                        Garanta seu Certificado
                    </button>

                    <span className={styles.description}>
                        Deixe a burocracia com a gente!
                    </span>

                </div>
            </div>
        </section>
    )
}
