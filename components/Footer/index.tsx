import { Box } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      opacity={0.4}
      fontSize={'sm'}
    >
      &copy; {new Date().getFullYear()} Achmad Andy Dekanovy. All Rights
      Reserved.
    </Box>
  );
};
