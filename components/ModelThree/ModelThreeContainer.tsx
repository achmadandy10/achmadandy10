/* eslint-disable @typescript-eslint/indent */
import { Box } from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';

interface ModelThreeContainerProps {
  children?: ReactNode;
}

export type Ref = HTMLDivElement;

const ModelThreeContainerComponent: ForwardRefRenderFunction<
  Ref,
  ModelThreeContainerProps
> = ({ children }, ref) => {
  return (
    <Box
      ref={ref}
      className="old_computer"
      margin={'auto'}
      marginTop={['-20px', '-60px', '-120px']}
      marginBottom={['-40px', '-140px', '-200px']}
      width={[280, 480, 640]}
      height={[280, 480, 640]}
      position={'relative'}
    >
      {children}
    </Box>
  );
};

export const ModelThreeContainer = forwardRef(ModelThreeContainerComponent);
