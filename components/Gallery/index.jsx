import { useState, useEffect } from 'react'
import Image from 'next/image'
import range from 'lodash/range'
import ItemsCarousel from 'react-items-carousel'
import styles from './Gallery.module.css'

export default function Gallery() {
    const [activeItemIndex, setActiveItemIndex] = useState(0)
    const noOfItems = 7
    const noOfCards = 3

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveItemIndex(prev => (prev + 1) % (noOfItems - noOfCards + 1))
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    const carouselItems = range(noOfItems).map(index => (
        <Image
            src={`/gallery/${index + 1}.jpg`}
            alt="Imagem da Galeria"
            width={640}
            height={640}
            key={index}
        />
    ))

    return (
        <div className={styles.gallery}>
            <div className="container">

                <div className={styles.header}>
                    <span className={styles.title}>
                        Se inspire, dê uma <br className="mobile-show" />
                        olhada na nossa galeria!
                    </span>

                    <a
                        className={styles.btn} href="https://www.instagram.com/jackeoczust"
                        target="_blank"
                        title="Ver Mais no Instagram"
                    >
                        <span>Ver Mais</span>

                        <Image
                            src="/images/instagram.svg"
                            alt="Instagram"
                            height={12}
                            width={12}
                        />
                    </a>
                </div>

                <ItemsCarousel
                    gutter={12}
                    numberOfCards={noOfCards}
                    activeItemIndex={activeItemIndex}
                    requestToChangeActive={value => setActiveItemIndex(value)}
                    children={carouselItems}
                />
            </div>
        </div >
    )
}
