import { useState } from "react";
import Image from "next/image";
import styles from "./QueryItem.module.css";

export default function QueryItem({ query, answer, initialOpen }) {
    const [open, setOpen] = useState(initialOpen);

    return (
        <div className={styles.query}>
            <div
                className={styles.title}
                onClick={() => setOpen(!open)}
                title={query}
            >
                <h3 className="titleQuery">{query}</h3>

                <Image
                    src={`/svgs/${!open ? "down-arrow" : "up-arrow"}.svg`}
                    alt="Seta"
                    height={20}
                    width={20}
                />
            </div>

            {open && (
                <p
                    className={styles.answer}
                    dangerouslySetInnerHTML={{ __html: answer }}
                ></p>
            )}

            <div className={styles.line}></div>
        </div>
    );
}
