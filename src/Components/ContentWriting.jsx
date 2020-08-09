import React from "react";

import { makeStyles, Box, Typography, Grid, Paper } from "@material-ui/core";

import contentWritingImage from "../Images/contentWriting.svg";

import useWebAnimations, { tada } from "@wellyshen/use-web-animations";

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

const ContentWriting = () => {
  const classes = useStyles();

  const { keyframes, timing } = tada;
  const contentWriting = useWebAnimations({
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
          <Paper className={classes.paper}>
            <Typography variant="h2">Content Writing</Typography>
            <Typography component="p">
              Give your business a competitive edge with powerful content that
              can be targeted to any segment of your audience. No matter how
              large or complex your project, my custom-built solutions including
              articles, eDMs, and case studies will help you implement a plan
              that maximizes your business’s online exposure.
            </Typography>
          </Paper>
        </Grid>
        <Grid item md>
          <Paper className={classes.paper} style={{ marginTop: "110px" }}>
            <img
              src={contentWritingImage}
              ref={contentWriting.ref}
              alt="Content Writing"
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentWriting;