import {
  HStack,
  Icon,
  IconButton,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <Stack direction="row" p="2rem" h="360px" align="center" my={16}>
      <VStack w="50%">
        <Text as="h1" fontSize="6xl" fontWeight="bold" align="center">
          Sobre mi
        </Text>
        <HStack>
          <IconButton
            as="a"
            href="https://github.com/AndresHense"
            target="_blank"
            rounded="full"
            size="lg"
            icon={<FaGithub />}
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/andreshense/"
            target="_blank"
            rounded="full"
            size="lg"
            icon={<FaLinkedin />}
          />
        </HStack>
        <Text as="a" fontWeight="bold" pt={1}>
          andreshense@gmail.com
        </Text>
      </VStack>

      <VStack w="35%" justify="center" pt={6}>
        <Text align="start" mb={-1} fontFamily="mono">
          Soy Andres, tengo 22 años y vivo en Buenos Aires, Argentina. Soy un
          junior front-end developer.
        </Text>
        <Text align="start" fontFamily="mono" mb={-1}>
          Me encanta agarrar diseños UIs y implementarlos en paginas Webs
          funcionales.
        </Text>
        <Text align="start" fontFamily="mono">
          Comencé a estudiar desarrollo web de forma autodidacta en el año 2020,
          actualmente curso el 3er año en la carrera Ciencias de la Computación
          de la UBA mientras busco oportunidades laborales y mejoro mis skills.
        </Text>
      </VStack>
    </Stack>
  );
};

export default AboutMe;
