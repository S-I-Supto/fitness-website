import { Box } from '@mui/system'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
function App() {
  return (
    <div className="app">
      <Box className="header">
        <Navbar />
        <Home />
      </Box>
    </div>
  )
}
export default App
