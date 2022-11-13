import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { ComponentProps, FC } from 'react';
import { theme } from '../../lib/theme';

type ChakraProps = ComponentProps<typeof ChakraProvider> & {
  cookies: string;
};

export const Chakra: FC<ChakraProps> = ({ cookies, children }): JSX.Element => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  };
};
