import Head from "next/head";
import AboutCategory from "../components/AboutCategory";
import Queries from "../components/Queries";
import Alert from "../components/Alert";
import ContactCategory from "../components/ContactCategory";

export default function Atirador() {
    return (
        <>
            <Head>
                <title>
                    Atirador | Jackeline Oczust - Despachante de Armas
                </title>
                <meta
                    name="description"
                    content="Quer se tornar um Atirador de forma legalizada e não sabe como? Fale Conosco!"
                />
                <meta
                    property="og:description"
                    content="Quer se tornar um Atirador de forma legalizada e não sabe como? Fale Conosco!"
                />
                <meta
                    property="og:url"
                    content="https://www.jackelineoczust.com.br/atirador"
                />
                <link
                    rel="canonical"
                    href="https://www.jackelineoczust.com.br/atirador"
                />
            </Head>

            <AboutCategory
                icon="atirador"
                title="Atirador"
                text="Atirador Desportivo é a pessoa física registrada no Comando do Exército e que pratica habitualmente o tiro como esporte.
                O tiro desportivo enquadra-se como esporte de prática forma e desporto de rendimento."
            />

            <Queries
                data={[
                    {
                        query: "O que é necessário para ser um Atirador?",
                        answer: `Para o exercício da atividade de caça é necessário obter o Certificado de Registro(CR) concedido pelo Exército. <br />
                        <br />
                        A concessão do CR é realizada, de forma descentralizada, pela Organização Militar, integrante do SisFPC, designada pela Região Militar (RM) de acordo com o domicílio do interessado. <br />
                        <br />
                        O requerimento e a relação de documentos para concessão de CR encontram se no Anexo B da Portaria nº 150-CELOG, de 5 de dezembro de 2019.
                        `,
                    },
                    {
                        query:
                            "Quantas armas o Atirador pode ter em seu acervo?",
                        answer: `<b>- 30 armas de uso permitido</b> <br />
                        <b>- 30 armas uso restrito</b> <br />
                        <br />
                        A autorização para a aquisição está condicionado ao atendimento do prescrito nos art. 9º ao art. 12 da Portaria nº 136-COLOG/2019 e será formalizada pelo despacho da Organização Militar do SisFPC de vinculação do colecionador no requerimento Anexo E da Portaria.
                        `,
                    },
                    {
                        query:
                            "Quantas munições o Atirador Deportivo pode adquirir?",
                        answer: `O Atirador Deportivo poderá adquirir, anualmente, para cada arma registrada: <br />
                        <br />
                        <b>Munição de uso permitido: </b> até cinco mil cartuchos ou insumos para essa quantidade. <br />
                        <b>Munição de uso restrito: </b> até mil cartuchos ou insumos para essa quantidade. <br />
                        <br />
                        A quantidade anual de pólvora é de até vinte quilogramas por pessoa registrada no Exécito.
                        `,
                    },
                    {
                        query:
                            "O que é necessário para adquirir munições e insumos?",
                        answer: `Apresentação ao fornecedor: <br />
                            <br />
                            - Documento de identificação válido; <br />
                            - CRAF da arma;<br />
                            - CR de atirador desportivo ou caçador.`,
                    },
                    {
                        query:
                            "Quais armas de fogo são proíbidas nesta categoria?",
                        answer: `- Arma de fogo de uso proibido<br />
                            - Arma de fogo automática <br />
                            - Arma de fogo não-portátil`,
                    },
                ]}
            />

            <Alert />

            <ContactCategory
                text="Adquira seu CR na categoria Atirador Desportivo, permite que você obtenha pistolas com calibre de 9 mm, .40, .45, revólveres 357, entre outros. <br />
                Fale conosco, tire suas dúvidas que faremos de tudo para que você realize este sonho!"
            />
        </>
    );
}
