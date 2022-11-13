import { Spinner } from '@chakra-ui/react';
import { FC } from 'react';

export const ModelThreeSpinner: FC = (): JSX.Element => (
  <Spinner
    size={'xl'}
    position={'absolute'}
    left={'50%'}
    top={'50%'}
    ml={'calc(0px - var(--spinner-size) / 2)'}
    mt={'calc(0px - var(--spinner-size))'}
  />
);
