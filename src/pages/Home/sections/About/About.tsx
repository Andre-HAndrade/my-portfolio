import { Box, Container, Grid, Typography, Chip } from '@mui/material'

const skills = [
  'React', 'TypeScript', 'Node.js', 'Material-UI', 'JavaScript (ES6+)', 
  'HTML5 & CSS3', 'Git & GitHub', 'REST APIs', 'Testing (Jest & RTL)'
];

const About = () => {
  return (
    <Box id="about" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h2" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Hello! I'm André, a passionate software developer with a knack for creating dynamic and user-friendly web applications. I specialize in front-end development with React and TypeScript, but I'm always eager to learn new technologies and expand my skill set.
            </Typography>
            <Typography variant="body1">
              When I'm not coding, I enjoy contributing to open-source projects, reading tech blogs, and exploring the latest trends in web development.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h3" gutterBottom textAlign="center">
              My Skills
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
              {skills.map((skill) => (
                <Chip key={skill} label={skill} color="primary" variant="outlined" />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default About;
