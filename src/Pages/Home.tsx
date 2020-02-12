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
      backgroundImage: `url(./Local_files/background.png)`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "750px",
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

const resources: { title: string; imgPath: string; isProject: boolean }[] = [
  {
    title: "Scrum Project 2020",
    imgPath: `./Local_files/Harmoni/harmoni.png`,
    isProject: true
  },
  {
    title: "Community News Website",
    imgPath: `./Local_files/news.png`,
    isProject: true
  },
  {
    title: "How Dumb R U?",
    imgPath: `./Local_files/quiz.png`,
    isProject: true
  },
  {
    title: "Three-Card Monte",
    imgPath: `./Local_files/monte.jpg`,
    isProject: true
  },
  {
    title: "IDI-Rally 2018",
    imgPath: `./Local_files/icecream.jpg`,
    isProject: true
  },
  {
    title: "Background 1",
    imgPath: `./Local_files/bacground.png`,
    isProject: true
  },
  {
    title: "Background 2",
    imgPath: `./Local_files/background2.png`,
    isProject: true
  }
];
const Home = () => {
  const classes = useStyles();
  const [isLoading, setLoading] = useState(true);
  //const projects: any = [];

  function checkLoading() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2500);
    });
  }
  useEffect(() => {
    const checkImage = (path: any) => {
      new Promise(resolve => {
        const img = new Image();
        img.src = path.imgPath;
        img.onload = () => {
          resolve({ img, status: "ok" });
        };

        img.onerror = () => resolve({ img, status: "error" });
        //projects.push({ title, imgPath });
      });
    };
    Promise.all(resources.map(checkImage)).then(() => {
      checkLoading().then(() => setLoading(false));
    });
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
                variant="square"
                alt="Ian Evangelista"
                src={"./Local_files/ian.png"}
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
        <SideBar id="projects" />
      </div>
    </Fade>
  );
};
export default Home;
