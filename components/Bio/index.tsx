import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { ComponentProps, FC } from 'react';

const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
`;

const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`;

const BioComponent: FC<ComponentProps<'div'>> = ({ children }): JSX.Element => {
  return <Box>{children}</Box>;
};

BioComponent.displayName = 'Bio';
export const Bio = Object.assign(BioComponent, {
  Section: BioSection,
  Year: BioYear,
});
