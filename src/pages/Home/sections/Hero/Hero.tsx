import { Container, Grid, styled, Typography, Button, Box } from '@mui/material'
import Avatar from '../../../../assets/images/avatar.jpg'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import EmailIcon from '@mui/icons-material/Email'

const StyledHero = styled('section')(() => ({
  backgroundColor: 'black',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
}))

const StyledImg = styled('img')(() => ({
  width: '100%',
  borderRadius: '50%',
}))

const Hero = () => {
  return (
    <>
      <StyledHero id="home">
        <Container>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={4}>
              <StyledImg src={Avatar} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color="primary" variant="h1" textAlign="center">
                André Ramos
              </Typography>
              <Typography color="secondary" variant="h2" textAlign="center">
                I'm a software developer
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', mt: 2 }}>
                <Button variant="contained" startIcon={<ArrowCircleDownIcon />}>
                  Download CV
                </Button>
                <Button variant="outlined" startIcon={<EmailIcon />}>
                  Contact me
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero