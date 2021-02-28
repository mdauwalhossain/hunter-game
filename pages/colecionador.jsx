import AboutCategory from "../components/AboutCategory"
import Queries from "../components/Queries"
import Alert from "../components/Alert"
import ContactCategory from "../components/ContactCategory"

export default function Colecionador() {
    return (
        <>
            <AboutCategory
                icon="colecionador"
                title="Colecionador"
                text="Colecionador é a pessoa física ou jurídica registrada no Comando do Exército que tem a finalidade de adquirir, reunir, manter sob a sua guarda e conservar Produtos Controlados pelo Exército(PCE) e colaborar para a preservação e a valorização do patrimônio histórico nacional."
            />

            <Queries
                data={[
                    {
                        query: 'O que é necessário para ser um Colecionador?',
                        answer: `Para o exercício da atividade de caça é necessário obter o Certificado de Registro(CR) concedido pelo Exército. <br />
                        <br />
                        A concessão do CR é realizada, de forma descentralizada, pela Organização Militar, integrante do SisFPC, designada pela Região Militar (RM) de acordo com o domicílio do interessado. <br />
                        <br />
                        O requerimento e a relação de documentos para concessão de CR encontram0se no Anexo B da Portaria nº 150-CELOG, de 5 de dezembro de 2019. <br />
                        <br />
                        <a href="http://www.dfpc.eb.mil.br/index.php/registro" target="_blank" style="color: blue">www.dfpc.eb.mil.br/index.php/registro</a>`,
                    },
                    {
                        query: 'Quantas armas o Colecionador pode ter em seu acervo?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tempora omnis deserunt similique repellendus illum unde suscipit, quo consectetur vel a aut excepturi quidem cupiditate delectus provident odio ut voluptas.',
                    },
                    {
                        query: 'Quais os parâmetros da classificação de produto como PCE de valor histórico?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tempora omnis deserunt similique repellendus illum unde suscipit, quo consectetur vel a aut excepturi quidem cupiditate delectus provident odio ut voluptas.',
                    },
                    {
                        query: 'Quais práticas são vedadas como armamento nesta categoria?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tempora omnis deserunt similique repellendus illum unde suscipit, quo consectetur vel a aut excepturi quidem cupiditate delectus provident odio ut voluptas.',
                    },
                    {
                        query: 'Quais PCE são vedados do colecionamento?',
                        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil tempora omnis deserunt similique repellendus illum unde suscipit, quo consectetur vel a aut excepturi quidem cupiditate delectus provident odio ut voluptas.',
                    },
                ]}
            />

            <Alert />

            <ContactCategory
                text="Adquira seu CR na categoria Colecionador e adquira armas históricas raras. <br />
                Fale conosco, tire suas dúvidas que faremos de tudo para que você realize este sonho!"
            />
        </>
    )
}
