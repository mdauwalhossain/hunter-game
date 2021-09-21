import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Jackeline Oczust - Despachante de Armas</title>
                <link rel="canonical" href="https://www.jackelineoczust.com.br/" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Gabriel Oczust" />
                <meta name="keywords" content="despachante de arma, despachante arma de fogo, porte de arma, como tirar porte de arma, porte de arma de fogo, porte de arma para cac, registrar arma, posse de arma, renovacao de cr, certificado de registro"></meta>
                <meta name="description" content="Quer ter sua arma de forma legalizada e não sabe como? Fale Conosco!" />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:title" content="Jackeline Oczust - Despachante de Armas" />
                <meta property="og:site_name" content="Jackeline Oczust - Despachante de Armas" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Quer ter sua arma de forma legalizada e não sabe como? Fale Conosco!" />
                <meta property="og:image" content="https://www.jackelineoczust.com.br/images/me.webp"></meta>
                <meta property="og:url" content="https://www.jackelineoczust.com.br/" />
            </Head>

            <Header />

            <Component {...pageProps} />

            <Footer />
            <Copyright />
        </>
    )
}

export default MyApp
