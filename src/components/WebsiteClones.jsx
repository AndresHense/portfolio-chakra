import React from 'react';
import Project from './Project';
const projects = [
  {
    image: 'images/meli.png',
    gif: 'images/meli.png',
    github: 'https://github.com/AndresHense/mercadolibre-details-challenge',
    deploy: 'https://mercadolibre-details-clone.vercel.app/',
    tecnologies: ['React', 'Chakra UI', 'Typescript'],
    title: 'MeLi Product Details Clone',
  },
];
const WebsiteClones = () => {
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
        Website's Clones:
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

export default WebsiteClones;
