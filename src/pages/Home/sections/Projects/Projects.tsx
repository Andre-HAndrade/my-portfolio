import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material'

const projectData = [
  {
    title: 'Project One',
    description: 'A brief description of the first project. It showcases my skills in React and Material-UI, creating a responsive and modern user interface.',
    image: 'https://via.placeholder.com/345x140?text=Project+Image',
    github: '#',
    live: '#',
  },
  {
    title: 'Project Two',
    description: 'This project involved building a full-stack application with a Node.js backend and a React front-end. It demonstrates my ability to work with APIs.',
    image: 'https://via.placeholder.com/345x140?text=Project+Image',
    github: '#',
    live: '#',
  },
  {
    title: 'Project Three',
    description: 'An e-commerce site built with modern technologies. This project highlights my skills in state management and creating complex user flows.',
    image: 'https://via.placeholder.com/345x140?text=Project+Image',
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" gutterBottom textAlign="center">
          My Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projectData.map((project) => (
            <Grid item key={project.title} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={`${project.title} screenshot`}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {project.title}
                  </Typography>
                  <Typography>
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={project.github} target="_blank">GitHub</Button>
                  <Button size="small" href={project.live} target="_blank">Live Demo</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Projects;
