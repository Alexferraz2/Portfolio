import Head from "next/head"


import "../src/style.css"

function App ({ Component, pageProps }) {
  return (
    <>
        <Head>
            <title>Portfólio de Alexsandro</title>
        </Head>
        <Component {...pageProps} />
    </>
    
  )
}

export default App