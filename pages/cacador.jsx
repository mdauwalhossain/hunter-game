import Head from 'next/head'
import AboutCategory from "../components/AboutCategory"
import Queries from "../components/Queries"
import Alert from "../components/Alert"
import ContactCategory from "../components/ContactCategory"

export default function Cacador() {
    return (
        <>
            <Head>
                <title>Caçador | Jackeline Oczust - Despachante de Armas</title>
            </Head>

            <AboutCategory
                icon="cacador"
                title="Caçador"
                text="Caçador é a pessoa física registrada no Comando do Exército, vinculada a entidade ligada a caça e que realiza o abate de espécies da fauna, com arma de fogo, em observância às normas de proteção ao meio ambiente."
            />

            <Queries
                data={[
                    {
                        query: 'O que é necessário para ser um Caçador?',
                        answer: `Para o exercício da atividade de caça é necessário obter o Certificado de Registro(CR) concedido pelo Exército. <br />
                        <br />
                        A concessão do CR é realizada, de forma descentralizada, pela Organização Militar, integrante do SisFPC, designada pela Região Militar (RM) de acordo com o domicílio do interessado. <br />
                        <br />
                        O requerimento e a relação de documentos para concessão de CR encontram0se no Anexo B da Portaria nº 150-CELOG, de 5 de dezembro de 2019. <br />
                        <br />
                        <a href="http://www.dfpc.eb.mil.br/index.php/registro" target="_blank" style="color: blue">www.dfpc.eb.mil.br/index.php/registro</a>`,
                    },
                    {
                        query: 'Quantas armas o Caçador pode ter em seu acervo?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tempora omnis deserunt similique repellendus illum unde suscipit, quo consectetur vel a aut excepturi quidem cupiditate delectus provident odio ut voluptas.',
                    },
                    {
                        query: 'Quantas munições o Caçador pode adquirir?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tempora omnis deserunt similique repellendus illum unde suscipit, quo consectetur vel a aut excepturi quidem cupiditate delectus provident odio ut voluptas.',
                    },
                    {
                        query: 'O que é necessário para adquirir munições e insumos?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tempora omnis deserunt similique repellendus illum unde suscipit, quo consectetur vel a aut excepturi quidem cupiditate delectus provident odio ut voluptas.',
                    },
                    {
                        query: 'Quais armas de fogo são proíbidas nesta categoria?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tempora omnis deserunt similique repellendus illum unde suscipit, quo consectetur vel a aut excepturi quidem cupiditate delectus provident odio ut voluptas.',
                    },
                ]}
            />

            <Alert />

            <ContactCategory
                text="Adquira seu CR na categoria Caça, permite que você atire com pistolas de 9 mm, .40, .45 e os revólveres 357. <br />
                Fale conosco, tire suas dúvidas que faremos de tudo para que você realize este sonho!"
            />
        </>
    )
}
