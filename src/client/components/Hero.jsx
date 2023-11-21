import { useState } from "react"
import {
    Button,
    Stack,
    Snackbar,
    Typography,
    ThemeProvider,
    useTheme,
    TextField,
    useMediaQuery,
    IconButton,
} from "@mui/material"
import HeroImg from "../assets/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table.jpg"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import dayjs from "dayjs"
import axios from "axios"
const Hero = () => {
    const todaysDate = dayjs()
    const [checkInDate, setCheckInDate] = useState(todaysDate)
    const [checkOutDate, setCheckOutDate] = useState(todaysDate)
    const [numberOfGuest, setNumberOfGuest] = useState("1")
    const [openSnackBar, setOpenSnackBar] = useState(false)

    const theme = useTheme()
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"))
    const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"))

    const handleCheckInDate = (value) => {
        setCheckInDate(value)
    }
    const handleCheckOutDate = (value) => {
        setCheckOutDate(value)
    }
    const handleGuestNumber = (event) => {
        setNumberOfGuest(event.target.value)
    }
    const open = () => {
        setOpenSnackBar(true)
    }
    const handleClose = (event, reason) => {
        if (reason === "timeout") {
            return
        }

        setOpen(false)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault

        let formData = {
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            numberOfGuest: numberOfGuest,
        }

        axios
            .post("http://localhost:3000/api", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack
                        alignItems={"center"}
                        component="form"
                        sx={{
                            position: "relative",
                            backgroundImage: `url(${HeroImg})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            ...(isMobile
                                ? { height: "125vh" }
                                : isTablet
                                ? { height: "100vh" }
                                : { height: "100vh" }),
                            "&:: before": {
                                content: '""',
                                position: "relative",
                                filter: "blur(10px)",
                                "z-index": 0,
                            },
                        }}>
                        <Typography
                            variant="h4"
                            color={theme.text.tertiary}
                            sx={{
                                position: "absolute",
                                top: "16%",
                                ...(isMobile
                                    ? { fontSize: "18px" }
                                    : isTablet
                                    ? { fontSize: "25px" }
                                    : ""),
                            }}>
                            Experience a night like never before
                        </Typography>
                        <Stack
                            flexDirection={"column"}
                            justifyContent={"center"}
                            sx={{
                                position: "absolute",
                                top: "26%",
                            }}>
                            <Stack
                                backgroundColor={theme.palette.secondary.main}
                                pl={3}
                                pr={3}
                                pb={3}
                                sx={{
                                    borderRadius: "10px",
                                }}>
                                <Typography
                                    variant="subtitle1"
                                    color={theme.text.secondary}
                                    mt={3}
                                    mb={1}>
                                    Check-in
                                </Typography>
                                <DatePicker
                                    minDate={todaysDate}
                                    onChange={handleCheckInDate}
                                    value={checkInDate}
                                    sx={{
                                        "& .MuiInputBase-input": {
                                            backgroundColor:
                                                theme.palette.tertiary.main,
                                            borderRadius: "5px",
                                            color: theme.text.tertiary.color,
                                        },
                                    }}
                                    size="small"
                                />
                                <Typography
                                    variant="subtitle1"
                                    color={theme.text.secondary}
                                    mt={3}
                                    mb={1}>
                                    Check-out
                                </Typography>
                                <DatePicker
                                    defaultValue={todaysDate}
                                    minDate={todaysDate}
                                    onChange={handleCheckOutDate}
                                    value={checkOutDate}
                                    sx={{
                                        "& .MuiInputBase-input": {
                                            backgroundColor:
                                                theme.palette.tertiary.main,
                                            borderRadius: "5px",
                                            color: theme.text.tertiary.color,
                                        },
                                    }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    color={theme.text.secondary}
                                    onChange={handleGuestNumber}
                                    mt={3}
                                    mb={1}>
                                    Number of guest
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    type="number"
                                    value={numberOfGuest}
                                    onChange={handleGuestNumber}
                                    sx={{
                                        "& .MuiInputBase-input": {
                                            backgroundColor:
                                                theme.palette.tertiary.main,
                                            borderRadius: "5px",
                                            color: theme.text.tertiary.color,
                                        },
                                    }}
                                />

                                {numberOfGuest <= 0 ? (
                                    <>
                                        <Snackbar
                                            open={!openSnackBar}
                                            autoHideDuration={3000}
                                            onClose={handleClose}
                                            message="Number of guest of empty or 0"
                                        />
                                    </>
                                ) : (
                                    ""
                                )}

                                <Button
                                    variant="contained"
                                    sx={{ marginTop: "16px" }}
                                    disableElevation
                                    onClick={handleFormSubmit}>
                                    Search Availability
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </LocalizationProvider>
            </ThemeProvider>
        </>
    )
}
export default Hero
