import Contact from '../Contact'
import styles from './Caliber.module.css'

export default function Caliber() {
    return (
        <section className={styles.caliber}>
            <div className={`${styles.container} container`}>

                <div className={styles.content}>
                    <h3 className={styles.caliberTitle}>
                        Qual calibre eu posso ter?
                    </h3>

                    <p className={`${styles.caliberText} mobile-show`}>
                        O CR na categoria CAC permite que você atire com pistolas de <b>9mm, .40 e .45 e os revólveres 357.</b> Fale conosco e tire suas dúvidas,<b> realize seu sonho de atirar com diversos calibres!</b>
                    </p>

                    <p className={`${styles.caliberText} mobile-hide`}>
                        O CR na categoria Caça, Atirador e/ou Colecionador (CAC) permite que você atire com pistolas de 9 mm, .40, .45 e os revólveres 357. <br />
                        Já pensou em disparar com armas que antes eram permitidas apenas para uso de policiais ou das Forças Armadas? Agora é sua hora! Elas podem ser adquiridas por pessoas que possuem a autorização para posse e porte de arma de fogo. <br />
                        Quer adquirir sua arma de fogo devidamene legalizada sem ter que lidar com muita burocracia? Fale conosco, tire suas dúvidas que faremos de tudo para que você realize este sonho!
                    </p>
                </div>


                <section className={styles.contact}>
                    <Contact />
                </section>
            </div>
        </section>
    )
}
