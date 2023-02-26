import NavBar from '@components/NavBar'
import Head from 'next/head'

function Application({ Component, pageProps }) {
  return <><NavBar />
    <Head>
      <title>{pageProps.title} - MaxCraftMC</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default Application
