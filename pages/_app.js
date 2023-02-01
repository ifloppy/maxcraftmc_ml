import NavBar from '@components/NavBar'

function Application({ Component, pageProps }) {
  return <><NavBar/>
  <Component {...pageProps} />
  </>
}

export default Application
