import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import Footer from "./components/Footer.jsx"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Welcome from "./components/Welcome.jsx"
import Spa from "./components/Spa.jsx"

const theme = createTheme({
    typography: {
        title2: {
            fontWeight: "bold",
        },
    },
    palette: {
        primary: {
            main: "#1D4567",
        },
        secondary: {
            main: "#655035",
        },
        tertiary: {
            main: "#fff",
        },
    },
    text: {
        primary: {
            color: "#1D4567",
        },
        secondary: {
            color: "#fff",
        },
        tertiary: {
            color: "#655035",
        },
    },
})

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Hero />
                <Welcome />
                <Spa />
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default App
