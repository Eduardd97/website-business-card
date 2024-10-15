import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";

import codingLogo from "../../assets/logoWite.png";
import avatar from "../../assets/avatar/photo_2024-09-17_20-16-29.jpg";

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const routers = [
        { title: "Home Page", path: "/" },
        { title: "About me", path: "/about-me" },
        { title: "My Gallery", path: "/gallery" },
        { title: "CV", path: "/CV-and-CoverLetter" },
        { title: "Certificates", path: "/certificates" },
        { title: "Contacts", path: "/contact-me" },
    ];

    const aboutMeRoute = routers.find((route) => route.path === "/about-me");

    const homePage = routers.find((route) => route.path === "/");

    return (
        <AppBar position='static' sx={{ backgroundColor: "#000" }}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                        variant='h6'
                        noWrap
                        component='a'
                        href='#app-bar-with-responsive-menu'
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        <img
                            src={codingLogo}
                            alt='codingLogo'
                            style={{ widows: "80px", height: "80px" }}
                        />
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: "block", md: "none" } }}
                        >
                            {routers.map((routePage, i) => (
                                <MenuItem
                                    key={routePage.title + i}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography sx={{ textAlign: "center" }}>
                                        <Link
                                            to={routePage.path}
                                            style={{
                                                textDecoration: "none",
                                                color: "#000",
                                            }}
                                        >
                                            {routePage.title}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {homePage && (
                        <Box
                            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                        >
                            {" "}
                            <Link to={homePage.path}>
                                <img
                                    src={codingLogo}
                                    alt='codingLogo'
                                    style={{ width: "80px", height: "80px" }}
                                />
                            </Link>
                        </Box>
                    )}
                    <Typography
                        variant='h5'
                        noWrap
                        component='a'
                        href='#app-bar-with-responsive-menu'
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    ></Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {routers.map((routPage) => (
                            <Button
                                key={routPage.title}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                <Link
                                    to={routPage.path}
                                    style={{
                                        textDecoration: "none",
                                        fontSize: "16px",
                                        color: "#fff",
                                    }}
                                >
                                    {routPage.title}
                                </Link>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {aboutMeRoute && (
                            <Tooltip title={aboutMeRoute.title}>
                                <Link to={aboutMeRoute.path}>
                                    <Avatar
                                        alt='Remy Sharp'
                                        src={avatar}
                                        style={{
                                            width: "70px",
                                            height: "70px",
                                        }}
                                    />
                                </Link>
                            </Tooltip>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
