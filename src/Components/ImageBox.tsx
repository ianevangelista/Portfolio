import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Project from "./Project";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      "@media (max-width:450px)": {
        marginTop: theme.spacing(0.15)
      }
    },
    btn: {
      color: "black"
    },
    viewBtn: {
      "@media (max-width:450px)": {
        fontSize: "0.1rem"
      }
    }
  })
);
export default function ImageBox(props: any) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button
        className={classes.viewBtn}
        variant="outlined"
        color="inherit"
        onClick={handleClickOpen}
      >
        View media
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title">{props.project.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Project project={props.project} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className={classes.btn} onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
