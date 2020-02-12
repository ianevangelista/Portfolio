import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const allProjects: { title: string; imgPath: string }[] = [
  {
    title: "Scrum Project 2020",
    imgPath: `./Local_files/Harmoni/harmoni.png`
  },
  {
    title: "Community News Website",
    imgPath: `./Local_files/news.png`
  },
  {
    title: "How Dumb R U?",
    imgPath: `./Local_files/quiz.png`
  },
  {
    title: "Three-Card Monte",
    imgPath: `./Local_files/monte.jpg`
  },
  {
    title: "IDI-Rally 2018",
    imgPath: `./Local_files/icecream.jpg`
  }
];
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 500,
    flexGrow: 1,
    marginTop: 40,

    "@media (max-width:1367px)": {
      marginTop: 0
    },
    "@media (max-width:900px)": {
      marginTop: 20,
      maxWidth: 240
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
    maxWidth: 500,
    overflow: "hidden",
    objectFit: "cover",
    "@media (max-width:900px)": {
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
    maxWidth: 500,
    display: "flex",
    justifyContent: "center",
    "@media (max-width:900px)": {
      maxWidth: 240
    }
  }
}));

const AllProjects = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = allProjects.length;
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
        {allProjects.map((step: any, index: number) => (
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
