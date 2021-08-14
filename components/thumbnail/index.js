import { makeStyles } from "@material-ui/core";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  topMargin: {
    marginTop: 60
  }
}));

const Thumbnail = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <h1 className={classes.topMargin}>Thumbnail</h1>
    </Fragment>
  );
};

export default Thumbnail;
