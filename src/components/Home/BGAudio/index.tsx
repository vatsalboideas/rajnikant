'use client';

import React, { useRef, useState } from 'react';
import styles from './BGAudio.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';

const BGAudio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);
  const [audioPlay, setAudioPlay] = useState(false);
  const [muted, setMuted] = useState(false);

  const handleStart = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch((err) => {
        console.error('Play failed:', err);
      });
      setStarted(true);
      setAudioPlay(true);
      setMuted(false);
    }
    window.scrollTo({ top: 0 });
  };

  const handleAudioPlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audioPlay) {
        audio.pause();
        setAudioPlay(false);
      } else if (!audioPlay) {
        audio.play();
        setAudioPlay(true);
      }
      // audio.play().catch((err) => {
      //   console.error('Play failed:', err);
      // });
      // setStarted(true);
    }
  };
  const handleAudioMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <>
      {!started && (
        <div className={styles.backdrop}>
          <button className={styles.startButton} onClick={handleStart}>
            <Image
              src={'/enterbutton.png'}
              alt="logo "
              width={200}
              height={200}
            />
          </button>
          <Image
            src={'/worldImage.png'}
            alt="logo "
            width={500}
            height={300}
            style={{ objectFit: 'contain' }}
          />
        </div>
      )}
      <div className={styles.audioControls}>
        {/* <Typography variant="h2" sx={{ fontSize: '15px' }}>
          Audio Contols :
        </Typography> */}
        {/* <button onClick={handleAudioPlay} className={styles.controlButton}>
          {audioPlay ? 'Pause' : 'Play'}
        </button> */}

        <button onClick={handleAudioMute} className={styles.controlButton}>
          {muted ? 'Unmute' : 'Mute'}
        </button>
      </div>
      <audio ref={audioRef} preload="auto" className={styles.audiotag}>
        <source src="/bg-intro.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default BGAudio;
