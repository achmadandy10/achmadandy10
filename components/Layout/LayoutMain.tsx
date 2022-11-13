import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';
import { Router } from 'next/router';
import { Navbar } from '../Navbar';
import { ModelThree } from '../ModelThree';
import dynamic from 'next/dynamic';
import { Footer } from '../Footer';

const LazyModelThree = dynamic(() => Promise.resolve(ModelThree), {
  ssr: false,
  loading: () => (
    <ModelThree.Container>
      <ModelThree.Spinner />
    </ModelThree.Container>
  ),
});

type LayoutMainProps = ComponentProps<'div'> & {
  router: Router;
};

export const LayoutMain: FC<LayoutMainProps> = ({
  children,
  router,
}): JSX.Element => {
  return (
    <Box as="main" paddingBottom={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Achmad Andy Dekanovy - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxWidth={'container.md'} paddingTop={14}>
        <LazyModelThree />

        {children}

        <Footer />
      </Container>
    </Box>
  );
};
