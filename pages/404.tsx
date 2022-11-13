import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <Container>
      <Heading as={'h1'}>Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider marginY={6} />
      <Box
        marginY={6}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Link href={'/'} passHref>
          <Button colorScheme={'teal'}>Return to home</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;
