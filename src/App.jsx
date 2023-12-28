import './App.css'
import { ThemeProvider, createTheme } from '@mui/material'
import Navigation from './routes/Navigation'

const theme = createTheme({
  palette: {
    primary: {
        main: "#fdb953",
        light: "#fdcd83",
        dark: "#fd9b13",
        darker: "#e35608"
      }, 
      
    secondary: {
        main: "#99ebda",
        light: "#d7f7f1",
        dark: "#00c8aa"
      },
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation/>
      </ThemeProvider>
    </>
  )
}

export default App