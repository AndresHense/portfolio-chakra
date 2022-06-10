import { Badge, Stack } from '@chakra-ui/react';
import React from 'react';

const badgeType = {
  React: 'blue',
  NodeJs: 'green',
  Bootstrap: 'purple',
  Redux: 'pink',
  MongoDB: 'orange',
  PostgreSQL: 'red',
  'Vainilla JS': 'red',
  Content: 'red',
  Typescript: 'cyan',
  'Framer Motion': 'red',
  'Material UI': 'pink',
  'Chakra UI': 'teal',
};

const Tecnologies = ({ data }) => {
  return (
    <Stack direction="row">
      {data.map((t, id) => (
        <Badge colorScheme={badgeType[t]} key={id}>
          {t}
        </Badge>
      ))}
    </Stack>
  );
};

export default Tecnologies;
