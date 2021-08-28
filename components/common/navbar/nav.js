import { Link } from "@material-ui/core";
import { Fragment } from "react";

const Nav = () => {
  return (
    <Fragment>
      <nav>
        <Link
          variant="button"
          color="inherit"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
          underline="none">
          Features
        </Link>
        <Link
          variant="button"
          color="inherit"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
          underline="none">
          {" "}
          Enterprise
        </Link>
        <Link
          variant="button"
          color="inherit"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
          underline="none">
          {" "}
          Support
        </Link>
      </nav>
    </Fragment>
  );
};

export default Nav;
