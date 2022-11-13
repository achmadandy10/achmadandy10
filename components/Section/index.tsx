import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ComponentProps, FC } from 'react';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'trasition';
  },
});

type SectionProps = ComponentProps<typeof StyledDiv> & {
  delay?: string;
};

export const Section: FC<SectionProps> = ({
  children,
  delay = '0',
}): JSX.Element => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: '0.8', delay }}
      marginBottom={6}
    >
      {children}
    </StyledDiv>
  );
};
