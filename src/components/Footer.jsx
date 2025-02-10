import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function Footer() {
  return (
    <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 2, mt: 4 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="center" alignItems="center">
          <Typography variant="body1">© {new Date().getFullYear()} My Website</Typography>
          <Typography variant="body2">All Rights Reserved.</Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
