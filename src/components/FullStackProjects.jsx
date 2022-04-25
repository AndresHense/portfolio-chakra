import { Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import Project from './Project';
import projects from '../constants/fullStackData';

const FullStackProjects = () => {
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
