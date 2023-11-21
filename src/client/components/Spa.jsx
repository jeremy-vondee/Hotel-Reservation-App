import { Stack, Typography, Button, useMediaQuery } from "@mui/material"
import spaImg from "../assets/woman-enjoying-stone-massage.jpg"

const Spa = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"))

    return (
        <>
            <Stack
                mt={12}
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
                            ...(isMobile ? { marginTop: "32px" } : ""),
                        }}>
                        SPA{" "}
                    </Typography>
                    <Typography variant="h6">Luxirado Welcomes You </Typography>
                    <Typography variant="body1" mt={3} mb={2}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quibusdam, rem, non aspernatur id molestias nostrum
                        quaerat facilis eum odio, pariatur vitae soluta? Nam
                        ducimus adipisci mollitia recusandae perferendis nulla
                        facilis.
                    </Typography>
                    <Button variant="contained" sx={{ width: "fit-content" }}>
                        Get Your First Free Massage
                    </Button>
                </Stack>
                <img
                    src={spaImg}
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

export default Spa
