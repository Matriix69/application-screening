import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import styled from "@emotion/styled";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { routes } from "../libs/contants";
import { useSelector } from "react-redux";
import { allApplicants } from "../app/applicantsSlice";
import { getDataCount } from "../libs/utile";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const AppBarStyled = styled(AppBar)({
    color: "black",
    background: "white",
    boxShadow: "0px 1px 18px rgba(0, 0, 0, 0.12)",
    height: 64,
    paddingRight: 0,
    "@media (min-width: 780px)": {
        height: 100,
    },
    "& .MuiToolbar-root": {
        height: 64,
        padding: 0,
        "@media (min-width: 780px)": {
            height: 100,
        },
    },
});
const DrawerStyled = styled(Drawer)({
    "& .MuiDrawer-paper": {
        borderRight: "none !important",
        boxShadow: "0px 4px 23px rgba(0, 0, 0, 0.05)",
    },
});

export default function ResponsiveDrawer(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawerWidth = openMenu ? 240 : 64;

    const applicants = useSelector(allApplicants);

    const drawer = (
        <div>
            <Toolbar>
                {!mobileOpen && (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => setOpenMenu(!openMenu)}
                        sx={{ mr: 2, my: 4 }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                )}
            </Toolbar>

            <List>
                {["Back", "Home"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{index % 2 === 0 ? <KeyboardBackspaceIcon /> : <CottageOutlinedIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <div className=" ml-3 mt-40 mb-8 h-10 w-10 rounded-full bg-[#1D4ED8] text-white text-sm flex items-center justify-center">
                <span>IC</span>
            </div>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBarStyled
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <nav className="header_nav ">
                        {routes.map((route) => (
                            <NavLink
                                to={route.path}
                                key={route.title}
                                className={({ isActive }) =>
                                    `flex flex-col gap-1 justify-center items-center  ${
                                        isActive ? "active_tab header_nav_links " : "header_nav_links"
                                    }`
                                }
                                end
                            >
                                <div className=" font-semibold text-xl">
                                    {getDataCount(applicants)[route.title as keyof unknown]}
                                </div>
                                <div> {route.title}</div>
                            </NavLink>
                        ))}
                    </nav>
                </Toolbar>
            </AppBarStyled>
            <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <DrawerStyled
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        border: "none",
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}
                >
                    {drawer}
                </DrawerStyled>
                <DrawerStyled
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </DrawerStyled>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
                <Toolbar />
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}
