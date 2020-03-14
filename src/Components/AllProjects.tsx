import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews, { SpringConfig } from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const springConfig: SpringConfig = {
  duration: "7.5s",
  easeFunction: "cubic-bezier(0.1, 0.35, 0.2, 1.2)",
  delay: "0s"
};
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 650,
    flexGrow: 1,
    marginTop: 40,
    "@media (max-width:1668px)": {
      marginTop: 0
    },
    "@media (max-width:1024px)": {
      marginTop: 0,
      maxWidth: 380
    },
    "@media (max-width:768px)": {
      marginTop: 0,
      maxWidth: 300
    },
    "@media (max-width:450px)": {
      marginTop: 20,
      maxWidth: 190,
      margin: "0 auto"
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
    height: 270,
    display: "block",
    maxWidth: 650,
    overflow: "hidden",
    objectFit: "cover",
    "@media (max-width:450px)": {
      height: 130
    }
  },
  stepper: {
    backgroundColor: "transparent",
    color: "white"
  },
  btn: {
    color: "white"
  },
  imgContainer: {
    maxWidth: 650,
    display: "flex",
    justifyContent: "center",
    "@media (max-width:450px)": {
      maxWidth: 240,
      margin: "0 auto"
    }
  }
}));

const AllProjects = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.projects.length;
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
        springConfig={springConfig}
      >
        {props.projects.map((step: any, index: number) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div className={classes.imgContainer}>
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.title}
                />
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

export default AllProjects;
