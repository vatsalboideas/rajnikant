'use client';
import React from 'react';
import styles from './ThirdSectionSky.module.scss';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

type Props = {};

interface CardData {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  type: 'large' | 'small';
}

const ThirdSectionSky = (props: Props) => {
  const cardData: CardData[] = [
    {
      id: 1,
      title: 'Sports Events',
      subtitle: 'Rise Beyond Limits',
      imageUrl: '/home/thirdsection/1.jpeg',
      type: 'large',
    },
    {
      id: 2,
      title: 'Marathons',
      subtitle: 'Miles of Triumph',
      imageUrl: '/home/thirdsection/2.jpeg',
      type: 'small',
    },
    {
      id: 3,
      title: 'Entertainment',
      subtitle: 'Unveil Joyful Moments',
      imageUrl: '/home/thirdsection/3.jpeg',
      type: 'small',
    },
    {
      id: 4,
      title: 'Social Activities',
      subtitle: 'Connecting Hearts, Together',
      imageUrl: '/home/thirdsection/4.jpeg',
      type: 'small',
    },
    {
      id: 5,
      title: 'Pro Photographer',
      subtitle: 'Lens Crafted Stories',
      imageUrl: '/home/thirdsection/5.jpeg',
      type: 'small',
    },
    {
      id: 6,
      title: 'Music Events',
      subtitle: 'Rhythm of Life',
      imageUrl: '/home/thirdsection/6.jpeg',
      type: 'small',
    },
    {
      id: 7,
      title: 'Food & Drinks',
      subtitle: 'Taste the Extraordinary',
      imageUrl: '/home/thirdsection/7.jpeg',
      type: 'large',
    },
  ];

  const handleCardClick = (card: CardData): void => {
    console.log(`Clicked on ${card.title}`);
    // Add your click handler logic here
  };

  const handleCardHover = (card: CardData, isHovering: boolean): void => {
    if (isHovering) {
      console.log(`Hovering over ${card.title}`);
    }
    // Add your hover handler logic here
  };
  return (
    <Box component={'section'} className={styles.section}>
      <Typography variant="h3" className={styles.title}>
        The sky has no limits... and neither does he
      </Typography>
      {/* <Grid container columns={8} className={styles.imageSection}>
        {[...Array(8)].map((data, index) => {
          return (
            <Grid size={1} key={index} className={styles.imageContainer}>
              <Image
                src={`/home/thirdsection/image${index + 1}.png`}
                alt="rajnikant image"
                height={560}
                width={160}
                className={`${styles.image} ${styles.image1}`}
              />
              <Image
                src={`/home/thirdsection/image${index + 1}.png`}
                alt="rajnikant image"
                height={560}
                width={160}
                className={`${styles.image} ${styles.image2}`}
              />
            </Grid>
          );
        })}
      </Grid> */}
      <Box className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.inner}>
              {cardData.map((card) => (
                <div
                  key={card.id}
                  className={`${styles.card} ${styles[card.type]}`}
                  style={{
                    backgroundImage: `url(${card.imageUrl})`,
                  }}
                  onClick={() => handleCardClick(card)}
                  onMouseEnter={() => handleCardHover(card, true)}
                  onMouseLeave={() => handleCardHover(card, false)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleCardClick(card);
                    }
                  }}
                  aria-label={`${card.title} - ${card.subtitle}`}
                >
                  <div className={styles.text}>
                    <h5 className={styles.title}>{card.title}</h5>
                    <p className={styles.subtitle}>{card.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Box>
      {/* <Container>
      </Container> */}
    </Box>
  );
};

export default ThirdSectionSky;
