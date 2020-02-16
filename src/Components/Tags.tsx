import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: theme.spacing(2.5),
      background: "transparent"
    },
    chip: {
      marginRight: theme.spacing(1.5),
      fontSize: "1rem",
      "@media (max-width:450px)": {
        fontSize: "0.5rem",
        margin: theme.spacing(0.5)
      }
    }
  })
);

export default function ChipsArray(props: any) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {props.tags.map((data: any) => {
        return <Chip label={data} className={classes.chip} />;
      })}
    </Paper>
  );
}
