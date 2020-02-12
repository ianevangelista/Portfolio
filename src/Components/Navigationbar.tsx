import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
  fade
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Grid,
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "transparent",
      boxShadow: "none"
    },

    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    rightButtons: {
      position: "absolute",
      right: 0
    },
    drawer: {
      width: drawerWidth,
      variant: "persistent"
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      ...theme.mixins.toolbar,
      justifyContent: "flex-start"
    },

    drawPaper: {
      width: drawerWidth
    },

    cvBtn: {
      [theme.breakpoints.down("xs")]: {
        display: "none"
      },
      transition: "transform 0.2s",
      "&:hover": {
        transform: "scale(1.1)"
      }
    },
    aboutBtn: {
      [theme.breakpoints.down("xs")]: {
        display: "none"
      },
      transition: "transform 0.2s",
      "&:hover": {
        transform: "scale(1.1)"
      }
    },
    projectsBtn: {
      [theme.breakpoints.down("xs")]: {
        display: "none"
      },
      transition: "transform 0.2s",
      "&:hover": {
        transform: "scale(1.1)"
      }
    },
    mobileMenuButton: {
      color: theme.palette.common.white,
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "block"
      },
      "&:hover": {
        color: fade(theme.palette.common.white, 0.7)
      }
    }
  })
);
const drawerWidth = 240;

const NavigationBar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerCV = () => {
    window.location.hash = "/";
    handleDrawerClose();
  };

  const handleDrawerAbout = () => {
    handleDrawerClose();
  };
  const handleDrawerProjects = () => {
    window.location.hash = "/";
    handleDrawerClose();
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            className={classes.mobileMenuButton}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit">
            <Typography variant="h6">PORTFOLIO</Typography>
          </Button>
          <Box className={classes.rightButtons}>
            <Grid container direction="row" alignItems="center">
              <a
                href="./Local_files/Etc/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "white"
                }}
              >
                <Button color="inherit" className={classes.cvBtn}>
                  <Typography>CURRICULUM VITAE</Typography>
                </Button>
              </a>
              <Button color="inherit" className={classes.aboutBtn}>
                <Typography>ABOUT</Typography>
              </Button>
              <Button color="inherit" className={classes.projectsBtn}>
                <Typography>PROJECTS</Typography>
              </Button>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawPaper }}
        onClose={handleDrawerClose}
        open={open}
        anchor="right"
      >
        <Box className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Box>
        <Divider />
        <List>
          <a
            href="./Local_files/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "black"
            }}
          >
            <ListItem button onClick={handleDrawerCV}>
              <ListItemText> CURRICULUM VITAE </ListItemText>
            </ListItem>
          </a>
          <ListItem button onClick={handleDrawerAbout}>
            <ListItemText> ABOUT </ListItemText>
          </ListItem>
          <ListItem button onClick={handleDrawerProjects}>
            <ListItemText> PROJECTS </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};
export default NavigationBar;
