import { Box, Typography } from '@mui/material';

import StartNowButton from '../common/StartNowButton'

const BodyBackground = () => {
  return (
    <Box
    sx={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Video de fondo */}
    <video
      autoPlay
      loop
      muted
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
      }}
    >
      <source src="/videoNuberu2.mp4" type="video/mp4" />
      Tu navegador no soporta el video.
    </video>

    {/* Capa oscura encima del video */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        zIndex: 2,
      }}
    />

      {/* Contenido encima del fondo */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Your Inspiring Phrase Here
        </Typography>
        <StartNowButton/>
      </Box>
    </Box>
  );
};

export default BodyBackground;
