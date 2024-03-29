import { ColorModeScript } from '@chakra-ui/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import config from '../styles/theme/config';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Roboto:wght@400;500;700&display=swap"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
