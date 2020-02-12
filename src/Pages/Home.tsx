import React, { useState, useEffect } from "react";
import Navigationbar from "../Components/Navigationbar";
import {
  makeStyles,
  createStyles,
  Paper,
  Theme,
  Avatar,
  Grid,
  Typography,
  IconButton,
  Fade
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import SideBar from "../Components/SideBar";
import Loading from "../Components/Loading/Loading";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url(./Local_files/Background/background.jpg)`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },
    image: {
      width: theme.spacing(30),
      height: theme.spacing(30),
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3)
    },
    name: {
      color: "white",
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(2),
      "@media (max-width:900px)": {
        fontSize: "2rem"
      }
    },
    info: {
      color: "white",
      marginTop: theme.spacing(2),
      "@media (max-width:900px)": {
        fontSize: "0.9rem",
        marginTop: theme.spacing(2)
      }
    },
    infoBox: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3)
    },
    nameBox: {
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3)
    },
    icons: {
      color: "white"
    }
  })
);

const projects: {
  title: string;
  imgPath: string;
  allImages: string[];
  info: string;
}[] = [
  {
    title: "Scrum Project 2020",
    imgPath: `./Local_files/Harmoni/harmoni.png`,
    allImages: [
      `./Local_files/Harmoni/harmoni.png`,
      `./Local_files/Harmoni/profile.png`,
      `./Local_files/Harmoni/events.png`,
      `./Local_files/Harmoni/calendar.png`,
      `./Local_files/Harmoni/event.png`
    ],
    info:
      "Team project in Software Engineering 2 with web applications. The team consisted of 10 students and we worked with a Scrum-master and a product owner. The main task was to develope a system for event planning."
  },
  {
    title: "Community News Website",
    imgPath: `./Local_files/News/news.png`,
    allImages: [`./Local_files/News/news.png`],
    info:
      "An individual project in Software Engineering 2 with web applications. The main task was to develope a system for reading and publishing news article for a community news-website."
  },
  {
    title: "How Dumb R U?",
    imgPath: `./Local_files/HDRU/quiz.png`,
    allImages: [`./Local_files/HDRU/quiz.png`],
    info:
      "A team project in Software Engineering 1 with Database Project. The team consisted of 7 students and we worked with two product-owners. The main task was to develope a game which could be used simultaneously by multiple users. We created a quiz-game called How Dumb R U?"
  },
  {
    title: "Three-Card Monte",
    imgPath: `./Local_files/Monte/monte.jpg`,
    allImages: [`./Local_files/Monte/monte.jpg`],
    info: "Info is coming"
  },
  {
    title: "IDI-Rally 2018",
    imgPath: `./Local_files/IceCream/icecream.jpg`,
    allImages: [`./Local_files/IceCream/icecream.jpg`],
    info: "Info is coming"
  }
];

const Home = () => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);

  function checkLoading() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1500);
    });
  }

  useEffect(() => {
    checkLoading().then(() => setLoading(false));
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Fade in={true} timeout={1500}>
      <div>
        <Navigationbar />
        <Paper square className={classes.root}>
          <Grid container direction="row" className={classes.nameBox}>
            <Grid container direction="row">
              <Avatar
                variant="circle"
                alt="Ian Evangelista"
                src={"./Local_files/Etc/ian.png"}
                className={classes.image}
              />
              <Grid>
                <Typography className={classes.name} variant="h2">
                  IAN
                </Typography>
                <Typography className={classes.name} variant="h2">
                  EVANGELISTA
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row" className={classes.infoBox}>
              <Grid container direction="row">
                <Typography className={classes.info} variant="h4">
                  Norwegian University of Science and Technology
                </Typography>
              </Grid>
              <Grid container direction="row">
                <Typography className={classes.info} variant="h4">
                  Computer Engineering
                </Typography>
              </Grid>
              <Grid container direction="row">
                <a
                  href="https://github.com/ianevangelista"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <GitHubIcon className={classes.icons} fontSize="large" />
                  </IconButton>
                </a>
                <a
                  href="https://www.linkedin.com/in/ianevangelista/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <LinkedInIcon className={classes.icons} fontSize="large" />
                  </IconButton>
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <SideBar projects={projects} />
      </div>
    </Fade>
  );
};
export default Home;
