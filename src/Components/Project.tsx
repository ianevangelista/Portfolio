import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CardMedia from "@material-ui/core/CardMedia";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const allProjects: { title: string; imgPath: string }[] = [
  {
    title: "Scrum Project 2020",
    imgPath: `./Local_files/harmoni.png`
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
    maxWidth: 400,
    flexGrow: 1
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
    height: 455,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%"
  },
  stepper: {
    backgroundColor: "transparent",
    color: "white"
  },
  btn: {
    color: "white"
  }
}));

const Project = (props: any) => {
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
      <Paper square elevation={0} className={classes.header}>
        <Typography>{allProjects[activeStep].title}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {allProjects.map((step: any, index: number) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <CardMedia
                className={classes.img}
                src={step.imgPath}
                title={step.title}
              />
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
