import './App.css';
import Box from '@mui/material/Box';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';


function App() {
  return (
    <Box className="App" sx={{bgcolor:'#18191A'}}>
      <Navbar/>
      <Home/>

      
    </Box>
  );
}

export default App;
