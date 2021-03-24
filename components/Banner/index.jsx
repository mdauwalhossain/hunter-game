import Image from 'next/image'
import styles from "./Banner.module.css"

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.title}>
                        <span>QUER TER</span>
                        <strong>SUA ARMA</strong>
                        <span>DE FORMA LEGALIZADA</span>
                        <span>
                            E <div>NÃO SABE COMO</div>?
                        </span>
                    </div>

                    <a
                        className={`${styles.btn} mobile-hide-flex`}
                        title="Entre em Contato"
                        href="https://api.whatsapp.com/send?phone=5541988555153&text=Ol%C3%A1%2C%20entro%20em%20contato%20atrav%C3%A9s%20do%20seu%20site%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                        target="_blank"
                        arial-label="Entrar em contato pelo whatsapp"
                    >
                        <span>Entre em Contato</span>
                        
                        <Image
                            src="/svgs/whatsapp.svg"
                            alt="WhatsApp"
                            width={18}
                            height={18}
                        />
                    </a>

                    <a
                        className={`${styles.btn} mobile-show-flex`}
                        title="Entre em Contato"
                        href="https://wa.me/5541988555153?text=Ol%C3%A1%2C%20entro%20em%20contato%20atrav%C3%A9s%20do%20seu%20site%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                        target="_blank"
                        arial-label="Entrar em contato pelo whatsapp"
                    >
                        <span>Entre em Contato</span>

                        <Image
                            src="/svgs/whatsapp.svg"
                            alt="WhatsApp"
                            width={15}
                            height={15}
                        />
                    </a>

                    <span className={styles.description}>
                        Deixe a burocracia com a gente!
                    </span>
                </div>
            </div>
        </section>
    );
}
