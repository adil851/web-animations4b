import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  withStyles,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  List,
  Box,
} from "@material-ui/core";
import MobileLeftMenuSlider from "@material-ui/core/Drawer";

import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:
      "linear-gradient(90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)",
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  topBarText: {
    width: "500px",
    margin: "auto",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    color: "white",
    cursor: "pointer",
    position: "relative",
    flexFlow: "column",
  },
  // Side Bar
  sideBarContainer: {
    width: 250,
    background:
      "linear-gradient(90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)",
    height: "100%",
  },
  sideBarHeading: {
    margin: "1.2rem",
    textAlign: "center",
    color: "#fff",
  },
  listItem: {
    color: "#fff",
  },
  divider: {
    background: "#fff",
  },
}));

const genericListIcons = [
  {
    listIcon: <Home />,
    listText: "Home",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
  },
  {
    listIcon: <Apps />,
    listText: "Portrolio",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contact Me",
  },
];

const NavBar = () => {
  const [visible, setVisible] = useState({
    left: false,
  });

  const toggleSlider = (slider, open) => () => {
    setVisible({ ...visible, [slider]: open });
  };

  const classes = useStyles();

  const sideBar = () => (
    <Box
      className={classes.sideBarContainer}
      component="div"
      onClick={toggleSlider("left", false)}
    >
      <Typography className={classes.sideBarHeading}>Muhammad adil</Typography>
      <Divider className={classes.divider} />
      <List>
        {genericListIcons.map((item, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={item.listText}
            />
            <hr />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <AppBar component="nav" position="fixed" className={classes.root}>
        <Toolbar variant="dense">
          <IconButton
            onClick={toggleSlider("left", true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.topBarText}
          >
            <span>MUHAMMAD ADIL</span>
          </Typography>
          <MobileLeftMenuSlider
            anchor="left"
            open={visible.left}
            onClose={toggleSlider("left", false)}
          >
            {sideBar()}
          </MobileLeftMenuSlider>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(useStyles)(NavBar);