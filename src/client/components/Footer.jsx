import {
    Link,
    Stack,
    Typography,
    ThemeProvider,
    useTheme,
    useMediaQuery,
    Grid,
} from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import MailIcon from "@mui/icons-material/Mail"
import CopyrightIcon from "@mui/icons-material/Copyright"

const Footer = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    const isTablet = useMediaQuery(theme.breakpoints.down("md"))

    return (
        <Stack
            mt={6}
            sx={{
                backgroundColor: theme.palette.secondary.main,
            }}>
            <Grid
                container
                sx={{
                    alignItems: "center",
                }}
                mt={2}
                pl={3}
                spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Typography
                        variant="h4"
                        color={theme.text.secondary}
                        sx={{ fontWeight: "bold" }}>
                        LUXIRADO
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Stack
                        gap={{ xs: 0, sm: 3 }}
                        sx={{
                            ...(isMobile
                                ? { flexDirection: "column" }
                                : {
                                      flexDirection: "row",
                                  }),
                        }}>
                        <Link
                            href="#"
                            variant="title1"
                            underline="none"
                            color={theme.text.secondary}>
                            About
                        </Link>
                        <Link
                            href="#"
                            variant="title1"
                            underline="none"
                            color={theme.text.secondary}>
                            Sitemap
                        </Link>
                        <Link
                            href="#"
                            variant="title1"
                            underline="none"
                            color={theme.text.secondary}>
                            Terms & Conditions
                        </Link>
                        <Link
                            href="#"
                            variant="title1"
                            underline="none"
                            color={theme.text.secondary}>
                            Contact
                        </Link>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack gap={3} flexDirection={"row"}>
                        <Typography
                            variant="body1"
                            color={theme.text.secondary}>
                            Find us on
                        </Typography>
                        <Link
                            href="#"
                            variant="title1"
                            color={theme.text.secondary}
                            underline="none">
                            <FacebookIcon />
                        </Link>
                        <Link
                            href="#"
                            variant="title1"
                            color={theme.text.secondary}
                            underline="none">
                            <TwitterIcon />
                        </Link>
                        <Link
                            href="#"
                            variant="title1"
                            color={theme.text.secondary}
                            underline="none">
                            <MailIcon />
                        </Link>
                    </Stack>
                </Grid>
            </Grid>
            <Stack
                flexDirection="row"
                alignItems="center"
                justifyContent="center">
                <CopyrightIcon
                    sx={{
                        fontWeight: "100",
                        fontSize: "10px",
                        textAlign: "center",
                        color: "#fff",
                    }}
                />
                <Typography
                    variant="subtitle1"
                    color={theme.text.secondary}
                    sx={{
                        fontWeight: "100",
                        fontSize: "10px",
                        textAlign: "center",
                    }}>
                    CopyRight Reserved
                </Typography>
            </Stack>
        </Stack>
    )
}

export default Footer
