'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './HeroSection.module.scss';
import { Typography } from '@mui/material';
// import useWindowWidth from '@/app/components/hooks/useWidthHook';

const imageCount = 4;

const HeroSection = () => {
  // const width = useWindowWidth();
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState({
    loadingState: true,
    percentage: 0,
    loaded: 0,
    total: 0,
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    // Load all images initially
    {
    }
    /* @ts-expect-error dklnfoihdoigfh*/
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    };

    const loadAllImages = async () => {
      const imagesArray = [];
      let loadedCount = 0;
      const totalImages = imageCount;

      for (let i = 0; i < imageCount; i++) {
        const src = `/home/herosection/${String(i + 1)}.png`;
        const image = await loadImage(src);
        imagesArray.push(image);
        loadedCount++;

        // Update the loading percentage
        const percentage = Math.round((loadedCount / totalImages) * 100);
        setLoading((prev) => ({
          ...prev,
          percentage,
          loaded: loadedCount,
          total: totalImages,
        }));
      }
      {
      }
      /* @ts-expect-error dalfnign */
      setImages(imagesArray);
      setLoading((prev) => ({ ...prev, loadingState: false }));
    };

    loadAllImages();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const index = Math.min(
        imageCount - 1,
        Math.round((window.scrollY / window.innerHeight) * imageCount),
      );
      setScrollY(index);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (loading.loadingState) {
      document.body.style.overflow = 'hidden';
    } else {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'visible';
    }
  }, [loading.loadingState]);

  return (
    <section
      className={styles.section}
      style={{ height: `300vh` }}
      ref={sectionRef}
    >
      {loading.loadingState ? (
        <div
          className={`${styles.pageLoader} firstsectionloaderclkdsbvciuabxsnolkaad`}
        >
          <Typography variant="h1">{loading.percentage}%</Typography>
        </div>
      ) : (
        <div className={styles.container}>
          {images.map((image, index) => {
            return (
              <div
                key={index}
                style={{
                  display: index === scrollY ? 'block' : 'none',
                  width: '100%',
                  height: '100%',
                }}
              >
                {/*  eslint-disable @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={`Image ${index}`}
                  className={styles.seqImage}
                />
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
