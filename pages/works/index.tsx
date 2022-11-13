import { Container, Divider, Heading, SimpleGrid } from '@chakra-ui/react';
import { NextPage } from 'next';
import { GridItem, Layout, Section } from '../../components';

import thumbInkdrop from '../../public/images/works/inkdrop_eyecatch.png';

const Works: NextPage = (): JSX.Element => {
  return (
    <Layout.Article title={'Works'}>
      <Container>
        <Heading as={'h3'} fontSize={20} marginBottom={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <GridItem.Work
              id={'work-1'}
              title={'Work 1'}
              thumbnail={thumbInkdrop}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              ab!
            </GridItem.Work>
          </Section>
          <Section>
            <GridItem.Work
              id={'work-2'}
              title={'Work 2'}
              thumbnail={thumbInkdrop}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              ab!
            </GridItem.Work>
          </Section>
          <Section delay={'0.1'}>
            <GridItem.Work
              id={'work-3'}
              title={'Work 3'}
              thumbnail={thumbInkdrop}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              ab!
            </GridItem.Work>
          </Section>
          <Section delay={'0.1'}>
            <GridItem.Work
              id={'work-4'}
              title={'Work 4'}
              thumbnail={thumbInkdrop}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              ab!
            </GridItem.Work>
          </Section>
        </SimpleGrid>

        <Section delay={'0.2'}>
          <Divider marginY={6} />

          <Heading as={'h3'} fontSize={20} marginBottom={4}>
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={'0.3'}>
            <GridItem.Work
              id={'work-1'}
              title={'Work 1'}
              thumbnail={thumbInkdrop}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              ab!
            </GridItem.Work>
          </Section>
          <Section delay={'0.3'}>
            <GridItem.Work
              id={'work-2'}
              title={'Work 2'}
              thumbnail={thumbInkdrop}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              ab!
            </GridItem.Work>
          </Section>
          <Section delay={'0.4'}>
            <GridItem.Work
              id={'work-3'}
              title={'Work 3'}
              thumbnail={thumbInkdrop}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              ab!
            </GridItem.Work>
          </Section>
          <Section delay={'0.4'}>
            <GridItem.Work
              id={'work-4'}
              title={'Work 4'}
              thumbnail={thumbInkdrop}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              ab!
            </GridItem.Work>
          </Section>
        </SimpleGrid>

        <Section delay={'0.4'}>
          <Divider marginY={6} />

          <Heading as={'h3'} fontSize={20} marginBottom={4}>
            Old works
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={'0.5'}>
            <GridItem.Work
              id={'work-1'}
              title={'Work 1'}
              thumbnail={thumbInkdrop}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              ab!
            </GridItem.Work>
          </Section>
          <Section delay={'0.5'}>
            <GridItem.Work
              id={'work-2'}
              title={'Work 2'}
              thumbnail={thumbInkdrop}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              ab!
            </GridItem.Work>
          </Section>
          <Section delay={'0.6'}>
            <GridItem.Work
              id={'work-3'}
              title={'Work 3'}
              thumbnail={thumbInkdrop}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              ab!
            </GridItem.Work>
          </Section>
          <Section delay={'0.6'}>
            <GridItem.Work
              id={'work-4'}
              title={'Work 4'}
              thumbnail={thumbInkdrop}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
              ab!
            </GridItem.Work>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout.Article>
  );
};

export default Works;
