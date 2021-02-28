import styles from './Me.module.css'

export default function Me() {
    return (
        <div className="container">
            <section className={styles.me}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Jackeline Oczust
                    </h1>
                    <p className={styles.text}>
                        Formada em Direito, <b>Instrutora de armamento e tiro</b> e <b>Intrutora de tiro desportivo</b>, ofereço o meu trabalho com excelência em todas as fases do processo para concessão do  seu <b>CR (Certificado de registro)</b> junto ao Exército, também prestando serviços na  renovação de CR ou 2° via, registro, apostilamento, Guia de trânsito, transferência SINARM - SIGMA.
                        <br />
                        A experiência faz a diferença no processo, trabalhos com <b>excelente performance</b>, prazos e custos. Basicamente, o processo de concessão de CR funciona da seguinte forma: Cuidamos de toda parte burocrática, você só precisará nos fornecer as informações que iremos solicitando durante o processo, tudo muito bem explicado, com inicio, meio e fim, de forma <b>simplificada!</b>
                    </p>
                </div>
                <div>
                    <h2 className={styles.subtitle}>
                        Despachante de Armas
                    </h2>

                    <img src="/images/me.jpg" alt="Jackeline Oczust" />
                </div>
            </section>
        </div>
    )
}
