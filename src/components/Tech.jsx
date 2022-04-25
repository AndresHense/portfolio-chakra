import { Image, Stack, Tooltip } from '@chakra-ui/react';
import React from 'react';

const Tech = ({ label, image }) => {
  return (
    <Stack>
      <Tooltip label={label}>
        <Image src={image} w="60px" h="60px" alt={label} />
      </Tooltip>
    </Stack>
  );
};

export default Tech;
