'use client';
import styles from './QuizSection.module.scss';

import React, { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

interface ParallaxContainerProps {
  children: ReactNode;
  containerMovement?: number;
  imageMovement?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ParallaxContainer: React.FC<ParallaxContainerProps> = ({
  children,
  containerMovement = -10,
  imageMovement = -10,
  className = '',
  style = {},
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const mouseMoveHandler = useRef<((event: MouseEvent) => void) | null>(null);

  const parallaxIt = (
    e: MouseEvent,
    container: HTMLElement,
    target: HTMLElement,
    movement: number,
  ): void => {
    const rect = container.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    gsap.to(target, {
      duration: 1,
      transformStyle: 'preserve-3d',
      x:
        ((relX - container.offsetWidth / 2) / container.offsetWidth) * movement,
      y:
        ((relY - container.offsetHeight / 2) / container.offsetHeight) *
        movement,
    });
  };

  const handleMouseEnter = (e: MouseEvent): void => {
    const container = containerRef.current;
    const innerImage = imageRef.current;

    if (container && innerImage) {
      mouseMoveHandler.current = (evt: MouseEvent) => {
        parallaxIt(evt, container, container, containerMovement);
        parallaxIt(evt, container, innerImage, imageMovement);
      };

      container.addEventListener('mousemove', mouseMoveHandler.current);
    }
  };

  const handleMouseLeave = (e: MouseEvent): void => {
    const container = containerRef.current;
    const innerImage = imageRef.current;

    if (container && innerImage) {
      if (mouseMoveHandler.current) {
        container.removeEventListener('mousemove', mouseMoveHandler.current);
        mouseMoveHandler.current = null;
      }

      gsap.to([container, innerImage], {
        duration: 1,
        x: 0,
        y: 0,
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
        if (mouseMoveHandler.current) {
          container.removeEventListener('mousemove', mouseMoveHandler.current);
        }
      };
    }
  }, [containerMovement, imageMovement]);

  return (
    <div
      ref={containerRef}
      data-parallax
      className={className}
      style={{ cursor: 'pointer', ...style }}
    >
      <div ref={imageRef} style={{ height: '100%', width: '100%' }}>
        {children}
      </div>
    </div>
  );
};

// Example usage component with real images
interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
}

const ParallaxDemo: React.FC = () => {
  // Sample images - replace with your actual image URL

  return (
    <section className={styles.container}>
      <ParallaxContainer
        containerMovement={-10}
        imageMovement={-10}
        className={styles.section}
      >
        {/* Main image */}
        <Image
          src="/home/quiz-section/tb1.png"
          alt="Starry night sky"
          height={4320}
          width={1770}
          className={styles.bgimage}
        />
        <Image
          src="/home/quiz-section/tb2.png"
          alt="Starry night sky"
          height={4320}
          width={1770}
          className={styles.bgimage}
        />
        <Image
          src="/home/quiz-section/tb2.png"
          alt="Starry night sky"
          height={4320}
          width={1770}
          className={styles.bgimage}
        />
        <Image
          src="/home/quiz-section/tb3.png"
          alt="Starry night sky"
          height={4320}
          width={1770}
          className={styles.bgimage}
        />
        <Image
          src="/home/quiz-section/tb4.png"
          alt="Starry night sky"
          height={4320}
          width={1770}
          className={styles.bgimage}
        />
        <Image
          src="/home/quiz-section/tb5.png"
          alt="Starry night sky"
          height={4320}
          width={1770}
          className={styles.bgimage}
        />
        <Image
          src="/home/quiz-section/tb6.png"
          alt="Starry night sky"
          height={4320}
          width={1770}
          className={styles.bgimage}
        />
      </ParallaxContainer>
      <div className={`${styles.logocont} `}>
        <Image
          src="/home/quiz-section/logo1.png"
          alt="Starry night sky"
          height={4320}
          width={1770}
          className={styles.bgimage}
        />
        <Image
          src="/home/quiz-section/logo2.png"
          alt="Starry night sky"
          height={4320}
          width={1770}
          className={`${styles.bgimage} ${styles.floating}`}
        />
        <Image
          src="/home/quiz-section/logo3.png"
          alt="Starry night sky"
          height={4320}
          width={1770}
          className={styles.bgimage}
        />
      </div>
    </section>
  );
};

export default ParallaxDemo;
export { ParallaxContainer };
export type { ParallaxContainerProps };
