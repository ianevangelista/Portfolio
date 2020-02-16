import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Slider from "../Components/Slider";
import { Grid } from "@material-ui/core";
import AllProjects from "./AllProjects";
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 380,
    backgroundImage: `url(./Local_files/Background/background2.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    "@media (max-width: 450px)": {
      height: 330
    }
  },
  tabContainer: {
    "@media (max-width: 450px)": {
      minWidth: "150px"
    }
  },
  firstTab: {
    fontSize: "1.75rem",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.1)"
    },
    "@media (max-width:450px)": {
      fontSize: "0.85rem"
    }
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    color: "white"
  },
  projectTabs: {
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.1)"
    },
    "@media (max-width:900px)": {
      fontSize: "0.7rem"
    }
  },
  projectHeader: {
    color: "white",
    marginRight: "30px",
    "@media (max-width:1024px)": {
      fontSize: "3.1rem"
    },
    "@media (max-width:450px)": {
      fontSize: "1.7rem",
      marginBottom: 5,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  indicator: {
    backgroundColor: "white"
  },
  selectedTabs: {
    color: "white"
  },
  gridHeader: {
    "@media (max-width:450px)": {
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
}));

const SideBar = (props: any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.tabContainer}>
        <Tabs
          scrollButtons="off"
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          className={classes.tabs}
          classes={{
            indicator: classes.indicator
          }}
        >
          <Tab
            label="Projects"
            {...a11yProps(0)}
            className={classes.firstTab}
          />
          {props.projects.map((p: any, i: number) => (
            <Tab
              key={i + 1}
              label={p.title}
              {...a11yProps(i + 1)}
              className={classes.projectTabs}
            />
          ))}
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <Grid container direction="row">
          <Grid item className={classes.gridHeader}>
            <Grid container direction="row">
              <Typography variant="h1" className={classes.projectHeader}>
                Read some
              </Typography>
            </Grid>
            <Grid container direction="row">
              <Typography variant="h1" className={classes.projectHeader}>
                of my
              </Typography>
            </Grid>
            <Grid container direction="row">
              <Typography variant="h1" className={classes.projectHeader}>
                selected works
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <AllProjects projects={props.projects} />
          </Grid>
        </Grid>
      </TabPanel>
      {props.projects.map((p: any, i: number) => (
        <TabPanel value={value} index={i + 1} key={i + 1}>
          <Typography variant="h6" className={classes.selectedTabs}>
            <Slider project={p} />
          </Typography>
        </TabPanel>
      ))}
    </div>
  );
};

export default SideBar;
