import { useEffect, useState } from "react"
import {
    AppBar,
    Toolbar,
    Typography,
    Stack,
    Link,
    Menu,
    MenuItem,
    useMediaQuery,
    IconButton,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { ThemeProvider, useTheme } from "@mui/material/styles"

const Header = () => {
    const [anchor, setAnchor] = useState(null)
    const openMenuBtn = Boolean(anchor)
    const handleMenuOpen = (event) => {
        setAnchor(event.currentTarget)
    }
    const handleMenuClose = () => {
        setAnchor(null)
    }

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"))
    const theme = useTheme()

    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        typeof window !== "undefined"
            ? window.addEventListener("scroll", () => {
                  setSticky(window.scrollY > 50)
              })
            : ""
    })

    return (
        <AppBar
            elevation={0}
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                ...(sticky
                    ? {
                          backgroundColor: theme.palette.secondary.main,
                          transition: "ease-in-out",
                      }
                    : { backgroundColor: "transparent" }),
            }}>
            <Toolbar>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        ...(sticky
                            ? { color: theme.text.secondary }
                            : { color: theme.text.primary }),
                    }}>
                    LUXIRADO
                </Typography>
            </Toolbar>
            {isMobile ? (
                <>
                    <IconButton onClick={handleMenuOpen}>
                        <MenuIcon
                            sx={{
                                ...(sticky
                                    ? { color: theme.text.secondary }
                                    : { color: theme.text.primary }),
                            }}
                        />
                    </IconButton>
                    <Menu
                        elevation={0}
                        anchorEl={anchor}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={openMenuBtn}
                        onClose={handleMenuClose}
                        sx={{
                            "& .MuiList-root": {
                                padding: 0,
                            },
                            "& .MuiPaper-root": {
                                borderRadius: "unset",
                            },
                        }}>
                        <MenuItem divider={true} pt={0} pb={0} mr={2} ml={2}>
                            <Link href="#" variant="title2" underline="none">
                                Home
                            </Link>
                        </MenuItem>
                        <MenuItem divider={true}>
                            <Link href="#" variant="title2" underline="none">
                                Reservation
                            </Link>
                        </MenuItem>
                        <MenuItem divider={true} mr={2} ml={2}>
                            <Link href="#" variant="title2" underline="none">
                                Events
                            </Link>
                        </MenuItem>
                        <MenuItem divider={true} mr={2}>
                            <Link href="#" variant="title2" underline="none">
                                Contact
                            </Link>
                        </MenuItem>
                    </Menu>
                </>
            ) : (
                <Stack
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    sx={{ width: "32%" }}>
                    <Link
                        href="#"
                        variant="title2"
                        underline="none"
                        sx={{
                            "& .MuiTypography-root": {
                                fontWeight: "bold",
                            },
                            ...(sticky
                                ? { color: theme.text.secondary }
                                : { color: theme.text.primary }),
                        }}>
                        Home
                    </Link>
                    <Link
                        href="#"
                        variant="title2"
                        underline="none"
                        sx={{
                            "& .MuiTypography-root-MuiLink-root": {
                                fontWeight: "bold",
                            },
                            ...(sticky
                                ? { color: theme.text.secondary }
                                : { color: theme.text.primary }),
                        }}>
                        Reservation
                    </Link>

                    <Link
                        href="#"
                        variant="title2"
                        underline="none"
                        sx={{
                            "& .MuiTypography-root-MuiLink-root": {
                                fontWeight: "bold",
                            },
                            ...(sticky
                                ? { color: theme.text.secondary }
                                : { color: theme.text.primary }),
                        }}>
                        Events
                    </Link>
                    <Link
                        href="#"
                        variant="title2"
                        underline="none"
                        sx={{
                            "& .MuiTypography-root-MuiLink-root": {
                                fontWeight: "bold",
                            },
                            ...(sticky
                                ? { color: theme.text.secondary }
                                : { color: theme.text.primary }),
                        }}>
                        Contact
                    </Link>
                </Stack>
            )}
        </AppBar>
    )
}

export default Header
