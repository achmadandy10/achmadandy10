import { Box, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { ComponentProps, FC } from 'react';
import { GridItemStyle } from './GridItemStyle';
import { GridItemWork } from './GridItemWork';

type GridItemComponentProps = ComponentProps<'div'> & {
  href: string;
  title: string;
  thumbnail: string;
};

const GridItemComponent: FC<GridItemComponentProps> = ({
  children,
  href,
  title,
  thumbnail,
}): JSX.Element => {
  return (
    <Box width={'100%'} alignItems={'center'}>
      <LinkBox cursor={'pointer'}>
        <Image
          src={thumbnail}
          alt={title}
          className={'grid-item-thumbnail'}
          placeholder={'blur'}
          loading={'lazy'}
        />
        <LinkOverlay href={href} target={'_blank'}>
          <Text marginTop={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  );
};

GridItemComponent.displayName = 'GridItem';
export const GridItem = Object.assign(GridItemComponent, {
  Work: GridItemWork,
  Style: GridItemStyle,
});
