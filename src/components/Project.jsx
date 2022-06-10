import {
  Button,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Tecnologies from './Tecnologies';

const Project = ({ data }) => {
  const [projectImage, setProjectImage] = useState(data.image);
  const [isGif, setIsGif] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isGif) {
      setProjectImage(data.gif);
    } else {
      setProjectImage(data.image);
    }
  }, [data, isGif]);

  const handleHover = () => {
    setIsGif(!isGif);
    //setProjectImage('yellow');
  };

  return (
    <Stack
      w="400px"
      h="430px"
      spacing={4}
      borderWidth={1}
      borderColor="gray.100"
      borderRadius="2xl"
      pb={3}
      my={1}
      mx={0}
      px={0}
      boxShadow="0 0 3px gray"
    >
      <Skeleton isLoaded={!loading}>
        <Image
          width="400px"
          src={projectImage}
          height="250px"
          objectFit="cover"
          borderTopRadius="2xl"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          alt={data.title}
          onLoad={() => {
            setLoading(false);
          }}
        />
      </Skeleton>
      <VStack>
        <Text fontWeight="bold" fontSize="xl">
          {data.title}
        </Text>
        <Tecnologies data={data.tecnologies} />
      </VStack>
      <HStack px={9} py="0.5rem" w="full" align="center" pt={3}>
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
