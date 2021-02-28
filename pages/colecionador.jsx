import AboutCategory from "../components/AboutCategory"
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

            <Alert />

            <ContactCategory
                text="Adquira seu CR na categoria Colecionador e adquira armas históricas raras. <br />
                Fale conosco, tire suas dúvidas que faremos de tudo para que você realize este sonho!"
            />
        </>
    )
}
