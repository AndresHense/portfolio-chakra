import { Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import Project from './Project';

const FullStackProjects = () => {
  const projects = [
    {
      image: 'images/majac.png',
      gif: 'images/majac.png',
      github: 'https://github.com/frontendcafe/cmyk-grape',
      deploy: 'https://github.com/frontendcafe/cmyk-grape/blob/main',
      tecnologies: ['Bootstrap', 'Vainilla JS'],
      title: 'Buscador de Museos de Buenos Aires',
    },
    {
      image: 'images/extracker.png',
      gif: 'images/extracker.png',
      github: 'https://github.com/frontendcafe/cmyk-grape',
      deploy: 'https://github.com/frontendcafe/cmyk-grape/blob/main',
      tecnologies: ['React', 'Content', 'MongoDB', 'NodeJs'],
      title: 'Expense Tracker',
    },
    {
      image: 'images/itjobs.png',
      gif: 'images/itjobs.png',
      github: 'https://github.com/frontendcafe/cmyk-grape',
      deploy: 'https://github.com/frontendcafe/cmyk-grape/blob/main',
      tecnologies: ['NodeJs', 'PostgreSQL'],
      title: 'IT job search',
    },
    {
      image: 'images/shop-mer.png',
      gif: 'images/shop-mer.png',
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
        fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
        align="center"
        justifyContent="center"
        justifyItems="center"
        pt="3rem"
        pb="1rem"
      >
        FullStack Projects:
      </Text>
      <Wrap
        align="center"
        justify="center"
        spacing={8}
        w="95%"
        alignSelf="center"
      >
        {projects.map(project => (
          <WrapItem key={project.title}>
            <Project data={project} key={project.title} />
          </WrapItem>
        ))}
      </Wrap>
    </Stack>
  );
};

export default FullStackProjects;
