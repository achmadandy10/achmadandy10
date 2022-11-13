import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { FC } from 'react';
import { Font, Layout } from '../components';
import { theme } from '../lib/theme';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

const MyApp: FC<AppProps> = ({ Component, pageProps, router }): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Font />
      <Layout.Main router={router}>
        <AnimatePresence
          mode={'wait'}
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout.Main>
    </ChakraProvider>
  );
};

export default MyApp;
