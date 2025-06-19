// 'use client';
// import { Box, Grid, Typography } from '@mui/material';
// import React from 'react';
// import styles from './SuperStarCarouselSection.module.scss';
// import { Abhaya_Libre } from 'next/font/google';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, FreeMode } from 'swiper/modules';

// const paytoneFont = Abhaya_Libre({
//   weight: ['800'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './style.scss';
// import Image from 'next/image';

// // import './styles.css';

// type Props = {};

// const SuperStarCarouselSection = (props: Props) => {
//   return (
//     <Box component={'section'} className={styles.section}>
//       <Typography
//         variant="h4"
//         style={{ fontFamily: paytoneFont.style.fontFamily }}
//       >
//         50 YEARS
//       </Typography>
//       <Typography
//         variant="h5"
//         style={{ fontFamily: paytoneFont.style.fontFamily }}
//       >
//         1 SUPERSTAR
//       </Typography>
//       <Box component={'div'} className={styles.carouselSection}>
//         <Swiper
//           slidesPerView={'auto'}
//           spaceBetween={30}
//           freeMode={true}
//           autoplay
//           loop
//           modules={[FreeMode, Autoplay]}
//           className="mySwiper"
//         >
//           <SwiperSlide>
//             <Box component={'div'} className={styles.slideSection1}>
//               <Box component={'div'} className={styles.carouselTextBox}>
//                 <Typography>
//                   Lorem ipsum dolor sit amet consectetur. Convallis viverra
//                 </Typography>
//               </Box>
//               <Image
//                 src={'/home/super-star-carousel/1.png'}
//                 height={358}
//                 width={252}
//                 alt="rajnikant image"
//               />
//               <Box component={'div'} className={styles.carouselTextBox}>
//                 <Typography>
//                   Lorem ipsum dolor sit amet consectetur. Convallis viverra
//                 </Typography>
//               </Box>
//             </Box>
//           </SwiperSlide>
//           <SwiperSlide>
//             <Box component={'div'} className={styles.slideSection2}>
//               <Grid container rowSpacing={3}>
//                 <Grid
//                   container
//                   size={12}
//                   alignItems={'stretch'}
//                   justifyContent={'space-between'}
//                   columnSpacing={3}
//                 >
//                   <Grid size={7}>
//                     <Image
//                       src={'/home/super-star-carousel/5.png'}
//                       height={350}
//                       width={230}
//                       alt="rajnikant image"
//                     />
//                   </Grid>
//                   <Grid
//                     size={5}
//                     container
//                     alignItems={'stretch'}
//                     justifyContent={'space-between'}
//                   >
//                     <Grid size={12} container alignItems={'flex-start'}>
//                       <Box component={'div'} className={styles.carouselTextBox}>
//                         <Typography>
//                           Lorem ipsum dolor sit amet consectetur. Convallis
//                           viverra
//                         </Typography>
//                       </Box>
//                     </Grid>
//                     <Grid size={12} container alignItems={'flex-end'}>
//                       <Box component={'div'} className={styles.carouselTextBox}>
//                         <Typography>
//                           Lorem ipsum dolor sit amet consectetur. Convallis
//                           viverra
//                         </Typography>
//                       </Box>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//                 <Grid container size={12} columnSpacing={3}>
//                   <Grid size={5}>
//                     <Image
//                       src={'/home/super-star-carousel/3.png'}
//                       height={254}
//                       width={350}
//                       alt="rajnikant image"
//                     />
//                   </Grid>
//                   <Grid size={7}>
//                     <Image
//                       src={'/home/super-star-carousel/9.png'}
//                       height={350}
//                       width={350}
//                       alt="rajnikant image"
//                     />
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Box>
//           </SwiperSlide>
//           <SwiperSlide>
//             <Box component={'div'} className={styles.slideSection2}>
//               <Grid
//                 container
//                 rowSpacing={5.8}
//                 alignItems={'stretch'}
//                 justifyContent={'space-between'}
//               >
//                 <Grid container size={12} columnSpacing={3}>
//                   <Image
//                     src={'/home/super-star-carousel/11.png'}
//                     height={640}
//                     width={350}
//                     alt="rajnikant image"
//                   />
//                 </Grid>
//                 <Grid
//                   container
//                   size={12}
//                   alignItems={'stretch'}
//                   justifyContent={'space-between'}
//                   columnSpacing={3}
//                 >
//                   <Grid size={7}>
//                     <Image
//                       src={'/home/super-star-carousel/7.png'}
//                       height={350}
//                       width={230}
//                       alt="rajnikant image"
//                     />
//                   </Grid>
//                   <Grid
//                     size={5}
//                     container
//                     alignItems={'stretch'}
//                     justifyContent={'space-between'}
//                   >
//                     <Grid size={12} container alignItems={'flex-start'}>
//                       <Box component={'div'} className={styles.carouselTextBox}>
//                         <Typography>
//                           Lorem ipsum dolor sit amet consectetur. Convallis
//                           viverra
//                         </Typography>
//                       </Box>
//                     </Grid>
//                     <Grid size={12} container alignItems={'flex-end'}>
//                       <Box component={'div'} className={styles.carouselTextBox}>
//                         <Typography>
//                           Lorem ipsum dolor sit amet consectetur. Convallis
//                           viverra
//                         </Typography>
//                       </Box>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Box>
//           </SwiperSlide>
//           <SwiperSlide>
//             <Box component={'div'} className={styles.slideSection1}>
//               <Box component={'div'} className={styles.carouselTextBox}>
//                 <Typography>
//                   Lorem ipsum dolor sit amet consectetur. Convallis viverra
//                 </Typography>
//               </Box>
//               <Image
//                 src={'/home/super-star-carousel/2.png'}
//                 height={358}
//                 width={252}
//                 alt="rajnikant image"
//               />
//               <Box component={'div'} className={styles.carouselTextBox}>
//                 <Typography>
//                   Lorem ipsum dolor sit amet consectetur. Convallis viverra
//                 </Typography>
//               </Box>
//             </Box>
//           </SwiperSlide>
//           <SwiperSlide>
//             <Box component={'div'} className={styles.slideSection2}>
//               <Grid container rowSpacing={3}>
//                 <Grid
//                   container
//                   size={12}
//                   alignItems={'stretch'}
//                   justifyContent={'space-between'}
//                   columnSpacing={3}
//                 >
//                   <Grid size={7}>
//                     <Image
//                       src={'/home/super-star-carousel/6.png'}
//                       height={350}
//                       width={230}
//                       alt="rajnikant image"
//                     />
//                   </Grid>
//                   <Grid
//                     size={5}
//                     container
//                     alignItems={'stretch'}
//                     justifyContent={'space-between'}
//                   >
//                     <Grid size={12} container alignItems={'flex-start'}>
//                       <Box component={'div'} className={styles.carouselTextBox}>
//                         <Typography>
//                           Lorem ipsum dolor sit amet consectetur. Convallis
//                           viverra
//                         </Typography>
//                       </Box>
//                     </Grid>
//                     <Grid size={12} container alignItems={'flex-end'}>
//                       <Box component={'div'} className={styles.carouselTextBox}>
//                         <Typography>
//                           Lorem ipsum dolor sit amet consectetur. Convallis
//                           viverra
//                         </Typography>
//                       </Box>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//                 <Grid container size={12} columnSpacing={3}>
//                   <Grid size={5}>
//                     <Image
//                       src={'/home/super-star-carousel/4.png'}
//                       height={254}
//                       width={350}
//                       alt="rajnikant image"
//                     />
//                   </Grid>
//                   <Grid size={7}>
//                     <Image
//                       src={'/home/super-star-carousel/10.png'}
//                       height={350}
//                       width={350}
//                       alt="rajnikant image"
//                     />
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Box>
//           </SwiperSlide>
//           <SwiperSlide>
//             <Box component={'div'} className={styles.slideSection2}>
//               <Grid
//                 container
//                 rowSpacing={5.8}
//                 alignItems={'stretch'}
//                 justifyContent={'space-between'}
//               >
//                 <Grid container size={12} columnSpacing={3}>
//                   <Image
//                     src={'/home/super-star-carousel/12.png'}
//                     height={640}
//                     width={350}
//                     alt="rajnikant image"
//                   />
//                 </Grid>
//                 <Grid
//                   container
//                   size={12}
//                   alignItems={'stretch'}
//                   justifyContent={'space-between'}
//                   columnSpacing={3}
//                 >
//                   <Grid size={7}>
//                     <Image
//                       src={'/home/super-star-carousel/8.png'}
//                       height={350}
//                       width={230}
//                       alt="rajnikant image"
//                     />
//                   </Grid>
//                   <Grid
//                     size={5}
//                     container
//                     alignItems={'stretch'}
//                     justifyContent={'space-between'}
//                   >
//                     <Grid size={12} container alignItems={'flex-start'}>
//                       <Box component={'div'} className={styles.carouselTextBox}>
//                         <Typography>
//                           Lorem ipsum dolor sit amet consectetur. Convallis
//                           viverra
//                         </Typography>
//                       </Box>
//                     </Grid>
//                     <Grid size={12} container alignItems={'flex-end'}>
//                       <Box component={'div'} className={styles.carouselTextBox}>
//                         <Typography>
//                           Lorem ipsum dolor sit amet consectetur. Convallis
//                           viverra
//                         </Typography>
//                       </Box>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Box>
//           </SwiperSlide>
//         </Swiper>
//       </Box>
//     </Box>
//   );
// };

// export default SuperStarCarouselSection;
'use client';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import React, { useRef } from 'react';
import styles from './SuperStarCarouselSection.module.scss';
import { Abhaya_Libre } from 'next/font/google';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

const paytoneFont = Abhaya_Libre({
  weight: ['800'],
  subsets: ['latin'],
  display: 'swap',
});

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.scss';
import Image from 'next/image';

// Custom navigation icons (you can replace with your preferred icons)
const ArrowLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="15,18 9,12 15,6"></polyline>
  </svg>
);

const ArrowRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="9,18 15,12 9,6"></polyline>
  </svg>
);

type Props = {};

const SuperStarCarouselSection = (props: Props) => {
  // @ts-expect-error dkjbf
  const swiperRef = useRef<SwiperType>();

  return (
    <Box component={'section'} className={styles.section}>
      <Typography
        variant="h4"
        style={{ fontFamily: paytoneFont.style.fontFamily }}
      >
        50 YEARS
      </Typography>
      <Typography
        variant="h5"
        style={{ fontFamily: paytoneFont.style.fontFamily }}
      >
        1 SUPERSTAR
      </Typography>

      <Box
        component={'div'}
        className={styles.carouselSection}
        sx={{ position: 'relative' }}
      >
        {/* Custom Navigation Buttons */}
        <IconButton
          className={styles.navButton + ' ' + styles.navButtonPrev}
          onClick={() => swiperRef.current?.slidePrev()}
          sx={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            width: '50px',
            height: '50px',
          }}
        >
          <ArrowLeft />
        </IconButton>

        <IconButton
          className={styles.navButton + ' ' + styles.navButtonNext}
          onClick={() => swiperRef.current?.slideNext()}
          sx={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            width: '50px',
            height: '50px',
          }}
        >
          <ArrowRight />
        </IconButton>

        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={'auto'}
          spaceBetween={30}
          freeMode={false} // Disable freeMode for smoother autoplay
          speed={12000} // Smooth transition speed (1 second)
          autoplay={{
            delay: 0, // 4 second delay between slides
            disableOnInteraction: false, // Continue autoplay after user interaction
            pauseOnMouseEnter: true, // Pause on hover
          }}
          loop={true}
          loopAdditionalSlides={2} // Ensures smooth infinite loop
          centeredSlides={false}
          grabCursor={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          // Additional settings for smoother experience
          watchSlidesProgress={true}
          parallax={true}
          // Responsive breakpoints
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 'auto',
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <Box component={'div'} className={styles.slideSection1}>
              <Box component={'div'} className={styles.carouselTextBox}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur. Convallis viverra
                </Typography>
              </Box>
              <Image
                src={'/home/super-star-carousel/1.png'}
                height={358}
                width={252}
                alt="rajnikant image"
              />
              <Box component={'div'} className={styles.carouselTextBox}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur. Convallis viverra
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box component={'div'} className={styles.slideSection2}>
              <Grid container rowSpacing={3}>
                <Grid
                  container
                  size={12}
                  alignItems={'stretch'}
                  justifyContent={'space-between'}
                  columnSpacing={3}
                >
                  <Grid size={7}>
                    <Image
                      src={'/home/super-star-carousel/5.png'}
                      height={350}
                      width={230}
                      alt="rajnikant image"
                    />
                  </Grid>
                  <Grid
                    size={5}
                    container
                    alignItems={'stretch'}
                    justifyContent={'space-between'}
                  >
                    <Grid size={12} container alignItems={'flex-start'}>
                      <Box component={'div'} className={styles.carouselTextBox}>
                        <Typography>
                          Lorem ipsum dolor sit amet consectetur. Convallis
                          viverra
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid size={12} container alignItems={'flex-end'}>
                      <Box component={'div'} className={styles.carouselTextBox}>
                        <Typography>
                          Lorem ipsum dolor sit amet consectetur. Convallis
                          viverra
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container size={12} columnSpacing={3}>
                  <Grid size={5}>
                    <Image
                      src={'/home/super-star-carousel/3.png'}
                      height={254}
                      width={350}
                      alt="rajnikant image"
                    />
                  </Grid>
                  <Grid size={7}>
                    <Image
                      src={'/home/super-star-carousel/9.png'}
                      height={350}
                      width={350}
                      alt="rajnikant image"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box component={'div'} className={styles.slideSection2}>
              <Grid
                container
                rowSpacing={5.8}
                alignItems={'stretch'}
                justifyContent={'space-between'}
              >
                <Grid container size={12} columnSpacing={3}>
                  <Image
                    src={'/home/super-star-carousel/11.png'}
                    height={640}
                    width={350}
                    alt="rajnikant image"
                  />
                </Grid>
                <Grid
                  container
                  size={12}
                  alignItems={'stretch'}
                  justifyContent={'space-between'}
                  columnSpacing={3}
                >
                  <Grid size={7}>
                    <Image
                      src={'/home/super-star-carousel/7.png'}
                      height={350}
                      width={230}
                      alt="rajnikant image"
                    />
                  </Grid>
                  <Grid
                    size={5}
                    container
                    alignItems={'stretch'}
                    justifyContent={'space-between'}
                  >
                    <Grid size={12} container alignItems={'flex-start'}>
                      <Box component={'div'} className={styles.carouselTextBox}>
                        <Typography>
                          Lorem ipsum dolor sit amet consectetur. Convallis
                          viverra
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid size={12} container alignItems={'flex-end'}>
                      <Box component={'div'} className={styles.carouselTextBox}>
                        <Typography>
                          Lorem ipsum dolor sit amet consectetur. Convallis
                          viverra
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box component={'div'} className={styles.slideSection1}>
              <Box component={'div'} className={styles.carouselTextBox}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur. Convallis viverra
                </Typography>
              </Box>
              <Image
                src={'/home/super-star-carousel/2.png'}
                height={358}
                width={252}
                alt="rajnikant image"
              />
              <Box component={'div'} className={styles.carouselTextBox}>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur. Convallis viverra
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box component={'div'} className={styles.slideSection2}>
              <Grid container rowSpacing={3}>
                <Grid
                  container
                  size={12}
                  alignItems={'stretch'}
                  justifyContent={'space-between'}
                  columnSpacing={3}
                >
                  <Grid size={7}>
                    <Image
                      src={'/home/super-star-carousel/6.png'}
                      height={350}
                      width={230}
                      alt="rajnikant image"
                    />
                  </Grid>
                  <Grid
                    size={5}
                    container
                    alignItems={'stretch'}
                    justifyContent={'space-between'}
                  >
                    <Grid size={12} container alignItems={'flex-start'}>
                      <Box component={'div'} className={styles.carouselTextBox}>
                        <Typography>
                          Lorem ipsum dolor sit amet consectetur. Convallis
                          viverra
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid size={12} container alignItems={'flex-end'}>
                      <Box component={'div'} className={styles.carouselTextBox}>
                        <Typography>
                          Lorem ipsum dolor sit amet consectetur. Convallis
                          viverra
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container size={12} columnSpacing={3}>
                  <Grid size={5}>
                    <Image
                      src={'/home/super-star-carousel/4.png'}
                      height={254}
                      width={350}
                      alt="rajnikant image"
                    />
                  </Grid>
                  <Grid size={7}>
                    <Image
                      src={'/home/super-star-carousel/10.png'}
                      height={350}
                      width={350}
                      alt="rajnikant image"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box component={'div'} className={styles.slideSection2}>
              <Grid
                container
                rowSpacing={5.8}
                alignItems={'stretch'}
                justifyContent={'space-between'}
              >
                <Grid container size={12} columnSpacing={3}>
                  <Image
                    src={'/home/super-star-carousel/12.png'}
                    height={640}
                    width={350}
                    alt="rajnikant image"
                  />
                </Grid>
                <Grid
                  container
                  size={12}
                  alignItems={'stretch'}
                  justifyContent={'space-between'}
                  columnSpacing={3}
                >
                  <Grid size={7}>
                    <Image
                      src={'/home/super-star-carousel/8.png'}
                      height={350}
                      width={230}
                      alt="rajnikant image"
                    />
                  </Grid>
                  <Grid
                    size={5}
                    container
                    alignItems={'stretch'}
                    justifyContent={'space-between'}
                  >
                    <Grid size={12} container alignItems={'flex-start'}>
                      <Box component={'div'} className={styles.carouselTextBox}>
                        <Typography>
                          Lorem ipsum dolor sit amet consectetur. Convallis
                          viverra
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid size={12} container alignItems={'flex-end'}>
                      <Box component={'div'} className={styles.carouselTextBox}>
                        <Typography>
                          Lorem ipsum dolor sit amet consectetur. Convallis
                          viverra
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default SuperStarCarouselSection;
