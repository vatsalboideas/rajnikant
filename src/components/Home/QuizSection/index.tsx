import { Box } from '@mui/material';
import React from 'react';
import styles from './QuizSection.module.scss';
import Image from 'next/image';

type Props = {};

const QuizSection = (props: Props) => {
  return (
    <>
      <Box component={'section'} className={styles.section}>
        <Image
          src={'/home/quiz-section/logo.png'}
          alt="logo image"
          height={569}
          width={551}
          className={styles.logoImage}
        />
      </Box>
    </>
  );
};

export default QuizSection;
