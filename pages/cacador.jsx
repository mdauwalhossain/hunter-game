import AboutCategory from "../components/AboutCategory"
import Alert from "../components/Alert"
import ContactCategory from "../components/ContactCategory"

export default function Cacador() {
    return (
        <>
            <AboutCategory
                icon="cacador"
                title="Caçador"
                text="Caçador é a pessoa física registrada no Comando do Exército, vinculada a entidade ligada a caça e que realiza o abate de espécies da fauna, com arma de fogo, em observância às normas de proteção ao meio ambiente."
            />

            <Alert />

            <ContactCategory
                text="Adquira seu CR na categoria Caça, permite que você atire com pistolas de 9 mm, .40, .45 e os revólveres 357. <br />
                Fale conosco, tire suas dúvidas que faremos de tudo para que você realize este sonho!"
            />
        </>
    )
}
