import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'

const Navbar = () => {
  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <AppBar component="nav" sx={{ backgroundColor: 'rgba(10, 10, 10, 0.7)', backdropFilter: 'blur(10px)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          André Ramos
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: '#fff' }} href={`#${item.toLowerCase()}`}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
