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
            </Head>

            <Header />

            <Component {...pageProps} />

            <Footer />
        </>
    )
}

export default MyApp
