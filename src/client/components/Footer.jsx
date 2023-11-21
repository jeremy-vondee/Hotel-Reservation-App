import {
    Link,
    Stack,
    Typography,
    ThemeProvider,
    useTheme,
    useMediaQuery,
} from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import MailIcon from "@mui/icons-material/Mail"

const Footer = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"))
    const isTablet = useMediaQuery((theme) => theme.breakpoints.down("md"))

    return (
        <>
            <ThemeProvider theme={theme}>
                <Stack
                    alignItems={"center"}
                    justifyContent={"space-around"}
                    sx={{
                        backgroundColor: theme.palette.secondary.main,
                        ...(isTablet
                            ? {
                                  flexWrap: "wrap",
                                  justifyContent: "flex-start",
                                  paddingLeft: "24px",
                              }
                            : ""),
                        ...(isMobile
                            ? {
                                  flexDirection: "column",
                                  justifyContent: "space-between",
                              }
                            : { flexDirection: "row" }),
                    }}
                    pt={2}
                    pb={2}
                    mt={8}>
                    <Typography
                        variant="h4"
                        color={theme.text.secondary}
                        sx={{ fontWeight: "bold" }}>
                        LUXIRADO
                    </Typography>
                    <Stack
                        sx={{
                            ...(isMobile
                                ? { flexDirection: "column" }
                                : { flexDirection: "row" }),
                        }}>
                        <Link
                            href="#"
                            variant="title1"
                            underline="none"
                            sx={{ ...(isMobile ? "" : { marginLeft: "24px" }) }}
                            color={theme.text.secondary}>
                            About
                        </Link>
                        <Link
                            href="#"
                            variant="title1"
                            underline="none"
                            sx={{ ...(isMobile ? "" : { marginLeft: "24px" }) }}
                            color={theme.text.secondary}>
                            Sitemap
                        </Link>
                        <Link
                            href="#"
                            variant="title1"
                            underline="none"
                            sx={{ ...(isMobile ? "" : { marginLeft: "24px" }) }}
                            color={theme.text.secondary}>
                            Terms & Conditions
                        </Link>
                        <Link
                            href="#"
                            variant="title1"
                            underline="none"
                            sx={{ ...(isMobile ? "" : { marginLeft: "24px" }) }}
                            color={theme.text.secondary}>
                            Contact
                        </Link>
                    </Stack>
                    <Stack
                        flexDirection={"row"}
                        sx={{ ...(isTablet ? { marginTop: "24px" } : "") }}>
                        <Typography
                            variant="body1"
                            color={theme.text.secondary}>
                            Find us on
                        </Typography>
                        <Link
                            href="#"
                            variant="title1"
                            color={theme.text.secondary}
                            underline="none"
                            ml={2}>
                            <FacebookIcon />
                        </Link>
                        <Link
                            href="#"
                            variant="title1"
                            color={theme.text.secondary}
                            underline="none"
                            ml={2}>
                            <TwitterIcon />
                        </Link>
                        <Link
                            href="#"
                            variant="title1"
                            color={theme.text.secondary}
                            underline="none"
                            ml={2}>
                            <MailIcon />
                        </Link>
                    </Stack>
                </Stack>
            </ThemeProvider>
        </>
    )
}

export default Footer
