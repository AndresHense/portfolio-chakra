import { HStack, IconButton, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const AboutMe = ({ isEnglish }) => {
  return (
    <Stack
      direction={{ base: 'column', md: 'column', lg: 'row' }}
      p="2rem"
      align="center"
      my={{ base: 4, md: 10, lg: 16 }}
    >
      <VStack
        w={{ base: '100%', md: '100%', lg: '50%' }}
        spacing={{ base: 2, md: 4, lg: 6 }}
      >
        <Text
          as="h1"
          fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }}
          fontWeight="bold"
          align="center"
          fontFamily="Manrope"
        >
          {isEnglish ? 'About Me' : 'Sobre Mi'}
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

      <VStack
        w={{ base: '100%', md: '100%', lg: '35%' }}
        justify="center"
        pt={6}
      >
        <Text align="start" mb={-1} fontFamily="mono">
          {isEnglish
            ? `I'm Andres, I'm 22 years old and I live in Buenos Aires, Argentina. I'm a junior FullStack developer who has a sligthy edge over FrontEnd`
            : `Soy Andres, tengo 22 años y vivo en Buenos Aires, Argentina. Soy un junior FullStack developer con mucha mañia para el frontend.`}
        </Text>
        <Text align="start" fontFamily="mono" mb={-1}>
          {isEnglish
            ? `I enjoy taking UI designs and implement them as web apps.`
            : `Disfruto agarrar diseños UIs y convertirlos en paginas webs
            funcionales.`}
        </Text>
        <Text align="start" fontFamily="mono">
          {isEnglish
            ? `I started studying web development as autodidact in 2020 and now
             I'm a 3rd year Computer Science student at the university of Buenos Aires
              who is currently looking for job opportunities while honing his skills.`
            : `Comencé a estudiar desarrollo web de forma autodidacta en el año 2020,
            actualmente curso el 3er año en la carrera Ciencias de la Computación
            de la UBA mientras busco oportunidades laborales y mejoro mis skills.`}
        </Text>
      </VStack>
    </Stack>
  );
};

export default AboutMe;
