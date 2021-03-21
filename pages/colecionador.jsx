import Head from "next/head";
import AboutCategory from "../components/AboutCategory";
import Queries from "../components/Queries";
import Alert from "../components/Alert";
import ContactCategory from "../components/ContactCategory";

export default function Colecionador() {
    return (
        <>
            <Head>
                <title>
                    Colecionador | Jackeline Oczust - Despachante de Armas
                </title>
            </Head>

            <AboutCategory
                icon="colecionador"
                title="Colecionador"
                text="Colecionador é a pessoa física ou jurídica registrada no Comando do Exército que tem a finalidade de adquirir, reunir, manter sob a sua guarda e conservar Produtos Controlados pelo Exército(PCE) e colaborar para a preservação e a valorização do patrimônio histórico nacional."
            />

            <Queries
                data={[
                    {
                        query: "O que é necessário para ser um Colecionador?",
                        answer: `Para o exercício da atividade de caça é necessário obter o Certificado de Registro(CR) concedido pelo Exército. <br />
                        <br />
                        A concessão do CR é realizada, de forma descentralizada, pela Organização Militar, integrante do SisFPC, designada pela Região Militar (RM) de acordo com o domicílio do interessado. <br />
                        <br />
                        O requerimento e a relação de documentos para concessão de CR encontram0se no Anexo B da Portaria nº 150-CELOG, de 5 de dezembro de 2019. <br />
                        <br />
                        <a href="http://www.dfpc.eb.mil.br/index.php/registro" target="_blank" style="color: blue">www.dfpc.eb.mil.br/index.php/registro</a>`,
                    },
                    {
                        query:
                            "Quantas armas o Colecionador pode ter em seu acervo?",
                        answer: `<b>- 5 armas de cada modelo de uso permitido</b> <br />
                        <b>- 5 armas de cada modelo de uso restrito</b> <br />
                        <br />
                        A autorização para a aquisição está condicionado ao atendimento do prescrito nos art. 9º ao art. 12 da Portaria nº 136-COLOG/2019 e será formalizada pelo despacho da Organização Militar do SisFPC de vinculação do colecionador no requerimento Anexo E da Portaria. <br />
                        <br />
                        <a href="http://www.dfpc.eb.mil.br/index.php/aquisicao" target="_blank" style="color: blue">www.dfpc.eb.mil.br/index.php/aquisicao</a> 
                        `,
                    },
                    {
                        query:
                            "Quais os parâmetros da classificação de produto como PCE de valor histórico?",
                        answer: `- Raridade <br />
                        - Originalidade <br />
                        - Singularidade <br />
                        - Ligação à história`,
                    },
                    {
                        query:
                            "Quais práticas são vedadas como armamento nesta categoria?",
                        answer: `- Realização de tiro, exceto para realização de testes para reparo ou manutenção. <br />
                        - Alteração das características originais.`,
                    },
                    {
                        query: "Quais PCE são vedados do colecionamento?",
                        answer: `- Arma de fogo de uso proibido. <br />
                            - Arma de fogo de uso restrito, automática de qualquer calibre. 
                            <br />
                            - Arma de fogo de uso restrito não-porátil ou portátil semiautomática cuja data de projeto do modelo original tenha menos de trinta anos. 
                            <br />
                            - Acessório de arma de fogo que tenha por objetivo abrandar ou suprimir o estampido. 
                            <br />
                            - Explosivos. 
                            <br />
                            - Arma químicas, biológicas e nucleares de qualquer tipo ou modalidade. 
                            <br />
                            - Granadas, exceto se descarregadas e inertes. 
                            <br />
                            - Munições de uso proibido.`,
                    },
                ]}
            />

            <Alert />

            <ContactCategory
                text="Adquira seu CR na categoria Colecionador e adquira armas históricas raras. <br />
                Fale conosco, tire suas dúvidas que faremos de tudo para que você realize este sonho!"
            />
        </>
    );
}
