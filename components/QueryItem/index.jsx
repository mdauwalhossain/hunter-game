import { useState } from 'react'
import Image from 'next/image'
import styles from './QueryItem.module.css'

export default function QueryItem({ query, answer, initialOpen }) {
    const [open, setOpen] = useState(initialOpen)

    return (
        <div className={styles.query}>
            <h3
                className={styles.title}
                onClick={() => setOpen(!open)}
                title={query}
            >
                <span>{query}</span>

                <Image
                    src={`/svgs/${!open ? 'down-arrow' : 'up-arrow'}.svg`}
                    alt="Seta"
                    height={20}
                    width={20}
                />
            </h3>

            {open && (
                <p
                    className={styles.answer}
                    dangerouslySetInnerHTML={{ __html: answer }}
                ></p>
            )}

            <div className={styles.line}></div>
        </div>
    )
}
