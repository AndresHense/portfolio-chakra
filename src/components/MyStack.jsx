import { Heading, Stack, StackDivider, Text } from '@chakra-ui/react';
import React from 'react';
import Tech from './Tech';

const frontTech = [
  {
    label: 'React',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  { label: 'Redux', image: 'images/redux.svg' },
  {
    label: 'Chakra UI',
    image: 'images/chakra-ui.svg',
  },
  { label: 'Bootsrap 5', image: 'images/bootstrap-5-1.svg' },
];

const backTech = [
  { label: 'PostgreSQL', image: 'images/postgresql.svg' },
  { label: 'MongoDB', image: 'images/mongodb-icon-1.svg' },
  { label: 'NodeJs', image: 'images/nodejs-icon.svg' },
];

const randTech = [
  { label: 'Javascript', image: 'images/js.svg' },
  { label: 'Typescript', image: 'images/typescript.svg' },
  { label: 'C/C++', image: 'images/c.svg' },
  { label: 'Git', image: 'images/git-icon.svg' },
  { label: 'GitHub', image: 'images/github-icon-1.svg' },
];

const MyStack = () => {
  return (
    <Stack mt={{ base: 4, lg: 12 }}>
      <Heading fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}>
        Tecnologias que manejo:
      </Heading>
      <Stack
        direction={{ base: 'column', md: 'column', lg: 'row' }}
        divider={<StackDivider borderColor="gray.200" />}
        justify="center"
        pt={14}
        spacing={12}
      >
        <Stack>
          <Text fontWeight="bold">Front End</Text>
          <Stack
            direction="row"
            pt={3}
            spacing={3}
            align="center"
            justify="center"
          >
            {frontTech.map(tech => (
              <Tech image={tech.image} label={tech.label} />
            ))}
          </Stack>
        </Stack>

        <Stack>
          <Text fontWeight="bold">Back End</Text>
          <Stack
            direction="row"
            pt={3}
            spacing={3}
            justify="center"
            align="center"
          >
            {backTech.map(tech => (
              <Tech image={tech.image} label={tech.label} />
            ))}
          </Stack>
        </Stack>
        <Stack>
          <Text fontWeight="bold">Languages and Tools</Text>
          <Stack direction="row" pt={3} justify="center" align="center">
            <Stack direction="row" mx="3rem" spacing={3}>
              {randTech.map(tech => (
                <Tech image={tech.image} label={tech.label} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MyStack;
