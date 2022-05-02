import { Button, HStack, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Header = ({ isEnglish, setIsEnglish }) => {
  const handleSpanish = () => {
    setIsEnglish(false);
  };
  const handleEnglish = () => {
    setIsEnglish(true);
  };
  return (
    <Stack
      justifyContent="space-between"
      direction="row"
      color="balck"
      alignItems="center"
      px={{ base: 1, sm: 4, md: 6, lg: 8 }}
      py="1rem"
    >
      <HStack align="center" justify="center">
        <Button
          variant="link"
          onClick={handleEnglish}
          _focus={{ outline: 'none' }}
        >
          <Image src="images/gb.svg" boxSize={6} rounded="full" mr={1} />
          {window.innerWidth < 800 ? 'En' : 'English'}
        </Button>
        <Text fontSize="2xl" fontWeight="bold">
          /
        </Text>
        <Button
          variant="link"
          onClick={handleSpanish}
          _focus={{ outline: 'none' }}
        >
          <Image src="images/es.svg" boxSize={6} rounded="full" mr={1} />
          {window.innerWidth < 800 ? 'Es' : 'Español'}
        </Button>
      </HStack>

      <Stack direction="row" spacing={8} alignItems="center">
        <Button colorScheme="teal" as="a" href="CV-Hense.pdf" target="_blank">
          {isEnglish ? 'Download CV' : 'Descargar CV'}
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;
