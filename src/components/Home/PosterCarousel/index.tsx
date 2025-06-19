'use client';
import { Box } from '@mui/material';
import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react';
import styles from './PosterCarousel.module.scss';

type Props = {};

const PosterCarousel = (props: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const cloneSlides = () => {
      const originalSlide = document.querySelector('.logos-slide');
      const logosContainer = document.querySelector('.logos');

      if (originalSlide && logosContainer) {
        // Remove any existing clones first
        const existingClone =
          logosContainer.querySelector('.logos-slide-clone');
        if (existingClone) {
          existingClone.remove();
        }

        // Create and append new clone
        const clonedSlide = originalSlide.cloneNode(true) as HTMLElement;
        clonedSlide.classList.remove('logos-slide');
        clonedSlide.classList.add('logos-slide-clone');
        clonedSlide.classList.add(styles.logosSlide); // Ensure it has the same styling

        logosContainer.appendChild(clonedSlide);
      }
    };

    // Try multiple times with increasing delays to ensure DOM is ready
    const timeouts = [0, 50, 100, 200];
    const timers = timeouts.map((delay) => setTimeout(cloneSlides, delay));

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    const cloneSlides = () => {
      const originalSlide = document.querySelector('.logos-slide-1');
      const logosContainer = document.querySelector('.logos-1');

      if (originalSlide && logosContainer) {
        // Remove any existing clones first
        const existingClone = logosContainer.querySelector(
          '.logos-slide-clone-1',
        );
        if (existingClone) {
          existingClone.remove();
        }

        // Create and append new clone
        const clonedSlide = originalSlide.cloneNode(true) as HTMLElement;
        clonedSlide.classList.remove('logos-slide-1');
        clonedSlide.classList.add('logos-slide-clone-1');
        clonedSlide.classList.add(styles.logosSlide); // Ensure it has the same styling

        logosContainer.appendChild(clonedSlide);
      }
    };

    // Try multiple times with increasing delays to ensure DOM is ready
    const timeouts = [0, 50, 100, 200];
    const timers = timeouts.map((delay) => setTimeout(cloneSlides, delay));

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    const cloneSlides = () => {
      const originalSlide = document.querySelector('.logos-slide-2');
      const logosContainer = document.querySelector('.logos-2');

      if (originalSlide && logosContainer) {
        // Remove any existing clones first
        const existingClone = logosContainer.querySelector(
          '.logos-slide-clone-2',
        );
        if (existingClone) {
          existingClone.remove();
        }

        // Create and append new clone
        const clonedSlide = originalSlide.cloneNode(true) as HTMLElement;
        clonedSlide.classList.remove('logos-slide-2');
        clonedSlide.classList.add('logos-slide-clone-2');
        clonedSlide.classList.add(styles.logosSlide); // Ensure it has the same styling

        logosContainer.appendChild(clonedSlide);
      }
    };

    // Try multiple times with increasing delays to ensure DOM is ready
    const timeouts = [0, 50, 100, 200];
    const timers = timeouts.map((delay) => setTimeout(cloneSlides, delay));

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [isClient]);

  if (!isClient) {
    return null; // Prevent hydration mismatch
  }

  return (
    <Box component={'section'} className={styles.section}>
      <div className={`${styles.logos} logos`}>
        <div className={`${styles.logosSlide} logos-slide ${styles.animaterl}`}>
          {[...Array(10)].map((val, idx) => {
            return (
              <Fragment key={idx}>
                <img
                  src={`/home/poster-carousel/${idx + 1}.png`}
                  alt="rajnikant movie poster"
                  height={240}
                  width={240}
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className={`${styles.logos} logos-1`}>
        <div
          className={`${styles.logosSlide} logos-slide-1 ${styles.animatelr}`}
        >
          {[...Array(10)].map((val, idx) => {
            return (
              <Fragment key={idx}>
                <img
                  src={`/home/poster-carousel/1${idx}.png`}
                  alt="rajnikant movie poster"
                  height={240}
                  width={240}
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
      <div className={`${styles.logos} logos-2`}>
        <div
          className={`${styles.logosSlide} logos-slide-2 ${styles.animaterl}`}
        >
          {[...Array(10)].map((val, idx) => {
            return (
              <Fragment key={idx}>
                <img
                  src={`/home/poster-carousel/2${idx}.png`}
                  alt="rajnikant movie poster"
                  height={240}
                  width={240}
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </Box>
  );
};

export default PosterCarousel;
