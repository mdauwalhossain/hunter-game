import styles from "./Copyright.module.css";

export default function Copyright() {
    const year = new Date().getFullYear();

    return (
        <section className={styles.copyright}>
            <div className="container">
                <div className={styles.copyright__content}>
                    <span className={styles.copyright__company}>
                        @ {year} | Jackeline Oczust | Todos os Direitos
                        Reservados
                    </span>

                    <a
                        className={styles.copyright__dev}
                        title="Entre em Contato"
                        href="https://api.whatsapp.com/send?phone=5541999023899&text=Olá entro em contato através do site da Jackeline, gostaria de mais informações"
                        target="_blank"
                        arial-label="Entrar em contato pelo whatsapp do desenvolvedor"
                    >
                        Desenvolvido por <b>Gabriel Oczust</b>
                    </a>
                </div>
            </div>
        </section>
    );
}
