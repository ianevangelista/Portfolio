import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Slider from "../Components/Slider";
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
    height: 400,
    backgroundImage: `url(./Local_files/background2.png)`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    color: "white",
    "@media (max-width:900px)": {
      width: 90
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
  indicator: {
    backgroundColor: "white"
  },
  projectHeader: {
    color: "white",
    "@media (max-width:900px)": {
      fontSize: "1.7rem",
      marginBottom: "40px"
    }
  },
  selectedTabs: {
    color: "white"
  },
  firstTab: {
    fontSize: "1.75rem",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.1)"
    },
    "@media (max-width:900px)": {
      fontSize: "1rem"
    }
  }
}));

const scrum = {
  title: "Scrum Project 2020",
  desc: "Info"
};
const news = {
  title: "Community News Website",
  desc: "Info"
};
const quiz = {
  title: "How Dumb R U?",
  desc: "Info"
};
const monte = {
  title: "Three-Card Monte",
  desc: "Info"
};
const rally = {
  title: "IDI-Rally 2018",
  desc: "Info"
};

const projects = [scrum, news, quiz, monte, rally];

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
        > >
        <Tab label="PROJECTS" {...a11yProps(0)} className={classes.firstTab} />
        {projects.map((p: any, i) => (
          <Tab
            label={p.title}
            {...a11yProps(i + 1)}
            className={classes.projectTabs}
          />
        ))}
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography variant="h1" className={classes.projectHeader}>
          Read some
        </Typography>
        <Typography variant="h1" className={classes.projectHeader}>
          of my
        </Typography>
        <Typography variant="h1" className={classes.projectHeader}>
          selected works
        </Typography>
      </TabPanel>
      {projects.map((p: any, i: number) => (
        <TabPanel value={value} index={i + 1}>
          <Typography variant="h6" className={classes.selectedTabs}>
            <Slider project={p} />
          </Typography>
        </TabPanel>
      ))}
    </div>
  );
};

export default SideBar;
