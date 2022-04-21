import {
  Box,
  Button,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Tecnologies from './Tecnologies';

const Project = ({ data }) => {
  return (
    <Stack
      w="400px"
      h="450px"
      spacing={4}
      borderWidth={1}
      borderColor="gray.100"
      borderRadius="2xl"
      pb={3}
      my={6}
      mx={0}
      px={0}
      boxShadow="0 0 3px gray"
    >
      <Image src={data.image} width="400px" height="250px" borderRadius="2xl" />
      <VStack>
        <Text fontWeight="bold" fontSize="xl">
          {data.title}
        </Text>
        <Tecnologies data={data.tecnologies} />
      </VStack>
      <HStack px={9} py="0.5rem" w="full">
        <Button
          bg="black"
          color="white"
          _hover={{ bg: 'black.400', color: 'white' }}
          as="a"
          href={data.github}
          target="_blank"
          w="50%"
        >
          Github
        </Button>
        <Button
          colorScheme="teal"
          as="a"
          href={data.deploy}
          target="_blank"
          w="50%"
        >
          Deploy
        </Button>
      </HStack>
    </Stack>
  );
};

export default Project;
