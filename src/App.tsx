import { Box } from "@mui/material"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"

const App = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Home />
      </Box>
      <Footer />
    </Box>
  )
}

export default App
