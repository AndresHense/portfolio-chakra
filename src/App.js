import React, { useState, useEffect } from 'react';
import { ChakraProvider, Box, theme, Divider } from '@chakra-ui/react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import FullStackProjects from './components/FullStackProjects';
import FrontEndProjects from './components/FrontEndProjects';
import Hero from './components/Hero';
import MyStack from './components/MyStack';
import '@fontsource/barlow-condensed/700.css';
import '@fontsource/manrope/700.css';

function App() {
  const [isEnglish, setIsEnglish] = useState('true');

  useEffect(() => {}, [isEnglish]);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <Divider />
        <Hero isEnglish={isEnglish} />
        <MyStack isEnglish={isEnglish} />
        <FullStackProjects />
        <AboutMe isEnglish={isEnglish} />
        <FrontEndProjects />
      </Box>
    </ChakraProvider>
  );
}

export default App;
