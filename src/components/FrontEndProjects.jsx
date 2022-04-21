import { Box, Button, Stack, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Project from './Project';

const projects = [
  {
    image: 'images/majac.png',
    github: 'https://github.com/frontendcafe/cmyk-grape',
    deploy: 'https://github.com/frontendcafe/cmyk-grape/blob/main',
    tecnologies: ['Bootstrap', 'Vainilla JS'],
    title: 'Buscador de Museos de Buenos Aires',
  },
  {
    image: 'images/extracker.png',
    github: 'https://github.com/frontendcafe/cmyk-grape',
    deploy: 'https://github.com/frontendcafe/cmyk-grape/blob/main',
    tecnologies: ['React', 'Content', 'MongoDB', 'NodeJs'],
    title: 'Expense Tracker',
  },
  {
    image: 'images/itjobs.png',
    github: 'https://github.com/frontendcafe/cmyk-grape',
    deploy: 'https://github.com/frontendcafe/cmyk-grape/blob/main',
    tecnologies: ['NodeJs', 'PostgreSQL'],
    title: 'IT job search',
  },
  {
    image: 'images/shop-mer.png',
    github: 'https://github.com/frontendcafe/cmyk-grape',
    deploy: 'https://github.com/frontendcafe/cmyk-grape/blob/main',
    tecnologies: ['React', 'Redux', 'Bootstrap', 'NodeJs', 'MongoDB'],
    title: 'E-commerce',
  },
  {
    image: 'images/majac.png',
    github: 'https://github.com/frontendcafe/cmyk-grape',
    deploy: 'https://github.com/frontendcafe/cmyk-grape/blob/main',
    tecnologies: ['Bootstrap', 'Vainilla JS'],
    title: 'Buscador de Museos de Buenos Aires2',
  },
  {
    image: 'images/extracker.png',
    github: 'https://github.com/frontendcafe/cmyk-grape',
    deploy: 'https://github.com/frontendcafe/cmyk-grape/blob/main',
    tecnologies: ['React', 'Content', 'MongoDB', 'NodeJs'],
    title: 'Expense Tracker2',
  },
  {
    image: 'images/itjobs.png',
    github: 'https://github.com/frontendcafe/cmyk-grape',
    deploy: 'https://github.com/frontendcafe/cmyk-grape/blob/main',
    tecnologies: ['NodeJs', 'PostgreSQL'],
    title: 'IT job search2',
  },
  {
    image: 'images/shop-mer.png',
    github: 'https://github.com/frontendcafe/cmyk-grape',
    deploy: 'https://github.com/frontendcafe/cmyk-grape/blob/main',
    tecnologies: ['React', 'Redux', 'Bootstrap', 'NodeJs', 'MongoDB'],
    title: 'E-commerce2',
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
    <Stack pt={8}>
      <Text
        fontWeight="bold"
        fontSize="5xl"
        align="start"
        pl="5rem"
        pt="3rem"
        pb="1rem"
      >
        FrontEnd Projects:
      </Text>
      <Stack
        direction="row"
        justifyContent="center"
        align="center"
        spacing={12}
        flexWrap="wrap"
      >
        {projects.slice(0, numProjects).map(project => (
          <Project data={project} key={project.title} />
        ))}
      </Stack>
      <Box pt={5}>
        <Button onClick={expandProjects}>Ver Mas</Button>
      </Box>
    </Stack>
  );
};

export default FrontEndProjects;
