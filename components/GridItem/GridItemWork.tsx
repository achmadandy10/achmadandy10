import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ComponentProps, FC } from 'react';

type GridItemWorkProps = ComponentProps<'div'> & {
  id: string | number;
  title: string;
  thumbnail: StaticImageData;
};

export const GridItemWork: FC<GridItemWorkProps> = ({
  children,
  id,
  title,
  thumbnail,
}): JSX.Element => {
  return (
    <Box width={'100%'} alignItems={'center'}>
      <Link href={`/works/${id}`} passHref scroll={false}>
        <LinkBox cursor={'pointer'}>
          <Image
            src={thumbnail}
            alt={title}
            className={'grid-item-thumbnail'}
            placeholder={'blur'}
          />
          <LinkOverlay href={`/works/${id}`}>
            <Text marginTop={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </Link>
    </Box>
  );
};
