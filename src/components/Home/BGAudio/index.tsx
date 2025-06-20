'use client';

import React, { useRef, useState } from 'react';
import styles from './BGAudio.module.scss';
import Image from 'next/image';

const BGAudio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch((err) => {
        console.error('Play failed:', err);
      });
      setStarted(true);
    }
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      {!started && (
        <div className={styles.backdrop}>
          <button className={styles.startButton} onClick={handleStart}>
            <Image
              src={'/play.svg'}
              alt="play button"
              height={150}
              width={150}
            />
          </button>
        </div>
      )}

      <audio ref={audioRef} preload="auto" className={styles.audiotag}>
        <source src="/bg-intro.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default BGAudio;
