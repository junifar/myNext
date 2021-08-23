import { Fragment } from "react";
import style from "./index.module.css";

const Navbar2 = (props) => {
  return (
    <Fragment>
      <nav className={style.Navbar}>{props.children}</nav>
    </Fragment>
  );
};

const Navbar2Container = (props) => {
  return (
    <Fragment>
      <div className={style.NavbarContainer}>{props.children}</div>
    </Fragment>
  );
};

const Navbar2Logo = (props) => {
  return (
    <Fragment>
      <div className={style.NavbarLogo}>{props.children}</div>
    </Fragment>
  );
};

export default Navbar2;
export { Navbar2, Navbar2Container, Navbar2Logo };
