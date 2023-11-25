import { Grid, Box, Button, Text } from 'theme-ui';
import Image from 'next/image';

function LandingPage() {
  return (
    <Grid
      sx={{
        height: ['calc(180vh)', null, null, 'calc(100vh - 60px)', null],
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        gridGap: '0px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gridArea: [
            '1 / 1 / 2 / 5',
            null,
            null,
            '1 / 1 / 3 / 3',
            '1 / 1 / 4 / 3',
          ],
          m: [3, 5, null, 5, null],
        }}
      >
        <h2>Welcome to my Digital Hub!</h2>
        <p style={{ textAlign: 'justify' }}>
          Hello there! I'm Andrew Cullen, a passionate full-stack developer with
          three years of hands-on experience in crafting digital solutions.
          Whether you're dreaming of a sleek web presence, a dynamic
          application, or an innovative software solution, you've landed at the
          right place...
          <br />
          <br />
          <a href="#scrollTarget" style={{ textDecoration: 'none' }}>
            <Text variant="linkText">
              Explore my skills & story in software engineering ↓
            </Text>
          </a>
        </p>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: ['column', null, null, 'row', null],
          gridGap: 5,
          m: [4, 5, 6, 5, 2],
          gridArea: ['3 / 1 / 5 / 5', null, null, null, '4 / 1 / 5 / 5'],
        }}
      >
        <Button variant="boxes.card">
          <h3>Latest Blog...</h3>
        </Button>
        <Button variant="boxes.card">
          <h3>Most recent happy customer...</h3>
        </Button>
      </Box>
      <Box
        sx={{
          position: 'relative',
          gridArea: [
            '2 / 1 / 3 / 5',
            null,
            null,
            '1 / 3 / 3 / 5',
            '1 / 3 / 4 / 5',
          ],
          overflow: 'hidden',
          border: '4px solid',
          borderColor: 'primary',
          boxShadow: 'medium',
          m: [0, null, null, 5, 6],
          ml: [4, 4, 6, 5, 6],
          mr: [4, 4, 6, 5, 6],
        }}
      >
        <Image
          src="/images/profile.jpeg"
          alt="Andrew Cullen"
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 600px) 100vw, 600px"
          priority
        />
      </Box>
    </Grid>
  );
}

export default LandingPage;
