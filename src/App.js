
import { Box,Typography, createTheme,ThemeProvider } from '@mui/material';
import './App.css';
import { AllRoutes } from './Routes/AllRoutes';




const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    anger: createColor('#c53030'),
    peace: createColor('#14d532'),
    rest:createColor('#FFFFFF')
    
  },
});
function App() {
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
       <Box>
      <AllRoutes/>
     </Box>
       </ThemeProvider>
     
    </div>
  );
}

export default App;
