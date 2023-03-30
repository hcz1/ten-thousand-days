import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
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
