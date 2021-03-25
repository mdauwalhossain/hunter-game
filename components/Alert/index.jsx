import styles from "./Alert.module.css";

export default function Alert() {
    return (
        <section className={styles.alert}>
            <div className="container">
                <p>
                    Para o abate de espécies da fauna, obedecida a competência
                    dos órgãos responsáveis pela tutela do meio ambiente,
                    compete ao SisFPC a expedição de guia de tráfego para a
                    utilização de arma de fogo, acessórios e munição nessa
                    atividade, conforme o art. 56 do Decreto nº 10.030/2019
                </p>
            </div>
        </section>
    );
}
