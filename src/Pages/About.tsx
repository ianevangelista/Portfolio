import React from "react";
import { Typography, makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: "white",
      marginTop: 40
    }
  })
);
const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography>Hei</Typography>
    </div>
  );
};

export default About;
