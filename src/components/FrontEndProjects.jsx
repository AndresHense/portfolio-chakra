import {
  Box,
  Button,
  HStack,
  ScaleFade,
  Stack,
  Text,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Project from './Project';
import projects from '../constants/frontendData';

const FrontEndProjects = () => {
  const [numProjects, setNumProjects] = useState(4);

  const expandProjects = () => {
    let nextSum =
      projects.length - numProjects < 4 ? projects.length - numProjects : 4;
    if (nextSum === 0) nextSum = -(numProjects - 4);
    setNumProjects(numProjects + nextSum);
    if (!isOpen || numProjects === projects.length) onToggle();
  };

  useEffect(() => {}, [numProjects]);

  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack mb="8rem">
      <HStack justify="center" align="center">
        <Text
          fontWeight="bold"
          fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
          align="center"
          pt={{ base: '1rem', md: '2rem', lg: '3rem' }}
          pb="1rem"
        >
          FrontEnd Projects:
        </Text>
        <Box pt={3} pl="0rem">
          {projects.length > 4 && (
            <Button
              colorScheme="blue"
              size="lg"
              mt={{ base: -3, md: 1, lg: 4 }}
              onClick={expandProjects}
            >
              See more
            </Button>
          )}
        </Box>
      </HStack>
      <Wrap
        align="center"
        justify="center"
        spacing={8}
        w="95%"
        alignSelf="center"
      >
        <WrapItem key={projects[0].title}>
          <Project data={projects[0]} key={projects[0].title} />
        </WrapItem>
        <WrapItem key={projects[1].title}>
          <Project data={projects[1]} key={projects[1].title} />
        </WrapItem>
        <WrapItem key={projects[2].title}>
          <Project data={projects[2]} key={projects[2].title} />
        </WrapItem>
        <WrapItem key={projects[3].title}>
          <Project data={projects[3]} key={projects[3].title} />
        </WrapItem>
        {projects.slice(4, numProjects).map(project => (
          <WrapItem key={project.title}>
            <ScaleFade initialScale={0.9} in={isOpen}>
              <Project data={project} key={project.title} />
            </ScaleFade>
          </WrapItem>
        ))}
      </Wrap>
    </Stack>
  );
};

export default FrontEndProjects;
