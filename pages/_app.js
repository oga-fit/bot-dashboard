import "../styles/common.scss";

import Head from "next/head";
import Providers from "../components/Providers";

function App({ Component, pageProps }) {
  return (
    <Providers session={pageProps.session}>
      <Head>
        <title>Bot Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Providers>
  );
}

export default App;
