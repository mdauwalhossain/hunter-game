import Link from 'next/link'
import styles from './About.module.css'

export default function About() {
    return (
        <section className={styles.about}>
            <div className="container">
                <div className={styles.container}>
                    <h3 className={styles.title}>
                        O que é o Certificado de Registro?
                    </h3>

                    <p className={styles.text}>
                        O Certificado de Registro(CR) é um documento obtido a partir de um cadastro junto ao Exército Brasileiro. Este certificado dá o direito ao cidadão de exercer atividades de caça, tiro desportivo e coleção de armas, ou seja, o certificado é <b>emitido nas categorias Caçador, Atirador e/ou Colecionador (CAC).</b>
                    </p>

                    <div className={styles.cac}>
                        <div className={styles.cr}>
                            <img
                                src="/svgs/cr.svg"
                                alt="Certificado de Registro"
                            />
                        </div>

                        <div className={styles.categories}>
                            <Link href="/cacador">
                                <div className={styles.category} title="Caçador">
                                    <img
                                        src="/svgs/cacador.svg"
                                        alt="Caçador"
                                    />
                                    <h4 className={styles.categoryTitle}>Caçador</h4>
                                </div>
                            </Link>

                            <Link href="/atirador">
                                <div className={styles.category} title="Atirador">
                                    <img
                                        src="/svgs/atirador.svg"
                                        alt="Atirador"
                                    />
                                    <h4 className={styles.categoryTitle}>Atirador</h4>
                                </div>
                            </Link>

                            <Link href="/colecionador">
                                <div className={styles.category} title="Colecionador">
                                    <img
                                        src="/svgs/colecionador.svg"
                                        alt="Colecionador"
                                    />
                                    <h4 className={styles.categoryTitle}>Colecionador</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
