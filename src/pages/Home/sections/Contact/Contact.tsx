import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material'

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom textAlign="center">
          Contact Me
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 5 }}>
          Have a question or want to work together? Feel free to reach out!
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" name="name" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" name="email" type="email" required />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Button type="submit" variant="contained" size="large">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  )
}

export default Contact;
