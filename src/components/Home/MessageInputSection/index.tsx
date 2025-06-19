import React from 'react';
import styles from './MessageInputSection.module.scss';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Abhaya_Libre } from 'next/font/google';

const fontStyles = Abhaya_Libre({
  weight: ['800'],
  subsets: ['latin'],
  display: 'swap',
});

type Props = {};

const MessageInputSection = (props: Props) => {
  return (
    <Box component={'section'} className={styles.section}>
      <Typography variant="h4">
        Your words. His legacy.
        <br />
        Be part of this iconic milestone by sending your love to Thalaiva.
        <br />
        Pick the message that says it best and make it yours.
      </Typography>
      <Container>
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
              <Grid
                size={4}
                container
                columnSpacing={4}
                className={styles.card}
              >
                <Grid size={3}>
                  <img
                    src="/home/message-section/6.png"
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
            </Grid>
            <button
              className={styles.submitButton}
              style={{ fontFamily: fontStyles.style.fontFamily }}
            >
              Submit
            </button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MessageInputSection;
