import {
  Heading,
  Icon,
  Image,
  Stack,
  StackDivider,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import React from 'react';
import ChakraLogo from './ChakraLogo';

const MyStack = () => {
  return (
    <Stack mt={12}>
      <Heading>Tecnologias que manejo:</Heading>
      <Stack
        direction="row"
        divider={<StackDivider borderColor="gray.200" />}
        justify="center"
        pt={14}
        spacing={12}
      >
        <Stack>
          <Text fontWeight="bold">Front End</Text>
          <Stack direction="row" pt={3} spacing={3}>
            <Stack>
              <Tooltip label="React">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  w="60px"
                  h="60px"
                />
              </Tooltip>
            </Stack>
            <Stack>
              <Tooltip label="redux">
                <Image src="images/redux.svg" w="60px" h="60px" />
              </Tooltip>
            </Stack>
            <Stack>
              <Tooltip label="Bootstrap 5">
                <Image src="images/bootstrap-5-1.svg" w="60px" h="60px" />
              </Tooltip>
            </Stack>
            <Stack>
              <Tooltip label="Chakra UI">
                <Image src="images/chakra-ui.svg" w="60px" h="60px" />
              </Tooltip>
            </Stack>
          </Stack>
        </Stack>

        <Stack>
          <Text fontWeight="bold">Back End</Text>
          <Stack direction="row" pt={3} spacing={3}>
            <Stack>
              <Tooltip label="PostgreSQL">
                <Image src="images/postgresql.svg" w="60px" h="60px" />
              </Tooltip>
            </Stack>
            <Stack>
              <Tooltip label="MongoDB">
                <Image src="images/mongodb-icon-1.svg" w="60px" h="60px" />
              </Tooltip>
            </Stack>
            <Stack>
              <Tooltip label="Node.js">
                <Image src="images/nodejs-icon.svg" w="60px" h="60px" />
              </Tooltip>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Text fontWeight="bold">Languages and Tools</Text>
          <Stack direction="row" pt={3}>
            <Stack direction="row" mx="3rem" spacing={3}>
              <Stack>
                <Tooltip label="Javascript">
                  <Image src="images/js.svg" w="60px" h="60px" />
                </Tooltip>
              </Stack>
              <Stack>
                <Tooltip label="Typescript">
                  <Image src="images/typescript.svg" w="60px" h="60px" />
                </Tooltip>
              </Stack>
              <Stack>
                <Tooltip label="C/C++">
                  <Image src="images/c.svg" w="60px" h="60px" />
                </Tooltip>
              </Stack>
              <Stack direction="row">
                <Stack>
                  <Tooltip label="Git">
                    <Image src="images/git-icon.svg" w="60px" h="60px" />
                  </Tooltip>
                </Stack>
                <Stack>
                  <Tooltip label="Github">
                    <Image src="images/github-icon-1.svg" w="60px" h="60px" />
                  </Tooltip>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MyStack;
