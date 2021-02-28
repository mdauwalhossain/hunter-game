import AboutCategory from "../components/AboutCategory"
import Alert from "../components/Alert"
import ContactCategory from "../components/ContactCategory"

export default function Atirador() {
    return (
        <>
            <AboutCategory
                icon="atirador"
                title="Atirador"
                text="Atirador Desportivo é a pessoa física registrada no Comando do Exército e que pratica habitualmente o tiro como esporte.
                O tiro desportivo enquadra-se como esporte de prática forma e desporto de rendimento."
            />

            <Alert />

            <ContactCategory
                text="Adquira seu CR na categoria Atirador Desportivo, permite que você atire com pistolas de 9 mm, .40, .45 e os revólveres 357. <br />
                Fale conosco, tire suas dúvidas que faremos de tudo para que você realize este sonho!"
            />
        </>
    )
}
