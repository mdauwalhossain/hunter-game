import { useEffect, useState } from "react";
import Image from "next/image";
import range from "lodash/range";
import styles from "./ImageFullScreen.module.css";

export default function ImageFullScreen({
    countImages,
    isOpen = false,
    onCloseRequest,
    imageIndex,
}) {
    const [imageIndexShow, setImageIndexShow] = useState(imageIndex);

    useEffect(() => {
        setImageIndexShow(imageIndex);
    }, [imageIndex]);

    useEffect(() => {
        if (isOpen) {
            const interval = setInterval(() => {
                setImageIndexShow(
                    imageIndexShow === countImages ? 1 : imageIndexShow + 1
                );
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isOpen, imageIndexShow]);

    return (
        isOpen && (
            <div className={styles.overlay} onClick={onCloseRequest}>
                {range(countImages).map((index) => (
                    <div
                        className={styles.image}
                        key={index}
                        style={{
                            display:
                                index === imageIndexShow - 1 ? "block" : "none",
                        }}
                    >
                        <Image
                            src={`/gallery/${index + 1}.webp`}
                            alt="Imagem da Galeria"
                            width={640}
                            height={640}
                        />
                    </div>
                ))}

                <div
                    className={styles.close}
                    title="Fechar"
                    aria-label="Fechar imagem com zoom"
                >
                    x
                </div>
            </div>
        )
    );
}
