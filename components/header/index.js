import { makeStyles } from "@material-ui/core";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  headerArea: {
    // background-color: #fff;
    // position: absolute;
    // top: 0px;
    // left: 0px;
    // right: 0px;
    // z-index: 100;
    // height: 100px;
    // -webkit-transition: all .5s ease 0s;
    // -moz-transition: all .5s ease 0s;
    // -o-transition: all .5s ease 0s;
    // transition: all .5s ease 0s;
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <header className="classes.headerArea">test</header>
    </Fragment>
  );
};

export default Header;
