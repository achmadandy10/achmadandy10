import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`;

export const Logo = (): JSX.Element => {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`;

  return (
    <Link href={'/'}>
      <a>
        <LogoBox>
          <Image src={footPrintImg} alt={'Logo'} width={20} height={20} />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily={'M PLUS Rounded 1c'}
            fontWeight={'bold'}
            marginLeft={3}
          >
            Achmad Andy Dekanovy
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};
