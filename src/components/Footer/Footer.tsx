import { Box, Container, Typography, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid #333'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} André Ramos. All Rights Reserved.
          </Typography>
          <Box>
            <IconButton href="https://github.com" target="_blank" color="inherit">
              <GitHubIcon />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
