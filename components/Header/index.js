import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import MenuItem from '../MenuItem'
import styles from './Header.module.css'

export default function Header() {
    const router = useRouter()
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    return (
        <header className={router.pathname === '/' ? `${styles.header} ${styles.headerHome}` : styles.header}>
            <div className="container">
                <div className={styles.container}>
                    <div
                        className={`${styles.botaoMenu} ${menuIsOpen ? styles.botaoClose : ''}`}
                        onClick={() => setMenuIsOpen(!menuIsOpen)}
                    >
                        <div></div>
                    </div>

                    <Link href="/">
                        <img
                            src="/svgs/logo.svg"
                            alt="Logo Jackeline Oczust"
                            title="Jackeline Oczust - Despachante de Armas"
                            className={styles.logo}
                        />
                    </Link>

                    <nav className={`${styles.menu} ${!menuIsOpen ? styles.menuFechado : ''}`} onClick={() => setMenuIsOpen(false)}>
                        <MenuItem
                            route="/"
                            active={styles.active}
                            name="Home"
                        />
                        <MenuItem
                            route="/cacador"
                            active={styles.active}
                            name="Caçador"
                        />
                        <MenuItem
                            route="/atirador"
                            active={styles.active}
                            name="Atirador"
                        />
                        <MenuItem
                            route="/colecionador"
                            active={styles.active}
                            name="Colecionador"
                        />
                    </nav>
                </div>
            </div>
        </header>
    )
}
