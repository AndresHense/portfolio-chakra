import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Project from './Project';

const FullStackProjects = () => {
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
  ];
  return (
    <Stack pt={8}>
      <Text
        fontWeight="bold"
        fontSize="5xl"
        align="start"
        justifyContent="center"
        justifyItems="center"
        pl="5rem"
        pt="3rem"
        pb="1rem"
      >
        FullStack Projects:
      </Text>
      <Stack
        direction="row"
        justifyContent="center"
        justifyItems="center"
        align="center"
        spacing={6}
      >
        <Project data={projects[0]} />
        <Project data={projects[1]} />
        <Project data={projects[2]} />
        <Project data={projects[3]} />
      </Stack>
    </Stack>
  );
};

export default FullStackProjects;
