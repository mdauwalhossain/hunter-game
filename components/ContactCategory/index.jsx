import Contact from "../Contact"
import styles from "./ContactCategory.module.css"

export default function ContactCategory({ text }) {
    return (
        <section className={styles.contact}>
            <div className="container">
                <div className={styles.container}>
                    <div className={`mobile-hide ${styles.content}`}>
                        <span className={styles.title}>
                            Gostou? Adquira agora!
                        </span>

                        <p
                            className={styles.text}
                            dangerouslySetInnerHTML={{ __html: text }}>
                        </p>
                    </div>

                    <Contact className={styles.form} />
                </div>
            </div>
        </section>
    )
}
