import { ColorModeScript } from '@chakra-ui/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { theme } from '../lib/theme';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />

        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
