import { useState } from "react";
import Image from "next/image";
import range from "lodash/range";
import ImageFullScreen from "../ImageFullScreen";
import styles from "./Gallery.module.css";

const countImages = 9;

export default function Gallery() {
    const [isOpenImage, setIsOpenImage] = useState(false);
    const [imageIndex, setImageIndex] = useState(1);

    function handleClickImage(index) {
        setIsOpenImage(true);
        setImageIndex(index);
    }

    function handleCloseImage() {
        setIsOpenImage(false);
        setImageIndex(1);
    }

    return (
        <div className={styles.gallery}>
            <div className="container">
                <header className={styles.header}>
                    <span className={styles.title}>
                        Se inspire, dê uma <br className="mobile-show" />
                        olhada na nossa galeria!
                    </span>

                    <a
                        className={`${styles.btn} mobile-hide-flex`}
                        href="https://www.instagram.com/jackeoczust"
                        target="_blank"
                        title="Ver Mais no Instagram"
                        arial-label="Ver mais fotos no Instagram"
                    >
                        <span>Ver Mais</span>

                        <Image
                            src="/svgs/instagram.svg"
                            alt="Instagram"
                            height={12}
                            width={12}
                        />
                    </a>

                    <a
                        className={`${styles.btn} mobile-show-flex`}
                        href="https://www.instagram.com/jackeoczust"
                        title="Ver Mais no Instagram"
                        arial-label="Ver mais fotos no Instagram"
                    >
                        <span>Ver Mais</span>

                        <Image
                            src="/svgs/instagram.svg"
                            alt="Instagram"
                            height={12}
                            width={12}
                        />
                    </a>
                </header>

                <div className={styles.images}>
                    {range(countImages).map((index) => (
                        <Image
                            src={`/gallery/${index + 1}.jpg`}
                            alt="Imagem da Galeria"
                            title="Visualizar imagem"
                            aria-label="Imagem da galeria, ao clicar a imagem fica com zoom"
                            width={400}
                            height={400}
                            key={index}
                            onClick={() => handleClickImage(index + 1)}
                        />
                    ))}
                </div>

                <ImageFullScreen
                    countImages={countImages}
                    imageIndex={imageIndex}
                    isOpen={isOpenImage}
                    onCloseRequest={handleCloseImage}
                />
            </div>
        </div>
    );
}
