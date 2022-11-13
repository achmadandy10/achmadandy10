import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Link as LinkChakra,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ComponentProps, FC } from 'react';
import { Logo } from '../Logo';
import { ThemeToggleButton } from '../ThemeToggleButton';
import { NavbarLinkItem } from './NavbarLinkItem';
import { IoLogoGithub } from 'react-icons/io5';

type NavbarComponentProps = ComponentProps<'div'> & {
  path: string;
};

export const NavbarComponent: FC<NavbarComponentProps> = ({
  path,
  ...props
}): JSX.Element => {
  return (
    <Box
      as={'nav'}
      position={'fixed'}
      width={'100%'}
      background={useColorModeValue('#FFFFFF40', '#20202380')}
      backdropFilter={'blur(10px)'}
      zIndex={2}
      {...props}
    >
      <Container
        display={'flex'}
        padding={2}
        maxWidth={'container.md'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Flex alignItems={'center'} marginRight={5}>
          <Heading as={'h1'} size={'lg'} letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems={'center'}
          flexGrow={1}
          marginTop={{ base: 4, nmd: 0 }}
        >
          <NavbarLinkItem href={'/works'} path={path}>
            Works
          </NavbarLinkItem>
          <NavbarLinkItem href={'/posts'} path={path}>
            Posts
          </NavbarLinkItem>
          <NavbarLinkItem
            target={'_blank'}
            href={'https://github.com/achmadandy10'}
            path={path}
            gap={4}
            display={'inline-flex'}
            alignItems={'center'}
            paddingLeft={2}
          >
            <IoLogoGithub />
            Source
          </NavbarLinkItem>
        </Stack>

        <Box flex={1} textAlign={'right'}>
          <ThemeToggleButton />

          <Box marginLeft={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant={'outline'}
                aria-label={'Options'}
              />
              <MenuList>
                <Link href={'/'} passHref>
                  <MenuItem as={LinkChakra}>About</MenuItem>
                </Link>
                <Link href={'/works'} passHref>
                  <MenuItem as={LinkChakra}>Works</MenuItem>
                </Link>
                <Link href={'/posts'} passHref>
                  <MenuItem as={LinkChakra}>Posts</MenuItem>
                </Link>
                <MenuItem as={LinkChakra} href={''}>
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

NavbarComponent.displayName = 'Navbar';
export const Navbar = Object.assign(NavbarComponent, {
  LinkItem: NavbarLinkItem,
});
