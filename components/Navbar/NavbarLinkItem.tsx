import { Link as LinkChakra, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { ComponentProps, FC } from 'react';

type NavbarLinkItemProps = ComponentProps<typeof LinkChakra> & {
  href: string;
  target?: string;
  path: string;
};

export const NavbarLinkItem: FC<NavbarLinkItemProps> = ({
  href,
  target,
  path,
  children,
  ...props
}): JSX.Element => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <Link href={href} passHref scroll={false}>
      <LinkChakra
        padding={2}
        background={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </LinkChakra>
    </Link>
  );
};
