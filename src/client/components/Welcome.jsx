import { Stack, Typography, Button, useMediaQuery } from "@mui/material"

import hotelImg from "../assets/hotel-nevada-usa.jpg"

const Welcome = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"))

    return (
        <>
            <Stack
                mt={6}
                ml={4}
                mr={4}
                sx={{
                    ...(isMobile
                        ? { flexDirection: "column-reverse" }
                        : { flexDirection: "row" }),
                }}
                justifyContent={"space-between"}>
                <Stack
                    justifyContent={"center"}
                    sx={{
                        ...(isMobile
                            ? { flexDirection: "column", width: "100%" }
                            : { width: "48%" }),
                    }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                            ...(isMobile ? { marginTop: "32px" } : ""),
                        }}>
                        Luxirado Welcomes You{" "}
                    </Typography>
                    <Typography variant="body1" mt={3} mb={2}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam, rem, non aspernatur id molestias nostrum
                        quaerat facilis eum odio, pariatur vitae soluta? Nam
                        ducimus adipisci mollitia recusandae perferendis nulla
                        facilis.
                    </Typography>
                    <Button variant="contained" sx={{ width: "fit-content" }}>
                        Read More
                    </Button>
                </Stack>
                <img
                    src={hotelImg}
                    alt="Luxirado hotel image"
                    style={{
                        objectFit: "cover",
                        ...(isMobile
                            ? { height: "48vh", width: "80vw" }
                            : { height: "48vh", width: "32vw" }),
                    }}
                />
            </Stack>
        </>
    )
}

export default Welcome
