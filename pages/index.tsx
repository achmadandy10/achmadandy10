import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link as LinkChakra,
  useColorModeValue,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Bio, Layout, Paragraph, Section } from '../components';

const Home: NextPage = (): JSX.Element => {
  return (
    <Layout.Article title={''}>
      <Container>
        <Box
          borderRadius={'lg'}
          background={useColorModeValue('whatsapp.500', 'whiteAlpha.200')}
          padding={3}
          textAlign="center"
          marginBottom={6}
        >
          Hello, I&apos;m a full-stack developer based in Indonesia!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as={'h2'} variant={'page-title'}>
              Achmad Andy Dekanovy
            </Heading>
            <p>Digital Craftsmen ( Developer / Designer )</p>
          </Box>

          <Box
            flexShrink={0}
            marginTop={{ base: 4, md: 0 }}
            marginLeft={{ md: 6 }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Image
              borderColor={'whiteAlpha.800'}
              borderWidth={2}
              borderStyle={'solid'}
              maxWidth={'100px'}
              display={'inline-block'}
              borderRadius={'full'}
              src={'images/deka.jpg'}
              alt={'Profile Image'}
            />
          </Box>
        </Box>

        <Section delay={'0.1'}>
          <Heading as={'h3'} variant={'section-title'}>
            Work
          </Heading>
          <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            laudantium ad amet ratione facilis aspernatur beatae animi cumque
            nam, doloremque repellendus exercitationem non reiciendis quibusdam
            harum quaerat rem soluta, minus veniam culpa, temporibus illo quod
            inventore quas! Praesentium facere nesciunt adipisci molestias, sunt
            voluptatum libero, impedit, a ipsum nobis quas?{' '}
            <Link href={'/works/linkind'}>
              <LinkChakra>Linkind</LinkChakra>
            </Link>
            .
          </Paragraph>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            marginY={4}
          >
            <Link href={'/works'}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme={'teal'}>
                My Portfolio
              </Button>
            </Link>
          </Box>
        </Section>

        <Section delay={'0.2'}>
          <Heading as={'h3'} variant={'section-title'}>
            Bio
          </Heading>
          <Bio.Section>
            <Bio.Year>2000</Bio.Year>
            Born in Jakarta, Indonesia.
          </Bio.Section>
          <Bio.Section>
            <Bio.Year>2022</Bio.Year>
            Lulus Kuliah
          </Bio.Section>
        </Section>

        <Section delay={'0.3'}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Art, Music, Game, Artificial Intelligence</Paragraph>
        </Section>
      </Container>
    </Layout.Article>
  );
};

export default Home;
