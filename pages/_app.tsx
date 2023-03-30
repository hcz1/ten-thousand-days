import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌎</text></svg>"
        />

        <title>Your 10,000th Day</title>
        <meta property="og:title" content="Your 10,000th Day" key="title" />
        <meta
          name="description"
          content="Find out which date your 10,000th day of life falls on"
          key="description"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
