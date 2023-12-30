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
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers-pro"
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker"
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField"
import dayjs from "dayjs"
import axios from "axios"

const Hero = () => {
    const todaysDate = dayjs()
    const [reservation, setReservation] = useState({
        data: {
            reservationDate: todaysDate,
            numberOfGuest: "1",
        },
        error: { status: false, message: null },
    })

    const { reservationDate, numberOfGuest } = reservation.data
    const error = reservation.error
    const snackbarOpen = error.message !== null

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    const isTablet = useMediaQuery(theme.breakpoints.down("md"))

    const handleErrorOccurred = (reason) => {
        if (reason === "INVALID_GUEST_NUMBER") {
            setReservation((prev) => ({
                ...prev,
                error: {
                    status: true,
                    message: "Number of guest of empty or 0",
                },
            }))
        }
    }

    const handleReservationDate = (event) => {
        const value = event.target.value
        setReservation((prev) => ({
            ...prev,
            data: { ...prev.data, reservationDate: value },
            error: { status: false, message: null },
        }))
    }
    const handleGuestNumber = (event) => {
        const value = event.target.value

        if (+value <= 0) {
            handleErrorOccurred("INVALID_GUEST_NUMBER")
        } else {
            setReservation((prev) => ({
                ...prev,
                data: { ...prev.data, numberOfGuest: value },
                error: { status: false, message: null },
            }))
        }
    }
    const handleClose = (event, reason) => {
        if (reason === "timeout") {
            return
        }

        setReservation((prev) => ({
            ...prev,
            error: { ...prev.error, message: null },
        }))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault

        let formData = {
            reservationDate: reservationDate,
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack
                sx={{
                    position: "relative",
                    backgroundImage: `url(${HeroImg})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "100vh",
                    filter: "blur(3px)",
                    ...(isMobile
                        ? {
                              height: "120vh",
                          }
                        : isTablet
                        ? { height: "118vh" }
                        : ""),
                }}></Stack>
            <Stack alignItems="center">
                <Typography
                    variant="h4"
                    color={theme.text.tertiary}
                    sx={{
                        position: "absolute",
                        top: "16%",
                        fontWeight: "bold",
                        ...(isMobile
                            ? {
                                  fontSize: "24px",
                                  textAlign: "center",
                                  top: "13%",
                              }
                            : isTablet
                            ? { fontSize: "25px" }
                            : ""),
                    }}>
                    Experience a night like never before
                </Typography>
                <Stack
                    flexDirection="column"
                    justifyContent="center"
                    component="form"
                    sx={{
                        position: "absolute",
                        top: "26%",
                        ...(isMobile
                            ? {
                                  top: "30%",
                              }
                            : isTablet
                            ? { fontSize: "25px" }
                            : ""),
                    }}>
                    <Stack
                        backgroundColor={theme.palette.secondary.main}
                        pl={3}
                        pr={3}
                        pb={3}
                        sx={{
                            borderRadius: "10px",
                        }}>
                        <DateRangePicker
                            value={reservationDate}
                            onChange={handleReservationDate}
                            pt={3}
                            sx={{
                                "& .MuiInputBase-root": {
                                    marginTop: "16px",
                                    backgroundColor:
                                        theme.palette.tertiary.main,
                                    borderRadius: "5px",
                                    color: theme.text.tertiary.color,
                                },
                            }}
                            slots={{ field: SingleInputDateRangeField }}
                        />
                        <Typography
                            variant="subtitle1"
                            color={theme.text.secondary}
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
                            inputProps={{
                                min: "1",
                            }}
                        />
                        <Snackbar
                            open={snackbarOpen}
                            autoHideDuration={3000}
                            onClose={handleClose}
                            message={error.message}
                        />

                        <Button
                            variant="contained"
                            sx={{ marginTop: "16px" }}
                            disableElevation
                            onClick={handleFormSubmit}
                            disabled={error.status === true}>
                            Search Availability
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </LocalizationProvider>
    )
}
export default Hero
