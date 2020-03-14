import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ReactPlayer from "react-player";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 900,
    flexGrow: 1,
    margin: "0 auto",

    "@media (max-width:1366px)": {
      marginTop: 20,
      maxWidth: 800
    },
    "@media (max-width:768px)": {
      marginTop: 20,
      maxWidth: 800
    },
    "@media (max-width:450px)": {
      marginTop: 20,
      maxWidth: 400
    }
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    backgroundColor: "transparent",
    color: "white",
    justifyContent: "center"
  },
  img: {
    height: 470,
    display: "block",
    maxWidth: 900,
    overflow: "hidden",
    objectFit: "cover",
    "@media (max-width:1366px)": {
      height: 470
    },
    "@media (max-width:450px)": {
      height: 150
    }
  },
  stepper: {
    backgroundColor: "transparent",
    color: "white"
  },
  btn: {
    color: "black"
  },
  imgContainer: {
    maxWidth: 900,
    display: "flex",
    justifyContent: "center",
    "@media (max-width:1366px)": {
      maxWidth: 900
    },
    "@media (max-width:450px)": {
      maxWidth: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
}));

const Project = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.project.allImages.length;
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props.project.allImages.map((step: any, index: number) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div className={classes.imgContainer}>
                {step.split(".").pop(-1) !== "mp4" ? (
                  <img
                    className={classes.img}
                    src={step}
                    alt={props.project.title}
                  />
                ) : (
                  <ReactPlayer
                    url={step}
                    playing={false}
                    controls={true}
                  ></ReactPlayer>
                )}
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        className={classes.stepper}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            className={classes.btn}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            className={classes.btn}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
};

export default Project;
