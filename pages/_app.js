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
                <meta property="og:image" content="https://instagram.fbfh15-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/146803916_2783099265284044_5103167293899035299_n.jpg?tp=1&_nc_ht=instagram.fbfh15-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=jQmFZANVT2UAX8pS0GW&oh=18f2b33e5b28502ec286d7fb5a109c06&oe=6064F9E5"></meta>
            </Head>

            <Header />

            <Component {...pageProps} />

            <Footer />
        </>
    )
}

export default MyApp
