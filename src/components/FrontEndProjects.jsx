import { Box, Button, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Project from './Project';

const projects = [
  {
    image: 'images/pk.png',
    gif: 'videos/pk.gif',
    github: 'https://github.com/AndresHense/guess-pokemon-challenge',
    deploy: 'https://precious-tulumba-59ac2b.netlify.app/',
    tecnologies: ['React', 'Chakra UI', 'Typescript'],
    title: 'Guess the Pokemon',
  },
  {
    image: 'images/advice.png',
    gif: 'videos/advice.gif',
    github: 'https://github.com/AndresHense/advice-generator-app',
    deploy: 'https://tiny-brioche-ac66f4.netlify.app/',
    tecnologies: ['React', 'Chakra UI'],
    title: 'Random Advice Generator',
  },
  {
    image: 'images/landing.png',
    gif: 'videos/landing.gif',
    github: 'https://github.com/AndresHense/intro-section-with-dropdown-nav',
    deploy: 'https://kaleidoscopic-travesseiro-9833ff.netlify.app/',
    tecnologies: ['React', 'Chakra UI'],
    title: 'Landing Page',
  },
  {
    image: 'images/rating.png',
    gif: 'videos/rating.gif',
    github:
      'https://github.com/AndresHense/frontendmentor-interactive-rating-component',
    deploy: 'https://ornate-douhua-1799ea.netlify.app/',
    tecnologies: ['React', 'Chakra UI'],
    title: 'Rating Component',
  },
];

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
      <Text fontWeight="bold" fontSize="5xl" align="center" pt="3rem" pb="1rem">
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
