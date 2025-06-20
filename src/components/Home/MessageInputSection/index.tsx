import React from 'react';
import styles from './MessageInputSection.module.scss';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Abhaya_Libre } from 'next/font/google';
import Image from 'next/image';

const fontStyles = Abhaya_Libre({
  weight: ['800'],
  subsets: ['latin'],
  display: 'swap',
});

type Props = {};

const MessageInputSection = (props: Props) => {
  const messages = [
    {
      poster: '/home/message-section/1.png',
      text: [
        'You taught us to walk with confidence, speak with impact, and always keep our head high.',
        'Long live the king of style',
      ],
    },
    {
      poster: '/home/message-section/2.png',
      text: [
        '50 years and still unbeatable. They can copy the style, but not the soul. Only one superstar.',
        'Always our Thalaiva.',
      ],
    },
    {
      poster: '/home/message-section/3.png',
      text: [
        'The movies change, the heroes come and go, but there’s only one name that echoes across generations: Rajinikanth.',
      ],
    },
    {
      poster: '/home/message-section/4.png',
      text: [
        'When life got tough, your dialogues lifted me. When I needed hope, your smile gave it. Thank you, Rajini Sir, for being our light for 50 years.',
      ],
    },
    {
      poster: '/home/message-section/5.png',
      text: [
        'Watching you throw those sunglasses in slow‑mo still gives me goosebumps. Thank you for making the impossible look effortless!',
      ],
    },
    {
      poster: '/home/message-section/6.png',
      text: [
        'You’ve been more than just a star to us, you’ve been our strength, our smile, and our swagger. Thank you for 50 glorious years of magic and inspiration.',
      ],
    },
  ];

  return (
    <Box component={'section'} className={styles.section}>
      <Typography variant="h4">
        Your words. His legacy.
        <br />
        Be part of this iconic milestone by sending your love to Thalaiva.
        <br />
        Pick the message that says it best and make it yours.
      </Typography>
      {/* <Container>
        <Box component={'div'} className={styles.MessageInputWrapper}>
          <Box component={'div'} className={styles.MessageInputInner}>
            <Grid container columnSpacing={2} rowSpacing={2}>
              <Grid
                size={4}
                container
                columnSpacing={4}
                className={styles.card}
              >
                <Grid size={3}>
                  <Image
                    height={240}
                    width={130}
                    src="/home/message-section/1.png"
                    alt="card-poster"
                    className={styles.imageSticker}
                  />
                </Grid>
                <Grid
                  size={9}
                  alignItems={'center'}
                  container
                  justifyContent={'space-between'}
                >
                  <Typography
                    style={{ fontFamily: fontStyles.style.fontFamily }}
                  >
                    You taught us to walk with confidence, speak with impact,
                    and always keep our head high.
                  </Typography>
                  <Typography
                    style={{ fontFamily: fontStyles.style.fontFamily }}
                  >
                    Long live the king of style
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                size={4}
                container
                columnSpacing={4}
                className={styles.card}
              >
                <Grid size={3}>
                  <img
                    src="/home/message-section/2.png"
                    alt="card-poster"
                    className={styles.imageSticker}
                  />
                </Grid>
                <Grid
                  size={9}
                  alignItems={'center'}
                  container
                  justifyContent={'space-between'}
                >
                  <Typography
                    style={{ fontFamily: fontStyles.style.fontFamily }}
                  >
                    50 years and still unbeatable. They can copy the style, but
                    not the soul. Only one superstar.
                  </Typography>
                  <Typography
                    style={{ fontFamily: fontStyles.style.fontFamily }}
                  >
                    Always our Thalaiva.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                size={4}
                container
                columnSpacing={4}
                className={styles.card}
              >
                <Grid size={3}>
                  <img
                    src="/home/message-section/4.png"
                    alt="card-poster"
                    className={styles.imageSticker}
                  />
                </Grid>
                <Grid
                  size={9}
                  alignItems={'center'}
                  container
                  justifyContent={'space-between'}
                >
                  <Typography
                    style={{ fontFamily: fontStyles.style.fontFamily }}
                  >
                    The movies change, the heroes come and go, but there&apos;s
                    only one name that echoes across generations: Rajinikanth.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                size={4}
                container
                columnSpacing={4}
                className={styles.card}
              >
                <Grid size={3}>
                  <img
                    src="/home/message-section/3.png"
                    alt="card-poster"
                    className={styles.imageSticker}
                  />
                </Grid>
                <Grid
                  size={9}
                  alignItems={'center'}
                  container
                  justifyContent={'space-between'}
                >
                  <Typography
                    style={{ fontFamily: fontStyles.style.fontFamily }}
                  >
                    When life got tough, your dialogues lifted me. When I needed
                    hope, your smile gave it. Thank you, Rajini Sir, for being
                    our light for 50 years.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                size={4}
                container
                columnSpacing={4}
                className={styles.card}
              >
                <Grid size={3}>
                  <img
                    src="/home/message-section/1.png"
                    alt="card-poster"
                    className={styles.imageSticker}
                  />
                </Grid>
                <Grid
                  size={9}
                  alignItems={'center'}
                  container
                  justifyContent={'space-between'}
                >
                  <Typography
                    style={{ fontFamily: fontStyles.style.fontFamily }}
                  >
                    Watching you throw those sunglasses in slow-mo still gives
                    me goosebumps. Thank you for making the impossible look
                    effortless!
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                size={4}
                container
                columnSpacing={4}
                className={styles.card}
              >
                <Grid size={3}>
                  <img
                    src="/home/message-section/5.png"
                    alt="card-poster"
                    className={styles.imageSticker}
                  />
                </Grid>
                <Grid
                  size={9}
                  alignItems={'center'}
                  container
                  justifyContent={'space-between'}
                >
                  <Typography
                    style={{ fontFamily: fontStyles.style.fontFamily }}
                  >
                    You’ve been more than just a star to us, you’ve been our
                    strength, our smile, and our swagger. Thank you for 50
                    glorious years of magic and inspiration.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <button
              className={styles.submitButton}
              style={{ fontFamily: fontStyles.style.fontFamily }}
            >
              Submit
            </button>
          </Box>
        </Box>
      </Container> */}
      <Container>
        <Box className={styles.MessageInputWrapper}>
          <Box className={styles.MessageInputInner}>
            <Grid container columnSpacing={1} rowSpacing={2}>
              {messages.map(({ poster, text }, idx) => (
                <Grid
                  key={idx}
                  size={4}
                  container
                  columnSpacing={1}
                  className={styles.card}
                >
                  <Grid size={4}>
                    {/* Use next/image for all posters if they are in /public */}
                    <Image
                      height={240}
                      width={130}
                      src={poster}
                      alt="card‑poster"
                      className={styles.imageSticker}
                    />
                  </Grid>

                  <Grid
                    size={8}
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    {text.map((line, lineIdx) => (
                      <Typography key={lineIdx}>{line}</Typography>
                    ))}
                  </Grid>
                </Grid>
              ))}
            </Grid>

            {/* ————————————————— Submit button ————————————————— */}
            <button className={styles.submitButton}>Submit</button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MessageInputSection;
