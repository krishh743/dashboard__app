import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItems from "./ListItems";

const drawerWidth = 240;
const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	"& .MuiDrawer-paper": {
		position: "relative",
		whiteSpace: "nowrap",
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		boxShadow: "0 3px 6px #00000029",
		boxSizing: "border-box",
		...(!open && {
			overflowX: "hidden",
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up("sm")]: {
				width: theme.spacing(9),
			},
		}),
	},
}));

const SideNavbar = ({ open, toggleDrawer, isLogin }) => {
	return (
		<Drawer className={isLogin?"hide":""} sx={{ height: "100vh" }} variant="permanent" open={open}>
			<List component="nav">
				<ListItems toggleDrawer={toggleDrawer} open={open} />
			</List>
		</Drawer>
	);
};

export default SideNavbar;
