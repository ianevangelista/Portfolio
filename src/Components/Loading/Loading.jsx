import React from "react";
import { makeStyles, createStyles, Typography, Grid } from "@material-ui/core";
const useStyles = makeStyles(
  createStyles({
    root: {
      background: "black",
      width: "100%",
      height: "100vh"
    },
    text: {
      color: "white"
    },
    spinner: {
      position: "relative",
      top: "40%",
      webkitTransform: "translateY(-40%)",
      msTransform: "translateY(-40%)",
      transform: "translateY(-40%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    wait: {
      position: "relative",
      top: "30%",
      webkitTransform: "translateY(-30%)",
      msTransform: "translateY(-30%)",
      transform: "translateY(-30%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  })
);
const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.spinner}>
        <Grid item>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
              margin: "auto",
              backgroundImage: "none",
              display: "block",
              shapeRendering: "auto",
              backgroundPosition: "initial initial",
              backgroundRepeat: "initial initial"
            }}
            width="350px"
            height="350px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <g transform="translate(50 50)">
              <g>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0;45"
                  keyTimes="0;1"
                  dur="0.689655172413793s"
                  repeatCount="indefinite"
                ></animateTransform>
                <path
                  d="M29.491524206117255 -5.5 L37.491524206117255 -5.5 L37.491524206117255 5.5 L29.491524206117255 5.5 A30 30 0 0 1 24.742744050198738 16.964569457146716 L24.742744050198738 16.964569457146716 L30.399598299691117 22.621423706639096 L22.621423706639096 30.399598299691114 L16.964569457146716 24.742744050198734 A30 30 0 0 1 5.5 29.491524206117255 L5.5 29.491524206117255 L5.5 37.491524206117255 L-5.499999999999997 37.491524206117255 L-5.499999999999997 29.491524206117255 A30 30 0 0 1 -16.964569457146705 24.742744050198738 L-16.964569457146705 24.742744050198738 L-22.621423706639085 30.399598299691117 L-30.399598299691117 22.621423706639092 L-24.742744050198738 16.964569457146712 A30 30 0 0 1 -29.491524206117255 5.500000000000009 L-29.491524206117255 5.500000000000009 L-37.491524206117255 5.50000000000001 L-37.491524206117255 -5.500000000000001 L-29.491524206117255 -5.500000000000002 A30 30 0 0 1 -24.742744050198738 -16.964569457146705 L-24.742744050198738 -16.964569457146705 L-30.399598299691117 -22.621423706639085 L-22.621423706639096 -30.399598299691117 L-16.964569457146716 -24.742744050198738 A30 30 0 0 1 -5.5000000000000115 -29.491524206117255 L-5.5000000000000115 -29.491524206117255 L-5.500000000000013 -37.491524206117255 L5.499999999999998 -37.491524206117255 L5.5 -29.491524206117255 A30 30 0 0 1 16.964569457146702 -24.74274405019874 L16.964569457146702 -24.74274405019874 L22.62142370663908 -30.39959829969112 L30.399598299691117 -22.6214237066391 L24.742744050198738 -16.964569457146716 A30 30 0 0 1 29.491524206117255 -5.500000000000013 M0 -20A20 20 0 1 0 0 20 A20 20 0 1 0 0 -20"
                  fill="#ffffff"
                ></path>
              </g>
            </g>
          </svg>
        </Grid>
      </Grid>
      <Grid container className={classes.wait}>
        <Grid item>
          <Typography variant="h3" className={classes.text}>
            Please wait
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Loading;
