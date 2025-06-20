import React from 'react';
import styles from './Home.module.scss';
import HeroSection from '@/src/components/Home/HeroSection';
import SecondSection from '@/src/components/Home/SecondSection';
import ThirdSectionSky from '@/src/components/Home/ThirdSectionSky';
import SuperStarCarouselSection from '@/src/components/Home/SuperStarCarouselSection';
import PosterCarousel from '@/src/components/Home/PosterCarousel';
import ImageStack from '@/src/components/Home/ImageStack';
import QuizSection from '@/src/components/Home/QuizSection';
import MessageInputSection from '@/src/components/Home/MessageInputSection';
import BGAudio from '@/src/components/Home/BGAudio';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <BGAudio />
      <HeroSection />
      <SecondSection />
      <ThirdSectionSky />
      <QuizSection />
      <SuperStarCarouselSection />
      <PosterCarousel />
      <ImageStack />
      <MessageInputSection />
    </>
  );
};

export default Home;
