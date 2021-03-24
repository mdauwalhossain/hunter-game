import Link from 'next/link'
import Image from "next/image"
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.container}>
                    <div className={styles.contact}>
                        <Link href="/">
                            <a className={styles.logo}>
                                <Image
                                    src="/svgs/logo.svg"
                                    alt="Logo Jackeline Oczust"
                                    title="Jackeline Oczust - Despachante de Armas"
                                    width={245}
                                    height={64}
                                />
                            </a>
                        </Link>

                        <a
                            className={styles.address}
                            href="https://goo.gl/maps/EsKPKk1yRLHwhrkBA"
                            target="_blank"
                            title="Localização"
                            arial-label="Abrir google maps com o endereço"
                        >
                            Rua Doutor Armando Fajardo, 79 - Capão Raso
                        </a>

                        <a
                            className={styles.number}
                            href="https://api.whatsapp.com/send?phone=5541988555153&text=Ol%C3%A1%2C%20entro%20em%20contato%20atrav%C3%A9s%20do%20seu%20site%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                            target="_blank"
                            title="Entre em contato pelo WhatsApp"
                            arial-label="Entrar em contato pelo whatsapp"
                        >
                            <span>(41) 9 8855-5153</span>
                            <Image
                                src="/svgs/whatsapp.svg"
                                alt="WhatsApp"
                                width={14}
                                height={14}
                            />
                        </a>
                    </div>

                    <nav className={styles.links}>
                        <Link href="/">
                            <span>Home</span>
                        </Link>

                        <Link href="/cacador">
                            <span>Caçador</span>
                        </Link>

                        <Link href="/atirador">
                            <span>Atirador</span>
                        </Link>

                        <Link href="/colecionador">
                            <span>Colecionador</span>
                        </Link>
                    </nav>

                    <div className={styles.sociais}>
                        <a
                            href="https://wa.me/5541988555153?text=Ol%C3%A1%2C%20entro%20em%20contato%20atrav%C3%A9s%20do%20seu%20site%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
                            target="_blank"
                            arial-label="Entrar em contato pelo whatsapp"
                        >
                            <Image
                                src="/svgs/whatsapp.svg"
                                alt="WhatsApp"
                                title="Entre em contato pelo WhatsApp"
                                width={24}
                                height={24}
                            />
                        </a>
                        <a
                            href="https://www.facebook.com/jackeline.oczust.9"
                            target="_blank"
                            arial-label="Entrar em contato pelo Facebook"
                        >
                            <Image
                                src="/svgs/facebook.svg"
                                alt="Facebook"
                                title="Entre em contato pelo Facebook"
                                width={24}
                                height={24}
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/jackeoczust"
                            target="_blank"
                            arial-label="Entrar em contato pelo Instagram"
                        >
                            <Image
                                src="/svgs/instagram.svg"
                                alt="Instagram"
                                title="Entre em contato pelo Instagram"
                                width={24}
                                height={24}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
