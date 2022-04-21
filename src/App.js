import React from 'react';
import { ChakraProvider, Box, theme, Divider } from '@chakra-ui/react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import FullStackProjects from './components/FullStackProjects';
import FrontEndProjects from './components/FrontEndProjects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MyStack from './components/MyStack';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header />
        <Divider />
        <Hero />
        <MyStack />
        <FullStackProjects />
        <FrontEndProjects />
        <AboutMe />
        <ContactMe />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
