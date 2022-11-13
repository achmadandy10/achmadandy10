import { Box } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';
import { LayoutArticle } from './LayoutArticle';
import { LayoutMain } from './LayoutMain';

const LayoutComponent: FC<ComponentProps<'div'>> = ({
  children,
}): JSX.Element => {
  return <Box as="div">{children}</Box>;
};

LayoutComponent.displayName = 'Layout';
export const Layout = Object.assign(LayoutComponent, {
  Main: LayoutMain,
  Article: LayoutArticle,
});
