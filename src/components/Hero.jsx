import { Box, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Hero = ({ isEnglish }) => {
  return (
    <Stack direction="row" alignItems="center" justify="space-around">
      <Box
        w={{ base: '100%', lg: '50%' }}
        py={{ base: '3rem', lg: 'inherit' }}
        px={{ base: '1rem', lg: 'inherit' }}
      >
        <Text
          fontSize={{ base: '3xl', md: '4xl', lg: '6xl', xl: '7xl' }}
          fontWeight="bold"
          lineHeight={1.25}
          fontFamily="Manrope"
          letterSpacing={4}
          px={{ base: 1, md: 10, lg: 16 }}
        >
          {isEnglish
            ? "Hi!, I'm Andres Hense, a Full Stack Developer"
            : 'Hola, soy Andres Hense, un FullStack Developer'}
        </Text>
      </Box>
      <Box w="50%" p={12} display={{ base: 'none', lg: 'inherit' }}>
        <Image src="images/4136918.jpg" objectFit="cover" />
      </Box>
    </Stack>
  );
};
//author of image <a href="https://www.freepik.com/vectors/backend">Backend vector created by storyset - www.freepik.com</a>
export default Hero;
