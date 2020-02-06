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
    height: 600,
    backgroundImage: `url(./Local_files/background2.png)`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  firstTab: {
    fontSize: "1.75rem",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.1)"
    },
    "@media (max-width:900px)": {
      fontSize: "0.85rem"
    }
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    color: "white",
    "@media (max-width:900px)": {
      width: 140
    },
    "@media (max-width:600px)": {
      width: 190
    }
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
    marginRight: "80px",
    "@media (max-width:900px)": {
      fontSize: "1.7rem",
      marginBottom: "40px",
      marginRight: 20
    }
  },
  indicator: {
    backgroundColor: "white"
  },
  selectedTabs: {
    color: "white"
  }
}));

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

const SideBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        classes={{
          indicator: classes.indicator
        }}
      >
        <Tab label="Projects" {...a11yProps(0)} className={classes.firstTab} />
        {allProjects.map((p: any, i) => (
          <Tab
            key={i + 1}
            label={p.title}
            {...a11yProps(i + 1)}
            className={classes.projectTabs}
          />
        ))}
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid container direction="row">
          <Grid item>
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
            <AllProjects />
          </Grid>
        </Grid>
      </TabPanel>
      {allProjects.map((p: any, i: number) => (
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
