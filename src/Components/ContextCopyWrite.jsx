import React from "react";

import { makeStyles, Box, Typography, Grid, Paper } from "@material-ui/core";

import contentUXImage from "../Images/contentCopyWrite.svg";

import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContext: "center",
    background:
      "linear-gradient(-90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%)",
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    height: "90.8vh",
  },
  paper: {
    textAlign: "center",
    padding: theme.spacing(2),
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(8),
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
    border: "none",
    boxShadow: "none",
    color: "inherit",
    background: "inherit",
    "& h2": {
      color: "#fff",
      fontSize: "3.9rem",
      fontFamily: "Georgia,Times New Roman,Times,serif",
      marginBottom: theme.spacing(3),
    },
    "& p": {
      color: "#fff",
      fontSize: "1.1rem",
    },
  },
}));

const ContextCopyWrite = () => {
  const classes = useStyles();

  const { keyframes, timing } = heartBeat;
  const contentCopyWriting = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 500,
      duration: 5000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });

  return (
    <Box component="div" className={classes.root}>
      <Grid container>
        <Grid item md>
          <Paper className={classes.paper} style={{ marginTop: "150px" }}>
            <img
              src={contentUXImage}
              ref={contentCopyWriting.ref}
              alt="contentUX"
            />
          </Paper>
        </Grid>
        <Grid item md>
          <Paper className={classes.paper}>
            <Typography variant="h2">Website Copywriting</Typography>
            <Typography component="p">
              Your website is a dialogue with your audience. I capture the
              essence of your business and communicate it clearly. Carefully
              considered writing and SEO best practices allow me to craft the
              perfect user journey online. Let me draw the map that guides users
              every step of the way from discovery, to consideration, to
              conversion.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContextCopyWrite;