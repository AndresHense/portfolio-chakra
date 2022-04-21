import { Button, Divider, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Stack
      justifyContent="space-between"
      direction="row"
      color="balck"
      alignItems="center"
      px="3rem"
      py="1rem"
    >
      <Text as="h1">Andres Hense</Text>
      <Stack direction="row" spacing={8} alignItems="center">
        <Link>About Me</Link>
        <Link>Projects</Link>
        <Link>Contact Me</Link>
        <Button as="a" href="CV-Hense.pdf" target="_blank" color="black">
          Download CV
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;
