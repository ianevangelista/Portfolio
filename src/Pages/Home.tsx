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
  Fade,
  Button
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Projects from "./Projects";
import Loading from "../Components/Loading/Loading";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
  gh: string;
  demo: string;
  imgPath: string;
  info: string;
  tags: string[];
  allImages: string[];
}[] = [
  {
    title: "Harmoni",
    gh: "https://github.com/ianevangelista/Harmoni",
    demo: "https://harmoni-ui.firebaseapp.com/#/",
    imgPath: `./Local_files/Harmoni/harmoni.png`,
    info:
      "Team scrum-project in Software Engineering 2 with web applications. The team consisted of 10 students and we worked with a Scrum-master and a product owner. The main task was to develope a system for event planning. A demo is available by the use of Firebase and Heroku. Click the eye-icon above to see the demo",
    tags: [
      "TypeScript",
      "Material-UI",
      "ReactJS",
      "NodeJS",
      "Sequelize",
      "JEST"
    ],
    allImages: [
      `./Local_files/Harmoni/harmoni.png`,
      `./Local_files/Harmoni/profile.png`,
      `./Local_files/Harmoni/event.png`,
      `./Local_files/Harmoni/events.png`,
      `./Local_files/Harmoni/calendar.png`
    ]
  },
  {
    title: "Community News",
    gh: "https://github.com/ianevangelista/Miniprosjekt",
    demo: "https://community-news-client.herokuapp.com/#/",
    imgPath: `./Local_files/News/news.jpg`,
    info:
      "An individual project in the subject: Software Engineering 2 with web applications. The main task was to develope a system for reading and publishing news article for a community news-website. A demo is available by the use of Heroku. Click the eye-icon above to see the demo",
    tags: ["JavaScript", "Bootstrap", "ReactJS", "NodeJS", "JEST", "Flow"],
    allImages: [
      `./Local_files/News/news.jpg`,
      `./Local_files/News/article.jpg`,
      `./Local_files/News/article2.jpg`,
      `./Local_files/News/comments.jpg`,
      `./Local_files/News/category.jpg`,
      `./Local_files/News/register.jpg`
    ]
  },
  {
    title: "How Dumb R U?",
    gh: "https://github.com/ianevangelista/HowDumbRU",
    demo: "",
    imgPath: `./Local_files/HDRU/quiz.jpg`,
    info:
      "A team project in Software Engineering 1 with Database Project. The team consisted of 7 students and we worked with two product-owners. The main task was to develope a game which could be used simultaneously by multiple users. We created a quiz-game called How Dumb R U?",
    tags: ["Java", "JavaFX", "MySQL", "HikariCP"],
    allImages: [
      `./Local_files/HDRU/quiz.jpg`,
      `./Local_files/HDRU/register.jpg`,
      `./Local_files/HDRU/info.jpg`,
      `./Local_files/HDRU/feedback.jpg`,
      `./Local_files/HDRU/reset.jpg`
    ]
  },
  {
    title: "Three-Card Monte",
    gh: "https://github.com/ianevangelista/Three-Card-Monte",
    demo: "",
    imgPath: `./Local_files/Monte/monte.jpg`,
    info:
      "A team project in the subject: Introduction to programming, where we were given the opportunity to create any kind of robot. The idea was to create a robot which could play Three-card-monte. This project was made possible by using leJOS EV3.",
    tags: ["TypeScript", "Material UI", "React", "NodeJs", "Sequelize"],
    allImages: [`./Local_files/Monte/monte.jpg`, `./Local_files/Monte/demo.mp4`]
  },
  {
    title: "Portfolio",
    gh: "https://github.com/ianevangelista/Portfolio",
    demo: "",
    imgPath: `./Local_files/Etc/preview.jpg`,
    info:
      "This portfolio was made to showcase some of my recent projects. It is made by using TypeScript, Material-UI and ReactJS",
    tags: ["TypeScript", "Material-UI", "ReactJS"],
    allImages: [`./Local_files/Etc/preview.jpg`]
  }
];

const Home = () => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const checkLoading = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        sessionStorage.setItem("session", "true");
        resolve();
      }, 1500);
    });
  };

  useEffect(() => {
    checkLoading().then(() => setLoading(false));
  }, [isLoading]);

  if (isLoading && sessionStorage.getItem("session") !== "true") {
    return <Loading />;
  }
  return (
    <Fade in={true} timeout={2500}>
      <div>
        <Navigationbar />
        <Paper square className={classes.root}>
          <Grid container direction="row" className={classes.nameBox}>
            <Grid container direction="row">
              <Avatar
                variant="circle"
                alt="Ian Evangelista"
                src={"./Local_files/Etc/ian.jpg"}
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

                <a
                  href="mailto:ianevangelista1999@gmail.com?subject=Inquiry!&body=Hi, Ian!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <EmailIcon className={classes.icons} fontSize="large" />
                  </IconButton>
                </a>
                <IconButton>
                  <PhoneIcon
                    className={classes.icons}
                    fontSize="large"
                    onClick={handleOpen}
                  />
                </IconButton>
                {open && (
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth={true}
                    maxWidth="sm"
                  >
                    <DialogTitle id="alert-dialog-title">Call me</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <Typography>My phonenumber: +47 45049804</Typography>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} autoFocus>
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Projects projects={projects} />
      </div>
    </Fade>
  );
};
export default Home;
