import React from "react";

import { makeStyles, Box, Typography } from "@material-ui/core";

import ProfileImage from "../Images/profile_pic.svg";

import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "rgb(102,17,164)",
    minHeight: "500px",
    padding: "20xp",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarColumn: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexFlow: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
    "& img": {
      width: "100%",
      margin: "auto",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      maxWidth: "350px",
      borderRadius: "50%",
      border: "10px double #ffffff",
      overflow: "hidden",
    },
    "& p": {
      fontSize: "20px",
      marginTop: "20px",
      marginBotton: "20px",
      fontWeight: "200",
      fontStyle: "italic",
    },
  },
}));

const About = () => {
  const classes = useStyles();

  const { keyframes, timing } = fadeIn;
  const about = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 200,
      duration: 6000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });

  return (
    <Box component="div" className={classes.root}>
      <Box component="div" classname={classes.avatarColumn}>
        <Box component="div" className={classes.avatar}>
          <img
            src={ProfileImage}
            alt="profile"
            ref={about.ref}
            style={{ height: "250px", width: "250px" }}
          />
          <Typography component="p">
            <strong>Developer Name</strong>, Muhammad adil
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;