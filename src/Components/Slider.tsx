import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import { Typography, Grid, IconButton } from "@material-ui/core";
import Tags from "./Tags";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ImageBox from "./ImageBox";

const newStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 380
    },
    wrapper: {
      marginLeft: 50,
      width: "100vw" + theme.spacing(2),
      "@media (max-width:450px)": {
        marginLeft: 0
      }
    },
    title: {
      "@media (max-width:450px)": {
        fontSize: "1rem"
      }
    },
    info: {
      marginTop: 30,
      width: "45vw",
      "@media (max-width:1024px)": {
        marginTop: 20,
        maxWidth: 450,
        width: "45vw"
      },
      "@media (max-width:450px)": {
        marginTop: 20,
        maxWidth: 450,
        width: "25vw"
      }
    },
    text: {
      "@media (max-width:1024px)": {
        maxWidth: 450
      },
      "@media (max-width:450px)": {
        fontSize: "0.6rem",
        width: "52vw"
      }
    },
    icons: {
      fontSize: "2.2rem",
      color: "white",
      "@media (max-width:450px)": {
        fontSize: "0.7rem"
      }
    },
    iconsGrid: {
      marginLeft: 30,
      display: "flex",
      flexDirection: "row",

      "@media (max-width:450px)": {
        marginLeft: 0,
        marginTop: "-8px"
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
          <Grid className={classes.iconsGrid}>
            <Slide
              direction="left"
              in={true}
              mountOnEnter
              unmountOnExit
              timeout={{ enter: 600 }}
            >
              <div>
                <a
                  href={props.project.gh}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton>
                    <GitHubIcon className={classes.icons} />
                  </IconButton>
                </a>
              </div>
            </Slide>
            {props.project.demo !== "" ? (
              <Slide
                direction="left"
                in={true}
                mountOnEnter
                unmountOnExit
                timeout={{ enter: 600 }}
              >
                <div>
                  <a
                    href={props.project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconButton>
                      <VisibilityIcon className={classes.icons} />
                    </IconButton>
                  </a>
                </div>
              </Slide>
            ) : null}
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Slide
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 600 }}
          >
            <Grid item className={classes.info}>
              <Typography className={classes.text} variant="h6">
                {props.project.info}
              </Typography>
            </Grid>
          </Slide>
        </Grid>
        <Grid container direction="row">
          <Slide
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 600 }}
          >
            <Grid item>
              <ImageBox project={props.project} />
            </Grid>
          </Slide>
        </Grid>
        <Grid container direction="row">
          <Slide
            direction="left"
            in={true}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 600 }}
          >
            <Grid item>
              <Tags tags={props.project.tags} />
            </Grid>
          </Slide>
        </Grid>
      </div>
    </div>
  );
};

export default Slider;
