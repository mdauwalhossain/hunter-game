import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jackeline Oczust - Despachante de Armas</title>
      </Head>

      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  )
}

export default MyApp
