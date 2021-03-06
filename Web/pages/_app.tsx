import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Link from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" 
        crossOrigin="anonymous" 
      />
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" 
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
