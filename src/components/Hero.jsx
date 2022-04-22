import { Box, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
  return (
    <Stack direction="row" alignItems="center" justify="space-around">
      <Box w={{ base: '100%', lg: '50%' }} p={{ base: '3rem', lg: 'inherit' }}>
        <Text
          fontSize={{ base: '3xl', md: '4xl', lg: '6xl' }}
          fontWeight="bold"
        >
          Hola, soy Andres Hense, FullStack Developer
        </Text>
      </Box>
      <Box w="50%" p={12} display={{ base: 'none', lg: 'inherit' }}>
        <Image src="images/4136918.jpg" objectFit="contain" />
      </Box>
    </Stack>
  );
};
//author of image <a href="https://www.freepik.com/vectors/backend">Backend vector created by storyset - www.freepik.com</a>
export default Hero;
