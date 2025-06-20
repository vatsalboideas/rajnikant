// 'use client';
// import { Box, Modal, Typography } from '@mui/material';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import styles from './PosterCarousel.module.scss';

// type Props = {};

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 700,
//   bgcolor: '#000',
//   border: 'none',
//   outline: 'none',
//   boxShadow: 24,
//   p: 4,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// };

// const PosterCarousel = (props: Props) => {
//   const [isClient, setIsClient] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [imagesSrc, setImageSrc] = useState('');

//   const handleOpen = (src: string) => {
//     setImageSrc(src);
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//     setImageSrc('');
//   };

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     if (!isClient) return;

//     const cloneSlides = () => {
//       const originalSlide = document.querySelector('.logos-slide');
//       const logosContainer = document.querySelector('.logos');

//       if (originalSlide && logosContainer) {
//         // Remove any existing clones first
//         const existingClone =
//           logosContainer.querySelector('.logos-slide-clone');
//         if (existingClone) {
//           existingClone.remove();
//         }

//         // Create and append new clone
//         const clonedSlide = originalSlide.cloneNode(true) as HTMLElement;
//         clonedSlide.classList.remove('logos-slide');
//         clonedSlide.classList.add('logos-slide-clone');
//         clonedSlide.classList.add(styles.logosSlide); // Ensure it has the same styling

//         logosContainer.appendChild(clonedSlide);
//       }
//     };

//     // Try multiple times with increasing delays to ensure DOM is ready
//     const timeouts = [0, 50, 100, 200];
//     const timers = timeouts.map((delay) => setTimeout(cloneSlides, delay));

//     return () => {
//       timers.forEach((timer) => clearTimeout(timer));
//     };
//   }, [isClient]);

//   useEffect(() => {
//     if (!isClient) return;

//     const cloneSlides = () => {
//       const originalSlide = document.querySelector('.logos-slide-1');
//       const logosContainer = document.querySelector('.logos-1');

//       if (originalSlide && logosContainer) {
//         // Remove any existing clones first
//         const existingClone = logosContainer.querySelector(
//           '.logos-slide-clone-1',
//         );
//         if (existingClone) {
//           existingClone.remove();
//         }

//         // Create and append new clone
//         const clonedSlide = originalSlide.cloneNode(true) as HTMLElement;
//         clonedSlide.classList.remove('logos-slide-1');
//         clonedSlide.classList.add('logos-slide-clone-1');
//         clonedSlide.classList.add(styles.logosSlide); // Ensure it has the same styling

//         logosContainer.appendChild(clonedSlide);
//       }
//     };

//     // Try multiple times with increasing delays to ensure DOM is ready
//     const timeouts = [0, 50, 100, 200];
//     const timers = timeouts.map((delay) => setTimeout(cloneSlides, delay));

//     return () => {
//       timers.forEach((timer) => clearTimeout(timer));
//     };
//   }, [isClient]);

//   useEffect(() => {
//     if (!isClient) return;

//     const cloneSlides = () => {
//       const originalSlide = document.querySelector('.logos-slide-2');
//       const logosContainer = document.querySelector('.logos-2');

//       if (originalSlide && logosContainer) {
//         // Remove any existing clones first
//         const existingClone = logosContainer.querySelector(
//           '.logos-slide-clone-2',
//         );
//         if (existingClone) {
//           existingClone.remove();
//         }

//         // Create and append new clone
//         const clonedSlide = originalSlide.cloneNode(true) as HTMLElement;
//         clonedSlide.classList.remove('logos-slide-2');
//         clonedSlide.classList.add('logos-slide-clone-2');
//         clonedSlide.classList.add(styles.logosSlide); // Ensure it has the same styling

//         logosContainer.appendChild(clonedSlide);
//       }
//     };

//     // Try multiple times with increasing delays to ensure DOM is ready
//     const timeouts = [0, 50, 100, 200];
//     const timers = timeouts.map((delay) => setTimeout(cloneSlides, delay));

//     return () => {
//       timers.forEach((timer) => clearTimeout(timer));
//     };
//   }, [isClient]);

//   if (!isClient) {
//     return null; // Prevent hydration mismatch
//   }

//   return (
//     <Box component={'section'} className={styles.section}>
//       <div className={`${styles.logos} logos`}>
//         <div className={`${styles.logosSlide} logos-slide ${styles.animaterl}`}>
//           {[...Array(10)].map((val, idx) => {
//             return (
//               <div
//                 key={idx}
//                 onClick={() =>
//                   handleOpen(`/home/poster-carousel/${idx + 1}.png`)
//                 }
//               >
//                 <img
//                   src={`/home/poster-carousel/${idx + 1}.png`}
//                   alt="rajnikant movie poster"
//                   height={240}
//                   width={240}
//                   style={{ objectFit: 'contain', objectPosition: 'center' }}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className={`${styles.logos} logos-1`}>
//         <div
//           className={`${styles.logosSlide} logos-slide-1 ${styles.animatelr}`}
//         >
//           {[...Array(10)].map((val, idx) => {
//             return (
//               <div key={idx}>
//                 <img
//                   src={`/home/poster-carousel/1${idx}.png`}
//                   alt="rajnikant movie poster"
//                   height={240}
//                   width={240}
//                   style={{ objectFit: 'contain', objectPosition: 'center' }}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className={`${styles.logos} logos-2`}>
//         <div
//           className={`${styles.logosSlide} logos-slide-2 ${styles.animaterl}`}
//         >
//           {[...Array(10)].map((val, idx) => {
//             return (
//               <div key={idx}>
//                 <img
//                   src={`/home/poster-carousel/2${idx}.png`}
//                   alt="rajnikant movie poster"
//                   height={240}
//                   width={240}
//                   style={{ objectFit: 'contain', objectPosition: 'center' }}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Image
//             src={imagesSrc}
//             alt="image alt"
//             height={450}
//             width={450}
//             style={{
//               objectFit: 'contain',
//               objectPosition: 'center',
//             }}
//           />
//         </Box>
//       </Modal>
//     </Box>
//   );
// };

// export default PosterCarousel;
'use client';
import { Box, IconButton, Modal, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './PosterCarousel.module.scss';
import CloseIcon from '@mui/icons-material/Close';

type Props = {};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: '#000',
  border: 'none',
  outline: 'none',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const PosterCarousel = (props: Props) => {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);
  const [imagesSrc, setImageSrc] = useState('');

  const handleOpen = (src: string) => {
    setImageSrc(src);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setImageSrc('');
  };

  // Helper function to add click handlers to images
  const addClickHandlers = (container: Element, pathPrefix: string) => {
    const images = container.querySelectorAll('img');
    images.forEach((img, index) => {
      // Remove existing click handlers to avoid duplicates
      const newImg = img.cloneNode(true) as HTMLImageElement;
      const parent = img.parentNode;
      if (parent) {
        parent.replaceChild(newImg, img);
        newImg.style.cursor = 'pointer';
        newImg.addEventListener('click', () => {
          handleOpen(`${pathPrefix}${index + 1}.png`);
        });
      }
    });
  };

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
        clonedSlide.classList.add(styles.logosSlide);

        logosContainer.appendChild(clonedSlide);

        // Add click handlers to the cloned slide
        addClickHandlers(clonedSlide, '/home/poster-carousel/');
      }
    };

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
        clonedSlide.classList.add(styles.logosSlide);

        logosContainer.appendChild(clonedSlide);

        // Add click handlers to both original and cloned slides
        addClickHandlers(originalSlide, '/home/poster-carousel/1');
        addClickHandlers(clonedSlide, '/home/poster-carousel/1');
      }
    };

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
        clonedSlide.classList.add(styles.logosSlide);

        logosContainer.appendChild(clonedSlide);

        // Add click handlers to both original and cloned slides
        addClickHandlers(originalSlide, '/home/poster-carousel/2');
        addClickHandlers(clonedSlide, '/home/poster-carousel/2');
      }
    };

    const timeouts = [0, 50, 100, 200];
    const timers = timeouts.map((delay) => setTimeout(cloneSlides, delay));

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <Box component={'section'} className={styles.section}>
      <div className={`${styles.logos} logos`}>
        <div className={`${styles.logosSlide} logos-slide ${styles.animaterl}`}>
          {[...Array(10)].map((val, idx) => {
            return (
              <div
                key={idx}
                onClick={() =>
                  handleOpen(`/home/poster-carousel/${idx + 1}.png`)
                }
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={`/home/poster-carousel/${idx + 1}.png`}
                  alt="rajnikant movie poster"
                  height={240}
                  width={240}
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                />
              </div>
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
              <div
                key={idx}
                onClick={() => handleOpen(`/home/poster-carousel/1${idx}.png`)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={`/home/poster-carousel/1${idx}.png`}
                  alt="rajnikant movie poster"
                  height={240}
                  width={240}
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                />
              </div>
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
              <div
                key={idx}
                onClick={() => handleOpen(`/home/poster-carousel/2${idx}.png`)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={`/home/poster-carousel/2${idx}.png`}
                  alt="rajnikant movie poster"
                  height={240}
                  width={240}
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: '10%',
              top: '5%',
              bgcolor: 'white',
              borderRadius: '0',
              '&:hover': {
                bgcolor: 'lightgray', // Change this to whatever hover color you want
                color: 'black', // Optional: Change text color on hover
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Image
            src={imagesSrc}
            alt="image alt"
            height={450}
            width={450}
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default PosterCarousel;
