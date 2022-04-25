import { Box, Button, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
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
  };

  useEffect(() => {}, [numProjects]);
  return (
    <Stack mb="8rem">
      <Text
        fontWeight="bold"
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        align="center"
        pt={{ base: '1rem', md: '2rem', lg: '3rem' }}
        pb="1rem"
      >
        FrontEnd Projects:
      </Text>
      <Wrap
        align="center"
        justify="center"
        spacing={8}
        w="95%"
        alignSelf="center"
      >
        {projects.slice(0, numProjects).map(project => (
          <WrapItem key={project.title}>
            <Project data={project} key={project.title} />
          </WrapItem>
        ))}
      </Wrap>
      <Box pt={5}>
        {projects.length > 4 && (
          <Button onClick={expandProjects}>Ver Mas</Button>
        )}
      </Box>
    </Stack>
  );
};

export default FrontEndProjects;
