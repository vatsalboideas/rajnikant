import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import styles from './Secondsection.module.scss';

type Props = {};

const SecondSection = (props: Props) => {
  return (
    <Box component={'section'} className={styles.section}>
      <Container>
        <Typography variant="body1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui,
          obcaecati omnis ad accusantium dolorem natus ut. Ipsa doloribus
          eveniet, deleniti nulla ut aperiam excepturi inventore natus
          reiciendis iusto. Facere! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur, ut aperiam explicabo modi nulla quas sequi
          voluptas ullam eius molestias? Quos dolore excepturi quidem
          voluptatibus, aperiam repudiandae suscipit minus facilis!
        </Typography>
        <Typography variant="body1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui,
          obcaecati omnis ad accusantium dolorem natus ut. Ipsa doloribus
          eveniet, deleniti nulla ut aperiam excepturi inventore natus
          reiciendis iusto. Facere! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tenetur, ut aperiam explicabo modi nulla quas sequi
          voluptas ullam eius molestias? Quos dolore excepturi quidem
          voluptatibus, aperiam repudiandae suscipit minus facilis!
        </Typography>
        <Typography variant="body1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui,
          obcaecati omnis ad accusantium dolorem natus ut. Ipsa doloribus
          eveniet, deleniti nulla ut aperiam excepturi inventore natus
          reiciendis iusto. Facere!
        </Typography>
      </Container>
    </Box>
  );
};

export default SecondSection;
