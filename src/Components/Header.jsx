import React from "react";

import { Typography, makeStyles, withStyles, Box } from "@material-ui/core";

import flashImage from "../Images/Intro_Featured_Image_Empty.svg";
import brainImage from "../Images/Brain.svg";

import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    background:
      "linear-gradient(90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)",
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    height: "90.8vh",
    marginTop: "60px",
  },
  flash: {
    marginTop: "-28rem",
  },
  rightSide: {
    margin: "120px",
    width: "60%",
    height: "350px",
    color: "#fff",
    padding: "40px",
    "& h4": {
      fontSize: "3.125rem",
    },
    "& p": {
      fontSize: "1.1rem",
      padding: "0px",
      marginBottom: "12px",
    },
    "& button": {
      cursor: "pointer",
      background:
        "linear-gradient(-90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%);",
      fontSize: "1.1rem",
      marginLeft: "0px",
      textTransform: "uppercase",
      color: "#fff",
      fontWeight: 700,
      borderRadius: "50px",
      border: "1px solid rgb(206, 2, 189)",
      padding: "15px 11px",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  const header = useWebAnimations({
    keyframes: {
      transform: "translateY(40px)",
    },
    timing: {
      duration: 1500, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });

  return (
    <Box component="section" className={classes.root}>
      <Box component="div">
        <img src={brainImage} ref={header.ref} alt="brain" height="500px" />
        <img
          src={flashImage}
          alt="flash"
          height="500px"
          className={classes.flash}
        />
      </Box>
      <Box component="div" className={classes.rightSide}>
        <Typography variant="h4">React Bootcamp</Typography>
        <p>After this we will be able to work on freelance market place</p>
        <button>React Stack</button>
      </Box>
    </Box>
  );
};

export default withStyles(useStyles)(Header);