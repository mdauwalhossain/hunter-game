import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Jackeline Oczust - Despachante de Armas</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="Gabriel Oczust" />
                <meta name="keywords" content="Jackeline Oczust, porte de arma, despachante de arma, arma de fogo, porte de arma em curitiba, arma legalizada, certificado de registro"></meta>
                <meta name="description" content="Quer ter sua arma de forma legalizada e não sabe como? Fale Conosco!" />
                <meta property="og:title" content="Jackeline Oczust - Despachante de Armas" />
                <meta property="og:site_name" content="Jackeline Oczust - Despachante de Armas" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Quer ter sua arma de forma legalizada e não sabe como? Fale Conosco!" />
                <meta property="og:image" content="https://instagram.fbfh15-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.97.780.780a/s640x640/152354238_113686284064662_3826999676540091630_n.jpg?tp=1&_nc_ht=instagram.fbfh15-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=vt2kQmHr2fQAX84x_GX&oh=42e0ffd12253f8d8de10c0075d65030a&oe=60653A84"></meta>
            </Head>

            <Header />

            <Component {...pageProps} />

            <Footer />
        </>
    )
}

export default MyApp
