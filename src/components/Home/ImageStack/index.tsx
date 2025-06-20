// // 'use client';

// // import React, { useEffect, useRef } from 'react';
// // import styles from './ImageStack.module.scss';
// // import gsap from 'gsap';
// // import { useGSAP } from '@gsap/react';
// // import Image from 'next/image';

// // gsap.registerPlugin(useGSAP);

// // const imageArray = [...Array(21)];

// // const getRandomValue = (min: number, max: number) =>
// //   Math.random() * (max - min) + min;

// // const ImageStack = () => {
// //   const containerRef = useRef(null);

// //   // Floating animation for images
// //   // const createFloatingAnimation = () => {
// //   //   const timeline = gsap.timeline({ repeat: -1, yoyo: true });

// //   //   imageArray.forEach((_, index) => {
// //   //     timeline.fromTo(
// //   //       `.image-float-${index}`,
// //   //       { x: 0, y: 0, rotation: 0 },
// //   //       {
// //   //         x: getRandomValue(-10, 10),
// //   //         y: getRandomValue(-10, 10),
// //   //         rotation: getRandomValue(-5, 5),
// //   //         duration: 4,
// //   //         ease: 'sine.inOut',
// //   //       },
// //   //       0,
// //   //     );
// //   //   });
// //   // };

// //   // Mouse parallax effect
// //   useEffect(() => {
// //     const handleMouseMove = (event: MouseEvent) => {
// //       const { clientX, clientY } = event;
// //       const { innerWidth, innerHeight } = window;
// //       const centerX = innerWidth / 2;
// //       const centerY = innerHeight / 2;
// //       const moveX = (clientX - centerX) / innerWidth;
// //       const moveY = (clientY - centerY) / innerHeight;

// //       imageArray.forEach((_, index) => {
// //         const depth = index * 0.5;
// //         gsap.to(`.image-float-${index}`, {
// //           x: moveX * depth * 20,
// //           y: moveY * depth * 20,
// //           duration: 0.5,
// //         });
// //       });
// //     };

// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => window.removeEventListener('mousemove', handleMouseMove);
// //   }, []);

// //   useGSAP(
// //     () => {
// //       // createFloatingAnimation();
// //     },
// //     { scope: containerRef },
// //   );

// //   return (
// //     <section className={styles.secondFoldCont} ref={containerRef}>
// //       <div className={styles.imageBox}>
// //         {/* <Image
// //           src={elementbg}
// //           alt="Background element"
// //           className={styles.element}
// //         /> */}
// //         {imageArray.map((imageSrc, index) => (
// //           <Image
// //             key={index}
// //             width={1440}
// //             height={880}
// //             src={`/home/image-stack/${index + 1}.png`}
// //             alt={`Floating element ${index + 1}`}
// //             className={`${styles.element} image-float-${index}`}
// //           />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default ImageStack;
// 'use client';
// import React, { useEffect, useRef } from 'react';
// import styles from './ImageStack.module.scss';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import Image from 'next/image';
// // imports  ─────────────────────────────────────────────
// import img01 from '@/public/home/image-stack/1.png';
// import img02 from '@/public/home/image-stack/2.png';
// import img03 from '@/public/home/image-stack/3.png';
// import img04 from '@/public/home/image-stack/4.png';
// import img05 from '@/public/home/image-stack/5.png';
// import img06 from '@/public/home/image-stack/6.png';
// import img07 from '@/public/home/image-stack/7.png';
// import img08 from '@/public/home/image-stack/8.png';
// import img09 from '@/public/home/image-stack/9.png';
// import img10 from '@/public/home/image-stack/10.png';
// import img11 from '@/public/home/image-stack/11.png';
// import img12 from '@/public/home/image-stack/12.png';
// import img13 from '@/public/home/image-stack/13.png';
// import img14 from '@/public/home/image-stack/14.png';
// import img15 from '@/public/home/image-stack/15.png';
// import img16 from '@/public/home/image-stack/16.png';
// import img17 from '@/public/home/image-stack/17.png';
// import img18 from '@/public/home/image-stack/18.png';
// import img19 from '@/public/home/image-stack/19.png';
// import img20 from '@/public/home/image-stack/20.png';
// import img21 from '@/public/home/image-stack/21.png';

// // array  ───────────────────────────────────────────────
// export const imageArray = [
//   img01,
//   img02,
//   img03,
//   img04,
//   img05,
//   img06,
//   img07,
//   img08,
//   img09,
//   img10,
//   img11,
//   img12,
//   img13,
//   img14,
//   img15,
//   img16,
//   img17,
//   img18,
//   img19,
//   img20,
//   img21,
// ];

// gsap.registerPlugin(useGSAP);

// const getRandomValue = (min: number, max: number) =>
//   Math.random() * (max - min) + min;

// const ImageStack = () => {
//   const containerRef = useRef(null);

//   // Mouse parallax effect
//   useEffect(() => {
//     const handleMouseMove = (event: MouseEvent) => {
//       const { clientX, clientY } = event;
//       const { innerWidth, innerHeight } = window;
//       const centerX = innerWidth / 2;
//       const centerY = innerHeight / 2;
//       const moveX = (clientX - centerX) / innerWidth;
//       const moveY = (clientY - centerY) / innerHeight;
//       imageArray.forEach((_, index) => {
//         const depth = index * 0.5;
//         const element = document.querySelector(
//           `.image-float-${index}`,
//         ) as HTMLElement;
//         if (element) {
//           // Kill any existing animations on this element to prevent conflicts
//           // gsap.killTweensOf(element);
//           // Set transform origin to center
//           // gsap.set(element, {
//           //   transformOrigin: 'center center',
//           // });
//           // Apply the parallax movement
//           gsap.to(element, {
//             x: moveX * depth * 20,
//             y: moveY * depth * 20,
//             duration: 0.3,
//             ease: 'power2.out',
//             overwrite: true, // This ensures previous animations are overwritten
//           });
//         }
//       });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // useGSAP(
//   //   () => {
//   //     // Set initial transform origin for all images
//   //     imageArray.forEach((_, index) => {
//   //       gsap.set(`.image-float-${index}`, {
//   //         transformOrigin: 'center center',
//   //       });
//   //     });
//   //   },
//   //   { scope: containerRef },
//   // );

//   return (
//     <section className={styles.secondFoldCont} ref={containerRef}>
//       <div className={styles.imageBox}>
//         {imageArray.map((imageSrc, index) => (
//           <Image
//             key={index}
//             width={1440}
//             height={880}
//             src={imageSrc}
//             alt={`Floating element ${index + 1}`}
//             className={`${styles.element} image-float-${index}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ImageStack;
'use client';
import React, { useEffect, useRef } from 'react';
import styles from './ImageStack.module.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

// imports  ─────────────────────────────────────────────
import img01 from '@/public/home/image-stack/1.png';
import img02 from '@/public/home/image-stack/2.png';
import img03 from '@/public/home/image-stack/3.png';
import img04 from '@/public/home/image-stack/4.png';
import img05 from '@/public/home/image-stack/5.png';
import img06 from '@/public/home/image-stack/6.png';
import img07 from '@/public/home/image-stack/7.png';
import img08 from '@/public/home/image-stack/8.png';
import img09 from '@/public/home/image-stack/9.png';
import img10 from '@/public/home/image-stack/10.png';
import img11 from '@/public/home/image-stack/11.png';
import img12 from '@/public/home/image-stack/12.png';
import img13 from '@/public/home/image-stack/13.png';
import img14 from '@/public/home/image-stack/14.png';
import img15 from '@/public/home/image-stack/15.png';
import img16 from '@/public/home/image-stack/16.png';
import img17 from '@/public/home/image-stack/17.png';
import img18 from '@/public/home/image-stack/18.png';
import img19 from '@/public/home/image-stack/19.png';
import img20 from '@/public/home/image-stack/20.png';
import img21 from '@/public/home/image-stack/21.png';

// array  ───────────────────────────────────────────────
export const imageArray = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
];

gsap.registerPlugin(useGSAP);

const ImageStack = () => {
  const containerRef = useRef(null);
  const isHovering = useRef(false);

  // Parallax effect function
  // @ts-expect-error vcdfg
  const parallaxIt = (e, container, targets, movements) => {
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    // Calculate relative position within container (-0.5 to 0.5)
    const relativeX = (relX - rect.width / 2) / rect.width;
    const relativeY = (relY - rect.height / 2) / rect.height;
    // @ts-expect-error vcdfg

    targets.forEach((target, index) => {
      if (target) {
        const movement = movements[index] || movements[0];
        gsap.to(target, {
          x: relativeX * movement,
          y: relativeY * movement,
          duration: 0.6,
          ease: 'power2.out',
          overwrite: true,
        });
      }
    });
  };

  // Mouse enter handler
  // @ts-expect-error dkjbf
  const handleMouseEnter = (e) => {
    isHovering.current = true;
    const container = containerRef.current;

    if (container) {
      // Get all image elements
      const imageElements = imageArray
        // @ts-expect-error vcdfg
        .map((_, index) => container.querySelector(`.image-float-${index}`))
        .filter(Boolean);

      // Create movement values with varying intensities
      const movements = imageElements.map((_, index) => {
        const baseMovement = 20;
        const layerEffect = index * 1.5; // Increasing movement for each layer
        return baseMovement + layerEffect;
      });

      // Add mousemove listener
      // @ts-expect-error dkjbf

      const handleMouseMove = (evt) => {
        if (isHovering.current) {
          parallaxIt(evt, container, imageElements, movements);
        }
      };
      // @ts-expect-error dkjbf

      container.addEventListener('mousemove', handleMouseMove);

      // @ts-expect-error dkjbf
      // Store the handler for cleanup
      container._mouseMoveHandler = handleMouseMove;
    }
  };

  // Mouse leave handler
  const handleMouseLeave = () => {
    isHovering.current = false;
    const container = containerRef.current;

    if (container) {
      // Remove mousemove listener
      // @ts-expect-error dkjbf
      if (container._mouseMoveHandler) {
        // @ts-expect-error dkjbf

        container.removeEventListener('mousemove', container._mouseMoveHandler);
        // @ts-expect-error dkjbf

        container._mouseMoveHandler = null;
      }

      // Reset all images to center position
      const imageElements = imageArray
        // @ts-expect-error dkjbf

        .map((_, index) => container.querySelector(`.image-float-${index}`))
        .filter(Boolean);

      gsap.to(imageElements, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  };

  useGSAP(
    () => {
      const container = containerRef.current;
      if (container) {
        // Set initial properties for all images - no transform conflicts
        imageArray.forEach((_, index) => {
          // @ts-expect-error dkjbf

          const element = container.querySelector(`.image-float-${index}`);
          if (element) {
            gsap.set(element, {
              transformOrigin: 'center center',
              x: 0,
              y: 0,
            });
          }
        });
      }
    },
    { scope: containerRef },
  );

  // Setup event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // @ts-expect-error dkjbf

      container.addEventListener('mouseenter', handleMouseEnter);
      // @ts-expect-error dkjbf

      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        // @ts-expect-error dkjbf

        container.removeEventListener('mouseenter', handleMouseEnter);
        // @ts-expect-error dkjbf

        container.removeEventListener('mouseleave', handleMouseLeave);
        // @ts-expect-error dkjbf

        if (container._mouseMoveHandler) {
          // @ts-expect-error dkjbf

          container.removeEventListener(
            'mousemove',
            // @ts-expect-error dkjbf

            container._mouseMoveHandler,
          );
        }
      };
    }
  }, []);

  return (
    <section className={styles.secondFoldCont} ref={containerRef}>
      <div className={styles.imageBox}>
        {imageArray.map((imageSrc, index) => (
          <Image
            key={index}
            width={1440}
            height={880}
            src={imageSrc}
            alt={`Floating element ${index + 1}`}
            className={`${styles.element} image-float-${index}`}
            priority={index < 5}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageStack;
