import React from "react";
import Navigationbar from "../Components/Navigationbar";
import {
  makeStyles,
  createStyles,
  Paper,
  Theme,
  Avatar,
  Grid,
  Typography,
  IconButton
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
        fontSize: "2.5rem"
      }
    },
    info: {
      color: "white",
      marginTop: theme.spacing(2),
      "@media (max-width:900px)": {
        fontSize: "1.2rem",
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
    },
    test: {
      fontSize: "1.2rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem"
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "2.4rem"
      }
    }
  })
);
const Home = () => {
  const classes = useStyles();

  return (
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
              <IconButton>
                <GitHubIcon className={classes.icons} fontSize="large" />
              </IconButton>
              <IconButton>
                <LinkedInIcon className={classes.icons} fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default Home;
