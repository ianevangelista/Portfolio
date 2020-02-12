import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import { Typography, Grid } from "@material-ui/core";
import Project from "./Project";

const newStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 480
    },
    wrapper: {
      width: 700 + theme.spacing(2),
      "@media (max-width:900px)": {
        width: 180
      }
    },
    title: {
      "@media (max-width:900px)": {
        fontSize: "1.2rem"
      }
    }
  })
);

const Slider = (props: any) => {
  const classes = newStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Grid container direction="row">
          <Slide
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 600 }}
          >
            <Typography variant="h3" className={classes.title}>
              {props.project.title}
            </Typography>
          </Slide>
        </Grid>
        <Grid container direction="row">
          <Project />
        </Grid>
      </div>
    </div>
  );
};

export default Slider;
