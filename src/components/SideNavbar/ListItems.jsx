import React, { useState, useEffect } from "react";import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "../../assets/images/dashboard_menu_icon.png";
import PreApprovedIcon from "../../assets/images/pre_approved_menu_icon.png";
import SettingIcon from "../../assets/images/manage_menu_icon.png";
import MenuIcon from "../../assets/images/menu.png";
import MenuIconOpen from "../../assets/images/menu_open.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, useLocation } from "react-router-dom";
import {
	LIST_MAIN_ITEM_1,
	LIST_MAIN_ITEM_2,
	LIST_MAIN_ITEM_3,
	LIST_MAIN_ITEM_4,
	LIST_MAIN_ITEM_5,
} from "../../utils/cms";
import "./SideNavbar.css";

const ListItems = ({ toggleDrawer, open }) => {
	const location = useLocation();
	const [pathArray, setPathArray] = useState(location.pathname.split("/"));

	useEffect(() => {
		setPathArray(location.pathname.split("/"));
	}, [location]);

	return (
    <>
      <ListItemIcon className="nav-opener" onClick={toggleDrawer}>
        {open ? (
          <img className="menu-icon" src={MenuIconOpen} alt="" />
        ) : (
          <img className="menu-icon" src={MenuIcon} alt="" />
        )}
      </ListItemIcon>
      <Link to="/dashboard">
        <ListItemButton
          className="list-item dashboard-list-item"
          selected={pathArray.includes("dashboard")}
        >
          <ListItemIcon>
            <img src={DashboardIcon} alt="" />
          </ListItemIcon>
          <ListItemText primary={LIST_MAIN_ITEM_1} />
        </ListItemButton>
      </Link>
      <Link to="/captured-vehicle">
        <ListItemButton
          className="list-item dashboard-list-item"
          selected={pathArray.includes("dashboard")}
        >
          <ListItemIcon>
            <img src={DashboardIcon} alt="" />
          </ListItemIcon>
          <ListItemText primary={LIST_MAIN_ITEM_2} />
        </ListItemButton>
      </Link>
      <Link to="/registered-vehicle">
        <ListItemButton
          className="list-item dashboard-list-item"
          selected={pathArray.includes("dashboard")}
        >
          <ListItemIcon>
            <img src={DashboardIcon} alt="" />
          </ListItemIcon>
          <ListItemText primary={LIST_MAIN_ITEM_3} />
        </ListItemButton>
      </Link>
      <Link to="/license">
        <ListItemButton
          className="list-item dashboard-list-item"
          selected={pathArray.includes(LIST_MAIN_ITEM_4)}
        >
          <ListItemIcon>
            <img src={DashboardIcon} alt="" />
          </ListItemIcon>
          <ListItemText primary={LIST_MAIN_ITEM_5} />
        </ListItemButton>
      </Link>
    </>
  );
};

export default ListItems;
