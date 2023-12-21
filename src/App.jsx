import './App.css'
import Form from './components/Form/Form'
import Featured from './components/Featured/Featured'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: "#99ebda",
      light: "#d7f7f1",
      dark: "#00c8aa"
    },

    secondary: {
      main: "#fdb953",
      light: "#fdcd83",
      dark: "#fd9b13",
      darker: "#e35608"
    },
  }
});

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Main/>
        <Featured/>
        <Form/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default App