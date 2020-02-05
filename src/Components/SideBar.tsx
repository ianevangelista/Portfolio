import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { createStyles } from "@material-ui/core/styles";

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
    color: "white"
  },
  projectTabs: {
    textTransform: "lowercase"
  },
  indicator: {
    backgroundColor: "white"
  },
  projectHeader: {
    color: "white",
    "@media (max-width:900px)": {
      fontSize: "2rem"
    }
  },
  selectedTabs: {
    color: "white"
  }
}));

export default function VerticalTabs() {
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
        <Tab label="PROJECTS" {...a11yProps(0)} />
        <Tab
          label="scrum project 2020"
          {...a11yProps(1)}
          className={classes.projectTabs}
        />
        <Tab
          label="community news paper"
          {...a11yProps(2)}
          className={classes.projectTabs}
        />
        <Tab
          label="how dumb r u?"
          {...a11yProps(3)}
          className={classes.projectTabs}
        />
        <Tab
          label="three-card monte"
          {...a11yProps(4)}
          className={classes.projectTabs}
        />
        <Tab
          label="idi-rally"
          {...a11yProps(5)}
          className={classes.projectTabs}
        />
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
      <TabPanel value={value} index={1}>
        <Typography variant="h6" className={classes.selectedTabs}>
          <SimpleSlide text={"Prosjekt 1"} />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h6" className={classes.selectedTabs}>
          <SimpleSlide text={"Prosjekt 2"} />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="h6" className={classes.selectedTabs}>
          <SimpleSlide text={"Prosjekt 3"} />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography variant="h6" className={classes.selectedTabs}>
          <SimpleSlide text={"Prosjekt 4"} />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Typography variant="h6" className={classes.selectedTabs}>
          <SimpleSlide text={"Prosjekt 5"} />
        </Typography>
      </TabPanel>
    </div>
  );
}

const newStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 180
    },
    wrapper: {
      width: 100 + theme.spacing(2)
    },
    paper: {
      zIndex: 1,
      position: "relative",
      margin: theme.spacing(1),
      background: "transparent",
      boxShadow: "none",
      color: "white"
    }
  })
);

const SimpleSlide = (props: any) => {
  const classes = newStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Slide
          direction="left"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 600 }}
        >
          <Paper className={classes.paper}>{props.text}</Paper>
        </Slide>
      </div>
    </div>
  );
};
